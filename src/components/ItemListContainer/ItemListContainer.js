import {useState, useEffect} from 'react'
import { seeStock } from '../../functions/seeStock'
import { ItemList } from '../ItemList/ItemList'
import { Loading } from '../Loading/Loading'
import './ItemListContainer.scss'

export const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState (false)

    useEffect( () => {

        setLoading(true)

        seeStock()
            .then((result) => {setProducts(result)})
            .catch((err) => {console.log(err)})
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <section className="item-list-container">
            <h2 className="item-list-title">{greeting}</h2>
            <hr/>
            
            { loading ? <Loading/> : <ItemList products={products} />}
            
        </section>
    )
}