import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TaskForm from './components/TaskForm'


  const App = () => {
    const [tasks, setTask] = useState(
      [
        {id: 1, text: 'Lavar la ropa', done: false},
        {id: 2, text: 'Estudiar React', done: false}
      ]
    )

    console.log(tasks)

  return (
    <div className='container'>
      <Header />
      <TaskForm tasks={tasks} setTask={setTask} />
    </div>
  )
}

export default App

