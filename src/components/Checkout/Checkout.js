import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Navigate } from "react-router-dom";
import { FinCompra } from './FinCompra'
import { generarOrden } from "../../firebase/generarOrden";
import { Formulario } from "./Formulario";
import { DetailCart } from "../Cart/DetailCart";
import Swal from 'sweetalert2'

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

        if (values.nombre.length > 3 && values.email.length > 3 && values.tel.length > 5) {
            generarOrden(values, cart, totalCompra, setOrderId, clearCart)
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Campos inválidos',
                text: 'Algunos campos están incompletos o son incorrectos'
              })
        }

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
                    <h4>Detalle de la compra</h4>
                    <DetailCart />
                </div>
            </div>

        </div>
    )    
}