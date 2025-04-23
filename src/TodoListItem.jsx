import { useState } from 'react';

function TodoListItem({ item, onCompleteTodo }) {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleCheckboxCheck = (itemId) => {
    onCompleteTodo(itemId);
  };
  return (
    <li style={{ display: item.isCompleted ? 'none' : 'block' }}>
      <form action="">
        <input
          type="checkbox"
          checked={item.isCompleted}
          id={item.id}
          onChange={() => handleCheckboxCheck(item.id)}
        />

        <span>{item.title}</span>
      </form>
    </li>
  );
}
export default TodoListItem;
