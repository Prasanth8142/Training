import React, { useState, useEffect } from "react";

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Store todos in localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add Task
  const addTask = () => {
    if (task.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTask("");
  };

  // Delete Task
  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle Complete
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  return (
    <div style={styles.container}>
      <h2>Todo Application</h2>

      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={styles.input}
        />

        <button onClick={addTask} style={styles.addBtn}>
          Add
        </button>
      </div>

      <ul style={styles.list}>
        {todos.map((todo) => (
          <li key={todo.id} style={styles.listItem}>
            <span
              onClick={() => toggleComplete(todo.id)}
              style={{
                ...styles.taskText,
                textDecoration: todo.completed
                  ? "line-through"
                  : "none",
                color: todo.completed ? "gray" : "black",
              }}
            >
              {todo.text}
            </span>

            <button
              onClick={() => deleteTask(todo.id)}
              style={styles.deleteBtn}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    width: "350px",
    margin: "40px auto",
    textAlign: "center",
    fontFamily: "Arial",
  },

  inputContainer: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },

  input: {
    flex: 1,
    padding: "10px",
    fontSize: "16px",
  },

  addBtn: {
    padding: "10px 15px",
    backgroundColor: "green",
    color: "white",
    border: "none",
    cursor: "pointer",
  },

  list: {
    listStyle: "none",
    padding: 0,
  },

  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    border: "1px solid #ccc",
    marginBottom: "10px",
    borderRadius: "5px",
  },

  taskText: {
    cursor: "pointer",
  },

  deleteBtn: {
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
  },
};