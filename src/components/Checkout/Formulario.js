import { Button } from "react-bootstrap"

export const Formulario = ({values, handleSubmit, handleInputChange}) => {
    return(
        <form onSubmit={handleSubmit}>
            <h4>Datos de contacto</h4>

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
                <p>Ingrese su telefono:</p>
                <input 
                    className="form-control mx-2 my-3" 
                    type='tel' 
                    placeholder='Tel'
                    value={values.tel}
                    onChange={handleInputChange}
                    name='tel'
                />

                <Button type='submit' className='button-mystyle'>Enviar</Button>
            </form>
    )
}