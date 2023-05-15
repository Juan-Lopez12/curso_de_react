import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

/* eslint-disable react/prop-types */

const Header = ({ showDone, setShowDone }) => {

    const toggleDone = () => {
        setShowDone(!showDone)
    }

    return (
        <header className="header">
            <h1 className="header__title">Lista de Tareas</h1>
            <button
                className="header__button"
                onClick={() => toggleDone()}
            >
                {/* Pregunto si "showDone" es "false" y muestro el texto "No mostrar completadas", por que en el componente "TaskList", si es "false" tambien mostrara las tareas. Esto para que al iniciar la App por primera vez no se oculten las "tareas completadas" por defecto */}
                {!showDone ? "No mostrar completadas" : "Tareas completadas estan ocultas (Mostrar)"}
                <FontAwesomeIcon
                    icon={showDone ? faEyeSlash : faEye}
                    className='header__icon-button'
                    />
            </button>
        </header>
    )
}

export default Header