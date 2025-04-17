import { useState } from 'react';

function TodoListItem({ item, onCompleteTodo }) {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleCheckboxCheck = () => {
    setIsCompleted((prev) => !prev);
  };
  return (
    <li style={{ display: isCompleted ? 'none' : 'block' }}>
      <input
        type="checkbox"
        checked={isCompleted}
        onClick={handleCheckboxCheck}
      />

      <span>{item}</span>
    </li>
  );
}
export default TodoListItem;
