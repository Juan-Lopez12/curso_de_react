import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

const TaskForm = () => {
    return (
        <form action="" className="task-form">
            <input
            type="text"
            className="task-form__input"
            placeholder="Escribe una tarea"
            />
            <button
            type="submit"
            className="task-form__btn"
            >
                
                <FontAwesomeIcon
                    icon={faPlusSquare}
                    className='task-form__icon-btn'
                />
            </button>
        </form>
    )
}

export default TaskForm