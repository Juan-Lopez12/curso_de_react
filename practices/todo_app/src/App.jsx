import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import TaskForm from './components/taskForm'
import TaskList from './components/TaskList'

  const App = () => {
    const tasksSaved =
    localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : []
    // volvemos a convertir el "item string" a "objeto" ^^

    const [tasks, setTask] = useState(tasksSaved)

    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

    // Guardanos un valor "Booleano" si el "item" "showDone" tiene una cadena llamada "true", si no, devolvemos false al igual que si es null
    const configShowDone = localStorage.getItem("showDone") === "true" ?? true

    const [showDone, setShowDone] = useState(configShowDone)

    useEffect(() => {
      localStorage.setItem("showDone", showDone.toString())
    }, [showDone])

  return (
    <div className='container'>
      <Header showDone={showDone} setShowDone={setShowDone} />
      <TaskForm tasks={tasks} setTask={setTask} />
      <TaskList
        tasks={tasks}
        setTask={setTask}
        showDone={showDone}
      />
    </div>
  )
}

export default App

