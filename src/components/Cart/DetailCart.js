import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Button } from "react-bootstrap";
import { BsTrash } from 'react-icons/bs';
import { conDescuento } from "../Oferta/Oferta";

export const DetailCart = () => {

    const { cart, removeItem, totalCompra } = useContext(CartContext)

    return (
        <>
            {
                cart.map( (item) => (
                    <div key={item.id}> 
                        <h5>{item.name}</h5>  
                        <img alt={item.name} src={item.image}/>
                        <p>Cantidad: {item.cantidad}</p>

                        {
                            conDescuento
                            ? <p>Precio: ${item.priceOff * item.cantidad}</p>
                            : <p>Precio: ${item.price * item.cantidad}</p>
                        }
                        

                        <Button className='button-mystyletwo' onClick={() => removeItem(item.id)}>
                                <BsTrash/>
                        </Button>
                    </div>
                ) )
            }

            <hr/>
            <h3>Total: ${totalCompra()} </h3>
        </>
    )
}