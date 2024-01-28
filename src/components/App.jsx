import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import { v4 as uuidv4 } from 'uuid';
import '../style/App.css'

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  const addTodo = (newTodo) => {
    newTodo.id = uuidv4();
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  return (
    <div className="app-container">
      <h1>Simple Todo App</h1>
      <TodoList todos={todos} onDelete={deleteTodo} />
      <AddTodoForm addTodo={addTodo} />
    </div>
  );
};

export default App;
