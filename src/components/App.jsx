import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import { v4 as uuidv4 } from 'uuid';
import '../style/App.css'

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    newTodo.id = uuidv4();
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
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
