import { Button } from "react-bootstrap";

export const ItemCount = ({max, min = 0, counter, setCounter}) => {

    const handleResta = () => {
        counter > min && setCounter(counter - 1)
    }
    
    const handleSuma = () => {
        counter < max && setCounter(counter + 1)
    }
    
    return(
        <div>
            <Button className="button-mystyle" onClick={handleResta}>-</Button>
            <span className="mx-3">{counter}</span>
            <Button className="button-mystyle" onClick={handleSuma}>+</Button>
        </div>
    )
}