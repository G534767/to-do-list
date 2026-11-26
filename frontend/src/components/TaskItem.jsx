export default function TaskItem({ task, onEdit, onDelete }) {
  return (
    <div className="task">
      <div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <small>Priority: {task.priority} | Status: {task.status} | Due: {task.due_date || 'No date'}</small>
      </div>
      <div>
        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={() => onDelete(task.task_id)}>Delete</button>
      </div>
    </div>
  )
}
