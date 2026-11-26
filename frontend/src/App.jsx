import { useEffect, useState } from 'react'
import { getTasks, createTask, updateTask, deleteTask } from './services/taskApi'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useState([])
  const [editingTask, setEditingTask] = useState(null)

  const loadTasks = async () => setTasks(await getTasks())

  useEffect(() => { loadTasks() }, [])

  const saveTask = async (task) => {
    if (editingTask) {
      await updateTask(editingTask.task_id, task)
      setEditingTask(null)
    } else {
      await createTask(task)
    }
    loadTasks()
  }

  const removeTask = async (id) => {
    await deleteTask(id)
    loadTasks()
  }

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <TaskForm onSave={saveTask} editingTask={editingTask} />
      <TaskList tasks={tasks} onEdit={setEditingTask} onDelete={removeTask} />
    </div>
  )
}

export default App
