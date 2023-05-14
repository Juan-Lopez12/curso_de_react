import Task from './Task'

const TaskList = ({ tasks }) => { // eslint-disable-line
    return (
        <ul className="task-list">
            {tasks.length ? // eslint-disable-line
            tasks.map(task => <Task key={task.id} task={task} />) // eslint-disable-line
            :
            <div className="task-list__message">
                ~ No hay tareas agregadas ~
            </div>}
        </ul>
    )
}

export default TaskList