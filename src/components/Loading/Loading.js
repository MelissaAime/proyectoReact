import { Spinner } from "react-bootstrap"

export const Loading = () => {
    return (
        <div>
            <h4>Loading...</h4>

            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    )
}