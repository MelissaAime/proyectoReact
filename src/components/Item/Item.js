import { Card, Button } from "react-bootstrap"

export const Item = ( {name, id, desc, price, image} ) => {
    return (
        
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{desc}</Card.Text>
                <Card.Text>Precio: ${price}</Card.Text>
                <Button className="button-mystyle">Comprar</Button>
            </Card.Body>
        </Card>
        
    )
}