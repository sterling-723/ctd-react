import TodoListItem from './TodoListItem';

function TodoList({ items, onCompleteTodo, onUpdateTodo, isLoading }) {
  const filteredTodoList = items.filter((item) => {
    console.log(item);
    return item.isCompleted != true;
  });

  if (isLoading) {
    <p>Todo list loading...</p>;
  }

  return items.length === 0 ? (
    <p>Add todo above to get started</p>
  ) : (
    <ul>
      {filteredTodoList.map((item) => (
        <TodoListItem
          key={item.id}
          item={item}
          onCompleteTodo={onCompleteTodo}
          onUpdateTodo={onUpdateTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
