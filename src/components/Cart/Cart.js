import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";

import { DetailCart } from "./DetailCart";



export const Cart = () => {

    const { cart, clearCart } = useContext(CartContext)

    if (cart.length === 0) {
        return <div className="container mx-5 my-4">
            <h4>Carrito vacío</h4>
            <Link to="/productos" className="my-link"><Button className="button-mystyle">Volver</Button></Link>
        </div>
    }
    
    return(
        <div className='container my-3'>
            <h3>Detalle de su compra:</h3>
            <hr/>

            <DetailCart/>


            <div>
                <Button className='button-mystyletwo' onClick={clearCart}>Vaciar carrito</Button>
                <Link to='/checkout' ><Button className='button-mystyle'>Terminar la compra</Button></Link>
            </div>

        </div>
    )
}