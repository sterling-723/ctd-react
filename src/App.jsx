import "./App.css";

function App() {
  const todos = [
    { id: 1, title: "Grocery Shop" },
    { id: 2, title: "Do Laundry" },
    { id: 3, title: "Cook Dinner" },
  ];
  return (
    <div>
      <h1>My Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
