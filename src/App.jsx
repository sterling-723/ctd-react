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
  const [newTodo, setNewTodo] = useState('Lets get started!');
  return (
    <>
      <h1>My Todos</h1>
      <TodoForm />
      <p>{newTodo}</p>
      <TodoList items={todos} />
    </>
  );
}

export default App;
