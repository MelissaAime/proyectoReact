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
        <div>
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <h4>Detalles del producto elegido:</h4>
            <p>{desc}</p>
            <p>Precio: ${price} </p>
            

            {
                isInCart(id)
                ?   
                <Button className='button-mystyle my-2'><Link to='/carrito' > Finalizar compra</Link></Button>
                
                :
                <>
                    <ItemCount 
                        max={stock}
                        counter={cantidad}
                        setCounter={setCantidad}
                    />
                    
                    <Button 
                        className="button-mystyle my-2" 
                        onClick={handleAgregar}
                    >
                        Agregar al carrito
                    </Button>
                </>

            }

        </div>
    )
}