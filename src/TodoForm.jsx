import { useRef } from 'react';

const TodoForm = () => {
  const todoTitleInput = useRef('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    const title = e.target.title.value;

    todoTitleInput.current.focus();
  };
  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Todo</label>
      <input id="todoTitle" type="text" name="title" ref={todoTitleInput} />
      <button>Add Todo</button>
    </form>
  );
};
export default TodoForm;
