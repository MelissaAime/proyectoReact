import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Navigate } from "react-router-dom";
import { FinCompra } from './FinCompra'
import { generarOrden } from "../../firebase/generarOrden";
import { validar } from './validar'
import { Formulario } from "./Formulario";
import { DetailCart } from "../Cart/DetailCart";

export const Checkout = () => {

    const {cart, totalCompra, clearCart} = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

    const [values, setValues] = useState({
        nombre: '',
        email:'',
        tel: '',
    })
 
    
    const handleInputChange = (e) => {
        
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        validar(values) && generarOrden(values, cart, totalCompra, setOrderId, clearCart )
    }

    if (orderId){
        return <FinCompra order={orderId} />
    }
    
    if (cart.length === 0) {
        return <Navigate to='/'/>
    }

    return (
        <div className="container my-4">
            <h2>Finalizar compra</h2>
            <hr/>

            <div className="container-style">
                <Formulario className="container-style-form" values={values} handleSubmit={handleSubmit} handleInputChange={handleInputChange} /> 
                <div className="container-style-detail">
                    <DetailCart />
                </div>
            </div>

        </div>
    )    
}