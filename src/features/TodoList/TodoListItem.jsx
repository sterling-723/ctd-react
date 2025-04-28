import { useState } from 'react';
import TextInputWithLabel from '../../assets/shared/TextInputWithLabel';

function TodoListItem({ item, onCompleteTodo, onUpdateTodo }) {
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

  const handleEdit = (e) => {
    setWorkingTitle(e.target.value);
  };

  const handleUpdate = (e) => {
    if (isEditing === false) return null;
    e.preventDefault();
    onUpdateTodo({ ...item, title: workingTitle });
    setIsEditing(false);
  };

  return (
    <li style={{ display: item.isCompleted ? 'none' : 'block' }}>
      <form action="" onSubmit={handleUpdate}>
        {isEditing ? (
          <>
            <TextInputWithLabel value={workingTitle} onChange={handleEdit} />
            <button onClick={handleCancel}>Cancel</button>
            <button onClick={handleUpdate}>Update</button>
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
