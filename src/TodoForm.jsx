import { useRef } from 'react';

function TodoForm({ onAddTodo }) {
  const todoTitleInput = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    todoTitleInput.current.focus();
    e.target.title.value = '';
    onAddTodo(title);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todoTitle">Todo: </label>
      <input id="todoTitle" type="text" name="title" ref={todoTitleInput} />
      <button>Add Todo</button>
    </form>
  );
}
export default TodoForm;
