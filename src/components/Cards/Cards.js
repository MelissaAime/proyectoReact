import { Card } from "react-bootstrap"

export const Cards = ( {title, descript}) => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://via.placeholder.com/200" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{descript}</Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}