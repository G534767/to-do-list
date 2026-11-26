# To-Do List – Full-Stack Task Manager

A full-stack task management application built with **React**, **FastAPI**, and **PostgreSQL**. It supports creating, viewing, editing, and deleting tasks, with priority, status, descriptions, and due dates.

## Features

- Create tasks with a title, description, due date, priority, and status
- View all tasks and retrieve an individual task
- Edit existing tasks
- Delete tasks
- Store task data in PostgreSQL
- REST API documented through FastAPI Swagger UI

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, Vite, JavaScript, CSS |
| Backend | Python, FastAPI, Pydantic |
| Database | PostgreSQL |
| ORM | SQLAlchemy |
| Database client | DBeaver (optional) |

## Project Structure

```text
to-do-list/
├── backend/
│   ├── main.py
│   ├── database.py
│   ├── models.py
│   ├── schemas.py
│   ├── crud.py
│   ├── requirements.txt
│   └── .env.example
├── database/
│   └── todo_database.sql
├── frontend/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── App.css
│       ├── components/
│       │   ├── TaskForm.jsx
│       │   ├── TaskList.jsx
│       │   └── TaskItem.jsx
│       └── services/
│           └── taskApi.js
└── README.md
```

## Prerequisites

- Python 3.10+
- Node.js and npm
- PostgreSQL
- Git

## Setup and Run

### 1. Clone the repository

```bash
git clone https://github.com/G534767/to-do-list.git
cd to-do-list
```

### 2. Configure PostgreSQL

Create the database and table using the SQL script in `database/todo_database.sql`. The script also inserts three sample tasks.

You can execute it using psql or a database client such as DBeaver. If you prefer to create the database manually, create a database named `todo_db` and run the table and insert statements while connected to it.

### 3. Configure and start the backend

Open a terminal:

```bash
cd backend
python -m venv venv
```

Activate the virtual environment:

**Windows (PowerShell):**
```powershell
.\venv\Scripts\Activate.ps1
```

**macOS / Linux:**
```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Copy `.env.example` to `.env` and update `DATABASE_URL` with your PostgreSQL username, password, host, port, and database name.

Start the API:

```bash
uvicorn main:app --reload
```

Backend base URL: http://localhost:8000

Swagger API documentation: http://localhost:8000/docs

### 4. Start the frontend

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL printed by Vite (normally http://localhost:5173).

> The frontend currently calls the backend at `http://localhost:8000`. Run the backend on that address when using the project without changing the API service configuration.

## REST API

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Check API status |
| POST | `/tasks` | Create a task |
| GET | `/tasks` | Get all tasks |
| GET | `/tasks/{task_id}` | Get one task |
| PUT | `/tasks/{task_id}` | Update a task |
| DELETE | `/tasks/{task_id}` | Delete a task |

## Application Flow

1. The React UI collects task details from the user.
2. The frontend service sends HTTP requests to the FastAPI endpoints.
3. FastAPI validates request data using Pydantic schemas.
4. Route handlers call CRUD functions.
5. CRUD functions use SQLAlchemy to read or modify PostgreSQL records.
6. The API returns the task data to the frontend.

## Configuration and Security Notes

- Do not commit your local `.env` file or real database credentials.
- Start from `.env.example` and provide your own local database connection string.
- This is a learning/demo project. It currently has no user authentication or authorization; do not expose it publicly with sensitive data.
- The API URL is currently configured in `frontend/src/services/taskApi.js` for local development.

## Current Scope

The repository contains the implemented CRUD workflow. Automated backend/frontend tests and production deployment configuration are not included in this version.
