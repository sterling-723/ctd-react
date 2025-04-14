import TodoListItem from './TodoListItem';

function TodoList({ items }) {
  console.log(items);
  return (
    <ul>
      {items.map((item) => (
        <TodoListItem key={Date.now()} item={item} />
      ))}
    </ul>
  );
}

export default TodoList;
