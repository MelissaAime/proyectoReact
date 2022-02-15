import { useContext } from 'react';
import { BsHandbag } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export const CartWidget = () => {

    const { cantidadCart } = useContext(CartContext)

    return(
        <Link to='/carrito' className='cart-widget'>
            <BsHandbag/>
            <span>{cantidadCart()}</span>
        </Link>
    )
}