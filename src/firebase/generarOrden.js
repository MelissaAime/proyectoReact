import { collection, writeBatch, getDocs, addDoc, Timestamp, query, where, documentId } from "firebase/firestore"
import { db } from "./config"


export const generarOrden = async (values, cart, totalCompra, setOrderId, clearCart) => {
    const orden = {
        comprador: values,
        items: cart,
        total: totalCompra(),
        fyh: Timestamp.fromDate(new Date())
    } 

    const batch = writeBatch(db)
    const ordersRef = collection(db, "orders")
    const productosRef = collection(db, "productos")
    
    const q = query(productosRef, where(documentId(), 'in', cart.map((el) => el.id)))
    const productos = await getDocs(q)
    const outOfStock = []
    
    productos.docs.forEach((doc) => {
        const item = cart.find((el) => el.id === doc.id)

        if (doc.data().stock >= item.cantidad) {
            batch.update(doc.ref, {
                stock: doc.data().stock - item.cantidad
            })
        } else {
            outOfStock.push(item)
        }
    })

    if (outOfStock.length === 0) {
        addDoc(ordersRef, orden)
            .then((doc) => {
                batch.commit()
                setOrderId(doc.id)
                clearCart()
            })
    } else {
        alert('sin stock')
    }
}