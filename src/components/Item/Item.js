import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { conDescuento} from '../Oferta/Oferta'
import { SinStock } from "./SinStock";

export const Item = ( {name, id, desc, price, priceOff, image, stock} ) => {

    

    return (
        
        <Card style={{ width: '15rem', margin: '0.5rem', padding: '0.5rem', textAlign: 'center' }}>
            <Card.Img variant="top" src={image}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                
                <SinStock stock={stock}/>

                {
                    conDescuento //oferta
                    ? <Card.Text>Antes: <strike>${price}</strike> Ahora: ${priceOff}</Card.Text>
                    : <Card.Text>Precio: ${price}</Card.Text>
                }

                <Link to={`/detalles/${id}`}> <Button className="button-mystyle">Ver más</Button></Link>
            </Card.Body>
        </Card>
        
    )
}