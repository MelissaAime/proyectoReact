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
                <p>Ingrese su nombre:</p>
                <input 
                    className="form-control mx-2 my-3" 
                    type='text' 
                    placeholder='Nombre'
                    value={values.nombre}
                    onChange={handleInputChange}
                    name='nombre'
                />
                <p>Ingrese su email:</p>
                <input 
                    className="form-control mx-2 my-3" 
                    type='email' 
                    placeholder='Email'
                    value={values.email}
                    onChange={handleInputChange}
                    name='email'
                />

                <Button type='submit' className='button-mystyle'>Enviar</Button>
            </form>

        </div>
    )
}