import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

export const FinCompra = ({order}) => {
    
    return(
        
        <div className="container my-3">
            <h2>Gracias por tu compra</h2>
            <hr/>
            <h4>Tu número de orden es: {order}</h4>
            <Link to='/'><Button type='submit' className='button-mystyle'>Volver</Button></Link>

        </div>

    )
}