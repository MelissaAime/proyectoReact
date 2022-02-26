import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { BsTrash } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import { Fecha } from "../Fecha/Fecha";


export const Cart = () => {

    const { cart, totalCompra, clearCart, removeItem } = useContext(CartContext)

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

            {
                cart.map( (item) => (
                    <div key={item.id}> 
                        <h5>{item.name}</h5>  
                        <p>Cantidad: {item.cantidad}</p>
                        {
                            Fecha === 4 
                            ? <p>Precio: ${item.price * item.cantidad * 0.85}</p>
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

            <div>
                <Button className='button-mystyletwo' onClick={clearCart}>Vaciar carrito</Button>
                <Link to='/checkout' ><Button className='button-mystyle'>Terminar la compra</Button></Link>
            </div>

        </div>
    )
}