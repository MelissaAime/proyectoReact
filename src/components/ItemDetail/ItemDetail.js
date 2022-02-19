import { Button } from 'react-bootstrap';
import { ItemCount } from '../ItemCount/ItemCount';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export const ItemDetail = ({name, id, desc, price, image, category, stock}) => {

    const [cantidad, setCantidad] = useState(0)

    const { addToCart, isInCart } = useContext (CartContext)


    const handleAgregar = () => {
        if (cantidad === 0) return

        if (!isInCart(id)){
            const addItem ={
                id, name, price, stock, cantidad 
            }
    
            addToCart(addItem)
        }

        
    }

    return(
        <div className='container my-3 my-container'>
            <h2 className='title-prod'>{name}</h2>
            <img src={image} alt={name} className='my-img'/>
            <div className='detail-prod'>
                <h5>Detalles del producto elegido:</h5>
                <p>{desc}</p>
            </div>
            <p className='price-prod'>Precio: ${price} </p>
            

            {
                isInCart(id)
                ?   
                <Link className='my-link' to='/carrito' > 
                    <Button className='button-mystyle'>Finalizar compra</Button>
                </Link>
                
                :
                <div className='count-prod'>
                    <ItemCount 
                        max={stock}
                        counter={cantidad}
                        setCounter={setCantidad}
                    />
                    
                    <Button 
                        className="button-mystyle my-3" 
                        onClick={handleAgregar}
                        disabled= {cantidad === 0}
                    >
                        Agregar al carrito
                    </Button>
                </div>

            }

        </div>
    )
}