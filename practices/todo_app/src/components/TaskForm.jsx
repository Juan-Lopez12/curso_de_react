import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

const TaskForm = ({ tasks, setTask }) => { // eslint-disable-line
    const [inputTask, setInputTask] = useState('')

    const handleInput = (e) => {
        setInputTask(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setTask([...tasks,
            {id: uuidv4(), text: inputTask, done: false}
        ])
    }

    return (
        <form action="" className="task-form" onSubmit={handleSubmit} >
            <input
            type="text"
            className="task-form__input"
            placeholder="Escribe una tarea"
            value={inputTask}
            onChange={(e) => handleInput(e)}
            />
            <button type="submit" className="task-form__btn">
                
                <FontAwesomeIcon icon={faPlusSquare} className='task-form__icon-btn'/>
            </button>
        </form>
    )
}

export default TaskForm