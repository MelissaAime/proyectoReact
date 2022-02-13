import { Button } from "react-bootstrap";
import { useState } from 'react';


export const Form = () => {


    const [values, setValues] = useState({
        nombre: '',
        email:''
    })

    const handleInputChange = (e) => {
        
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Enviado");
        console.log(values);
    }

    return(
        <div className="container my-4">
            <form onSubmit={handleSubmit}>
                <input 
                    className="form-control my-3" 
                    type='text' 
                    placeholder='Ingresa tu nombre'
                    value={values.nombre}
                    onChange={handleInputChange}
                    name='nombre'
                />
                <input 
                    className="form-control my-3" 
                    type='email' 
                    placeholder='Ingresa tu email'
                    value={values.email}
                    onChange={handleInputChange}
                    name='email'
                />

                <Button type='submit' className='button-mystyle'>Enviar</Button>
            </form>

        </div>
    )
}