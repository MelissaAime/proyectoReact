import { Button } from 'react-bootstrap';
import { ItemCount } from '../ItemCount/ItemCount';
import { useState } from 'react';

export const ItemDetail = ({name, id, desc, price, image, category, stock}) => {

    const [cantidad, setCantidad] = useState(0)

    const handleAgregar = () => {
        if (cantidad === 0) return

        const addItem ={
            id, name, price, stock, cantidad 
        }

        console.log(addItem);
    }
    return(
        <div>
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <h4>Detalles del producto elegido:</h4>
            <p>{desc}</p>
            <p>Precio: ${price} </p>
            
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
        </div>
    )
}