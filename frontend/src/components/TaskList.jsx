import TaskItem from './TaskItem'

export default function TaskList({ tasks, onEdit, onDelete }) {
  return (
    <div>
      <h2>Tasks</h2>
      {tasks.length === 0 ? <p>No tasks found.</p> :
        tasks.map(task => <TaskItem key={task.task_id} task={task} onEdit={onEdit} onDelete={onDelete} />)}
    </div>
  )
}
