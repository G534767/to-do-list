import { useEffect, useState } from 'react'

const empty = { title: '', description: '', due_date: '', priority: 'Medium', status: 'Pending' }

export default function TaskForm({ onSave, editingTask }) {
  const [form, setForm] = useState(empty)

  useEffect(() => {
    setForm(editingTask ? {
      title: editingTask.title,
      description: editingTask.description || '',
      due_date: editingTask.due_date || '',
      priority: editingTask.priority,
      status: editingTask.status
    } : empty)
  }, [editingTask])

  const change = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = e => {
    e.preventDefault()
    if (!form.title.trim()) return
    onSave(form)
    if (!editingTask) setForm(empty)
  }

  return (
    <form onSubmit={submit} className="form">
      <input name="title" placeholder="Task title" value={form.title} onChange={change} required />
      <input name="description" placeholder="Description" value={form.description} onChange={change} />
      <input name="due_date" type="date" value={form.due_date} onChange={change} />
      <select name="priority" value={form.priority} onChange={change}>
        <option>Low</option><option>Medium</option><option>High</option>
      </select>
      <select name="status" value={form.status} onChange={change}>
        <option>Pending</option><option>Completed</option>
      </select>
      <button type="submit">{editingTask ? 'Update' : 'Add'} Task</button>
    </form>
  )
}
