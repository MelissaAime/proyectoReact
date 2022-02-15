import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


export const Cart = () => {

    const { cart, totalCompra } = useContext(CartContext)

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
                    </div>
                ) )
            }

            <hr/>
            <h3>Total: ${totalCompra()} </h3>

        </div>
    )
}