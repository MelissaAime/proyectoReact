import { Link } from "react-router-dom"

export const FinCompra = ({order}) => {
    
    return(
        <div className="container my-3">
            <h2>Gracias por tu compra</h2>
            <hr/>
            <h4>Tu número de orden es: {order}</h4>
            <Link to='/'>Volver</Link>
        </div>

    )
}