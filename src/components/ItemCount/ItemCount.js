import { Button } from "react-bootstrap";
import { BsPlus, BsDash} from 'react-icons/bs';

export const ItemCount = ({max, min = 0, counter, setCounter}) => {

    const handleResta = () => {
        counter > min && setCounter(counter - 1)
    }
    
    const handleSuma = () => {
        counter < max && setCounter(counter + 1)
    }

    const configRestar = {
        className: 'button-mystyle',
        disabled: counter === min,
        onClick: handleResta
    }

    const configSumar = {
        className: 'button-mystyle',
        disabled: counter === max,
        onClick: handleSuma
    }
    
    return(
        <div>
            <Button {...configRestar}> <BsDash/> </Button>
            <span className="mx-3">{counter}</span>
            <Button {...configSumar}> <BsPlus/> </Button>
        </div>
    )
}