import { useRef, useState } from 'react';
import TextInputWithLabel from './assets/shared/TextInputWithLabel';

function TodoForm({ onAddTodo }) {
  const [workingTodo, setWorkingTodo] = useState('');
  const todoTitleInput = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // const title = e.target.title.value;
    // e.target.title.value = '';
    todoTitleInput.current.focus();
    onAddTodo(workingTodo);
    setWorkingTodo('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextInputWithLabel
        ref={todoTitleInput}
        elementId="todoTitle"
        value={workingTodo}
        onChange={(e) => setWorkingTodo(e.target.value)}
        label="Todo: "
      />
      <button disabled={workingTodo.trim() === ''}>Add Todo</button>
    </form>
  );
}
export default TodoForm;
