CREATE DATABASE todo_db;

-- Connect to todo_db in DBeaver, then run:

CREATE TABLE IF NOT EXISTS tasks (
    task_id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    due_date DATE,
    priority VARCHAR(20) DEFAULT 'Medium',
    status VARCHAR(20) DEFAULT 'Pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
);

INSERT INTO tasks (title, description, priority, status)
VALUES
('Learn React', 'Learn React components and hooks', 'High', 'Pending'),
('Practice SQL', 'Practice PostgreSQL queries', 'Medium', 'Completed'),
('Build To-Do App', 'Complete the full-stack project', 'High', 'Pending');
