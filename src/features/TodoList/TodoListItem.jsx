import { useState } from 'react';
import TextInputWithLabel from '../../assets/shared/TextInputWithLabel';

function TodoListItem({ item, onCompleteTodo }) {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [workingTitle, setWorkingTitle] = useState(item.title);

  const handleCheckboxCheck = (itemId) => {
    onCompleteTodo(itemId);
  };

  const handleCancel = () => {
    setWorkingTitle(item.title);
    setIsEditing(false);
  };
  return (
    <li style={{ display: item.isCompleted ? 'none' : 'block' }}>
      <form action="">
        {isEditing ? (
          <>
            <TextInputWithLabel value={item.title} />
            <button onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <>
            <label>
              <input
                type="checkbox"
                checked={item.isCompleted}
                id={item.id}
                onChange={() => handleCheckboxCheck(item.id)}
              />
            </label>
            <span onClick={() => setIsEditing(true)}>{item.title}</span>
          </>
        )}
      </form>
    </li>
  );
}
export default TodoListItem;
