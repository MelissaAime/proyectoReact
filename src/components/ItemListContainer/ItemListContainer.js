import {useState, useEffect} from 'react'
import { ItemList } from '../ItemList/ItemList'
import { Loading } from '../Loading/Loading'
import './ItemListContainer.scss'
import { useParams } from 'react-router-dom'
import { db } from '../../firebase/config'
import { collection, getDocs, query, where } from 'firebase/firestore'

export const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState (false)

    const { categId } = useParams()

    useEffect( () => {

        setLoading(true)

        const productosRef = collection(db, 'productos')

        const q = categId ? query(productosRef, where("category", "==", categId)) : productosRef

        getDocs(q)
            .then((resp) => {
                setProducts(resp.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }))
            })
            .finally(() => {
                setLoading(false)
            })

        
    }, [categId])

    return (
        <section className="item-list-container">
            
            { loading ? <Loading/> : <ItemList products={products} />}
            
        </section>
    )
}