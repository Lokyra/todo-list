import { useState } from 'react'
import {Task} from './components/Task'

type TaskType = {
    id: number  
    nom: string
}

function App() {


  const [tasks, setTasks] = useState<TaskType[]>([])
  const [task, setTask] = useState<string>('')
  const [isEditting, setIsEditting] = useState(false)
  const [editingTask, setEditingTask] = useState<TaskType>()

  const handleSubmit = () => {
      if(isEditting){
        const currentTask = tasks.find(t => t.id === editingTask?.id)
        if(!currentTask) {
            setIsEditting(false)
            return
        }
        const newTasks = tasks.map(t => {
            if(t.id === currentTask?.id){
                return {...t, nom: task}
            } else {
                return t
            }
        })
        setTasks(newTasks)
        setTask('')
        setIsEditting(false)
      } else {
      const copyTasks = [...tasks]

      const id = tasks.length + 1
      const nom = task

      copyTasks.push({id , nom})

      setTasks(copyTasks)
      setTask('')
      }

  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTask(event.target.value)
  }

  const handleDelete = (id: number) => {

      const copyTasks = [...tasks]

      const copyTasksUpt = copyTasks.filter((task) => task.id !== id)

      setTasks(copyTasksUpt)

  }

  const handleEdit = (id: number) => {
    const task = tasks.find(task => task.id === id) as TaskType
    setTask(task.nom)
    setIsEditting(true)
    setEditingTask(task)
  }
  

  return (
  <div>
    <h1>Todo List</h1>
    <ul>
        {tasks.map((task) => (
            <div style={{display: "flex"}}>
                <Task task={task} onTaskChange={handleDelete}/>
                <button onClick={() => handleEdit(task.id)}>Edit</button>
            </div>
        ))}
    </ul>

        <input 
            value={task} 
            type="text" 
            className = "block w-1/2 p-2 text-gray-900 border border-gray-300 \
            rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 \
            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white \
            dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add a task" 
            onChange={handleChange}
        />
        <button 
        onClick={handleSubmit} 
        type="submit"
        className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4
        focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 
        dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        {isEditting ? 'Edit': 'Add'}
        </button>
  </div>
  )
}

export default App
