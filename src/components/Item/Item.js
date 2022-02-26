import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { Fecha } from '../Fecha/Fecha'

export const Item = ( {name, id, desc, price, image, stock} ) => {

    

    return (
        
        <Card style={{ width: '15rem', margin: '0.5rem', padding: '0.5rem' }}>
            <Card.Img variant="top" src={image}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                

                {
                    Fecha === 4 //oferta dia jueves
                    ? <Card.Text>Antes: <strike>${price}</strike> Ahora: ${price*0.85}</Card.Text>
                    : <Card.Text>Precio: ${price}</Card.Text>
                }

                <Link to={`/detalles/${id}`}> <Button className="button-mystyle">Ver más</Button></Link>
            </Card.Body>
        </Card>
        
    )
}