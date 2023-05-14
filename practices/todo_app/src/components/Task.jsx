import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faEdit, faSquare, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Task = ({ task }) => { // eslint-disable-line
    const [editTask, setEditTask] = useState(false)
    const [newTask, setNewTask] = useState(task.text) // eslint-disable-line

    const handleSubmit = (e) => {
        e.preventDefault()
        setEditTask(false)
    }

    return (
        <li className="task-list__task" >
            <FontAwesomeIcon
            icon={task.done ? faCheckSquare : faSquare} // eslint-disable-line
            className='task-list__icon task-list__icon-check'
            />
            <div className='task-list__text'>
                {editTask ?
                <form action="" className="form-edit-task" onSubmit={handleSubmit} >
                    <input
                    type="text"
                    className="form-edit-task__input"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="form-edit-task__btn"
                    >
                        Actualizar
                    </button>
                </form>
                : task.text // eslint-disable-line
                }
            </div>
            <div className="task-list__container-buttons">
                <FontAwesomeIcon
                    icon={faEdit}
                    className='task-list__icon task-list__icon-action'
                    onClick={() => setEditTask(!editTask)}
                />
                <FontAwesomeIcon
                    icon={faTimes}
                    className='task-list__icon task-list__icon-action'
                />
            </div>
        </li>
    )
}

export default Task