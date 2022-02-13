import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

export const Item = ( {name, id, desc, price, image, stock} ) => {
    return (
        
        <Card style={{ width: '18rem', margin: '1rem', padding: '0.5rem' }}>
            <Card.Img variant="top" src={image}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{desc}</Card.Text>
                <Card.Text>Precio: ${price}</Card.Text>
                <Link to={`/detalles/${id}`}> <Button className="button-mystyle">Ver más</Button></Link>
            </Card.Body>
        </Card>
        
    )
}