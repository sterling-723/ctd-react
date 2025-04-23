import { useRef, useState } from 'react';

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
      <label htmlFor="todoTitle">Todo: </label>
      <input
        id="todoTitle"
        type="text"
        name="title"
        ref={todoTitleInput}
        value={workingTodo}
        onChange={(e) => setWorkingTodo(e.target.value)}
      />
      <button disabled={workingTodo.trim() === ''}>Add Todo</button>
    </form>
  );
}
export default TodoForm;
