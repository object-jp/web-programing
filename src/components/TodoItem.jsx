// components/TodoItem.jsx
import React, { useState } from 'react';

const TodoItem = ({ todo }) => {
  const [isChecked, setChecked] = useState(todo.completed);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span style={{ textDecoration: isChecked ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
    </div>
  );
};

export default TodoItem;
