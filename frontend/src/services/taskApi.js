const API_URL = 'http://localhost:8000'

export async function getTasks() {
  const response = await fetch(`${API_URL}/tasks`)
  return response.json()
}

export async function createTask(task) {
  const response = await fetch(`${API_URL}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task)
  })
  return response.json()
}

export async function updateTask(id, task) {
  const response = await fetch(`${API_URL}/tasks/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task)
  })
  return response.json()
}

export async function deleteTask(id) {
  return fetch(`${API_URL}/tasks/${id}`, { method: 'DELETE' })
}
