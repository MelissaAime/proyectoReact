import { Spinner } from "react-bootstrap"

export const Loading = () => {
    return (
        <div className="container my-3">
            <h4>Cargando productos...</h4>

            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    )
}