import TodoListItem from './TodoListItem';

function TodoList({ items, onCompleteTodo }) {
  return items.length === 0 ? (
    <p>Add todo above to get started</p>
  ) : (
    <ul>
      {items.map((item) => (
        <TodoListItem key={item} item={item.title} />
      ))}
    </ul>
  );
}

export default TodoList;
