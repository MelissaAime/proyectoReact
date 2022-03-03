import { Button, Form } from "react-bootstrap";
import { useState } from 'react';
import Swal from "sweetalert2";


export const FormContact = () => {


    const [values, setValues] = useState({
        nombre: '',
        email:'',
        mensaje:''
    })

    const handleInputChange = (e) => {
        
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (values.nombre.length > 3 && values.email.length > 3 && values.mensaje.length > 5) {
            Swal.fire({
                icon: 'success',
                title: 'Gracias por escribirnos',
                text: 'Hemos enviado un mail a tu casilla, nos comunicaremos contigo a la brevedad.',
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Campos inválidos',
                text: 'Algunos campos están incompletos o son incorrectos.'
              })
        }

    }

    return(
        <div className="container my-4">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Ingrese su nombre:</Form.Label>
                    <Form.Control 
                        className="form-control mx-2" 
                        type='text' 
                        placeholder='Nombre'
                        value={values.nombre}
                        onChange={handleInputChange}
                        name='nombre'
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Ingrese su email:</Form.Label>
                    <Form.Control 
                    className="form-control mx-2" 
                    type='email' 
                    placeholder='Email'
                    value={values.email}
                    onChange={handleInputChange}
                    name='email'
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Mensaje:</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={4} 
                        className="form-control mx-2" 
                        onChange={handleInputChange}
                        value={values.mensaje} 
                        name='mensaje'
                    />
                </Form.Group>

                <Button type='submit' className='button-mystyle'>Enviar</Button>
                
            </Form>

        </div>
    )
}