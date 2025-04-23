import TodoListItem from './TodoListItem';

function TodoList({ items, onCompleteTodo }) {
  const filteredTodoList = items.filter((item) => item.isCompleted != true);

  return items.length === 0 ? (
    <p>Add todo above to get started</p>
  ) : (
    <ul>
      {filteredTodoList.map((item) => (
        <TodoListItem
          key={item.id}
          item={item}
          onCompleteTodo={onCompleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
