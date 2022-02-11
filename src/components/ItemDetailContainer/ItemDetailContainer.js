
import { useEffect, useState } from 'react';
import { seeStock } from '../../functions/seeStock';
import { useParams } from 'react-router-dom';
import { Loading } from '../Loading/Loading';
import { ItemDetail } from '../ItemDetail/ItemDetail';


export const ItemDetailContainer = () => {

    const [loading, setLoading] = useState (false)
    const [item, setItem] = useState (null)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        seeStock()
            .then((result) => {
                setItem( result.find( (el) => el.id === Number(itemId) ) )
                
            })
            
            .finally(() => {
                setLoading(false)
            })
    }, []) 

    return(
        <section>
            
            { loading ? <Loading/> : <ItemDetail {...item} />}
            
        </section>
    )
}