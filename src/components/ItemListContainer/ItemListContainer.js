import {useState, useEffect} from 'react'
import { seeStock } from '../../functions/seeStock'
import { ItemList } from '../ItemList/ItemList'
import { Loading } from '../Loading/Loading'
import './ItemListContainer.scss'
import { useParams } from 'react-router-dom'

export const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState (false)

    const { categId } = useParams()

    useEffect( () => {

        setLoading(true)

        seeStock()
            .then((result) => {
                if (categId){
                   setProducts( result.filter( (el) => el.category === categId) ) 
                } else {
                    setProducts(result)
                }
                
            })
            .catch((err) => {
                console.log(err)
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