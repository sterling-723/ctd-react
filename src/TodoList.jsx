function TodoList() {
  const todos = [
    { id: 1, title: 'Grocery Shop' },
    { id: 2, title: 'Do Laundry' },
    { id: 3, title: 'Cook Dinner' },
  ];
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}
export default TodoList;
