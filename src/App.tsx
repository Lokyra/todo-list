import { useState } from 'react'
import Task from './components/Task'

function App() {


  const [tasks, setTasks] = useState([])

  const [newTask, setNewTask] = useState('')

  const handleSubmit = (event: any) => {
      event.preventDefault()
      const copyTasks : any[] = [...tasks]

      const id = tasks.length + 1
      const nom = newTask

      copyTasks.push({id , nom})

      setTasks(copyTasks)
      setNewTask('')
  }

  const handleChange = (event: any) => {
      setNewTask(event.target.value)
  }

  const handleDelete = (id: number) => {

      const copyTasks : any[] = [...tasks]

      const copyTasksUpt = copyTasks.filter((task: any) => task.id !== id)

      setTasks(copyTasksUpt)

  }

  

  return (
  <div>
    <h1>Todo List</h1>
    <ul>
        {tasks.map((task: any) => (
        <Task task={task} onTaskChange={handleDelete}/>
        ))}
    </ul>
    <form action="submit" onSubmit={handleSubmit}>
        <input 
            value={newTask} 
            type="text" 
            placeholder="Ajouter une tache" 
            onChange={handleChange}
        />
        <button type="submit">Ajouter +</button>
    </form>
  </div>
  )
}

export default App
