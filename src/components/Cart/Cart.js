import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { BsTrash } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";


export const Cart = () => {

    const { cart, totalCompra, clearCart, removeItem } = useContext(CartContext)

    if (cart.length === 0) {
        return <div className="container mx-4 my-2">
            <h4>Carrito vacío</h4>
            <Button className="button-mystyle"><Link to="/productos" className="my-link" >Volver</Link></Button>
        </div>
    }

    return(
        <div className='container my-3'>
            <h3>Compra:</h3>
            <hr/>

            {
                cart.map( (item) => (
                    <div key={item.id}> 
                      <h5>{item.name}</h5>  
                      <p>Cantidad: {item.cantidad}</p>
                      <p>Precio: ${item.price * item.cantidad}</p>

                      <button className='btn btn-outline-danger' onClick={() => removeItem(item.id)}>
                            <BsTrash/>
                      </button>
                    </div>
                ) )
            }

            <hr/>
            <h3>Total: ${totalCompra()} </h3>

            <div>
                <button className='btn btn-outline-danger' onClick={clearCart}>Vaciar carrito</button>
                <button className='btn btn-outline-success'>Terminar la compra</button>
            </div>

        </div>
    )
}