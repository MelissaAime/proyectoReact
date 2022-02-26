import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Button } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { db } from "../../firebase/config";
import { collection, addDoc, Timestamp, updateDoc, doc, getDoc } from "firebase/firestore";

export const Checkout = () => {

    const {cart, totalCompra, clearCart} = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

    const generarOrden = () => {
        const orden = {
            comprador: values,
            items: cart,
            total: totalCompra(),
            fyh: Timestamp.fromDate(new Date())
        }

        const ordersRef = collection (db, "orden")

        addDoc(ordersRef, orden)
            .then((resp) => {

                cart.forEach((item) => {
                    const docRef = doc(db, 'productos', item.id)
                    getDoc(docRef)
                        .then((dbDoc) => {
                            updateDoc(docRef, {stock: dbDoc.data().stock - item.cantidad})
                        })
                })
                setOrderId(resp.id)
                clearCart()
            })
            .catch((err) => {
                console.log(err)
            })
    }
    
    const [values, setValues] = useState({
        nombre: '',
        email:'',
        tel: '',
    })
    
    const handleInputChange = (e) => {
        
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (values.nombre.length < 5) {
            alert("El nombre es demasiado corto")
            return
        }
        if (values.email.length < 7) {
            alert("El email es inválido")
            return
        }
        if (values.tel.length < 8) {
            alert("El teléfono es inválido")
            return
        }

        generarOrden()
    }

    if (orderId){
        return(
            <div className="container my-3">
                <h2>Gracias por tu compra</h2>
                <hr/>
                <h4>Tu número de orden es: {orderId}</h4>
                <Link to='/'>Volver</Link>
            </div>

        )
    }
    
    if (cart.length === 0) {
        return <Navigate to='/'/>
    }

    return (
        <div className="container my-4">
            <h2>Finalizar compra</h2>
            <hr/>

            <form onSubmit={handleSubmit}>
                <h5>Datos de contacto</h5>

                <p>Ingrese su nombre:</p>
                <input 
                    className="form-control mx-2 my-3" 
                    type='text' 
                    placeholder='Nombre'
                    value={values.nombre}
                    onChange={handleInputChange}
                    name='nombre'
                />
                <p>Ingrese su email:</p>
                <input 
                    className="form-control mx-2 my-3" 
                    type='email' 
                    placeholder='Email'
                    value={values.email}
                    onChange={handleInputChange}
                    name='email'
                />
                <p>Ingrese su telefono:</p>
                <input 
                    className="form-control mx-2 my-3" 
                    type='tel' 
                    placeholder='Tel'
                    value={values.tel}
                    onChange={handleInputChange}
                    name='tel'
                />

                <Button type='submit' className='button-mystyle'>Enviar</Button>
            </form>

        </div>
    )    
}