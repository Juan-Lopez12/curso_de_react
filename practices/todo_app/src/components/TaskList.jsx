import Task from './Task'

const TaskList = ({ tasks, setTask, showDone }) => {

    const toggleDone = (id) => {
        setTask(tasks.map(task => {
            if (task.id === id) {
                return {...task, done: !task.done}
            }
            return task
        }))
    }

    const editNameTask = (id, newText) => {
        setTask(tasks.map(task => {
            if (task.id === id) {
                return {...task, text: newText}
            }
            return task
        }))
    }

    const deleteTask = (id) => {
        setTask(tasks.filter(task => {
            if (task.id !== id) {
                return task
            }
            return
        }))
    }

    return (
        <ul className="task-list">
            {tasks.length
            ?
                tasks.map(task => {
                    // Pregunto si "showDone" es falso para que al iniciar la App al iniciar por primera vez aparezcan las "tareas completadas" sin ocultar por defecto
                    // Si "showDone" es "false" mostrara todas las tareas
                    if (!showDone) {
                        return <Task
                                    key={task.id} task={task} deleteTask={deleteTask}
                                    toggleDone={toggleDone} editNameTask={editNameTask}
                                />
                    } else if (!task.done) {
                        return <Task
                                    key={task.id} task={task} deleteTask={deleteTask}
                                    toggleDone={toggleDone} editNameTask={editNameTask}
                                />
                    }
                    return
                })
            :
                <div className="task-list__message">
                    ~ No hay tareas agregadas ~
                </div>}
        </ul>
    )
}

export default TaskList