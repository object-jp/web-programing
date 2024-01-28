import React, { useState } from 'react';
import '../style/TodoItem.css'

const TodoItem = ({ todo, onDelete }) => {
  const [isChecked, setChecked] = useState(todo.completed);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  const handleDelete = () => {
    if(isChecked){
      onDelete(todo.id);
    }
  };

  return (
    <div className='todo-app'>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span style={{ textDecoration: isChecked ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;
