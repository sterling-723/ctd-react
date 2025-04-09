import './App.css';
import TodoList from './ToDoList';
import TodoForm from './TodoForm';
import { useState } from 'react';

const todos = [
  { id: 1, title: 'Grocery Shop' },
  { id: 2, title: 'Do Laundry' },
  { id: 3, title: 'Cook Dinner' },
  { id: 4, title: 'Clean Room' },
];

function App() {
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  return (
    <>
      <h1>My Todos</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      {/* <p>{newTodo}</p> */}
      <TodoList items={todoList} />
    </>
  );
}

export default App;
