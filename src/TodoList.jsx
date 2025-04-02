import TodoListItem from './TodoListItem';

function TodoList() {
  const todos = [
    { id: 1, title: 'Grocery Shop' },
    { id: 2, title: 'Do Laundry' },
    { id: 3, title: 'Cook Dinner' },
  ];
  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} title={todo.title} />
      ))}
    </ul>
  );
}
export default TodoList;
