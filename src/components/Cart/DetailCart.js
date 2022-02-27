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
                    <div key={item.id} className="detail"> 
                        <div className="detail-title">
                            <h5>{item.name}</h5> 
                        </div>
                        <div className="detail-image">
                            <img alt={item.name} src={item.image} className="image-tamaño"/>
                        </div>
                        <div className="detail-canprice">
                            <p>Cantidad: {item.cantidad}</p>
                            {
                                conDescuento
                                ? <p>Precio: ${item.priceOff * item.cantidad}</p>
                                : <p>Precio: ${item.price * item.cantidad}</p>
                            }
                        </div>    
                        <div className="detail-button">
                            <Button className='button-mystyletwo' onClick={() => removeItem(item.id)}>
                                    <BsTrash/>
                            </Button>
                        </div>
                         
                    </div>
                ) )
            }
            

            <h3>Total: ${totalCompra()} </h3>
        </>
    )

}