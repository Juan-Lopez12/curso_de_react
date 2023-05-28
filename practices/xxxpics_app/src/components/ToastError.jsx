import { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const ToastError = ({ setError }) => {

    const [show, setShow] = useState(true)
    const toggleShow = () => {
        setShow(!show)
        setError(null)
    }

    return (
    <ToastContainer position='bottom-end' containerPosition='fixed' style={{ margin: "6px" }} >
        <Toast show={show} onClose={toggleShow} bg={"danger"} style={{ color: "white" }} >
            <Toast.Header style={{ display: "flex", justifyContent: "space-between" }}>
                <strong>Ha ocurrido un error</strong>
            </Toast.Header>
            <Toast.Body>
                Sin resultados o la búsqueda no coincide. <br /> Prueba usando palabras claves o intenta más tarde.
            </Toast.Body>
        </Toast>
    </ToastContainer>
    )
}

export default ToastError