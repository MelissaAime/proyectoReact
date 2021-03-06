import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loading } from '../Loading/Loading';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';


export const ItemDetailContainer = () => {

    const [loading, setLoading] = useState (false)
    const [item, setItem] = useState (null)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, "productos", itemId)

        getDoc(docRef)
            .then((doc) => {
                setItem({id: doc.id, ...doc.data()})
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