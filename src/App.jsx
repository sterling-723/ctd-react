import './App.css';
import TodoList from './features/TodoList/TodoList';
import TodoForm from './TodoForm';
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = (title) => {
    const newTodo = {
      title: title,
      id: Date.now(),
      isCompleted: false,
    };
    setTodoList([...todoList, newTodo]);
  };

  const completeTodo = (id) => {
    const updatedTodos = todoList.map((todo) => {
      if (todo.id === id) return { ...todo, isCompleted: true };
      else {
        return todo;
      }
    });
    setTodoList(updatedTodos);
  };

  const updateTodo = (editedTodo) => {
    const updatedTodos = todoList.map((todo) => {
      return editedTodo.id === todo.id ? { ...editedTodo } : todo;
    });
    // console.log(updatedTodos);
    setTodoList(updatedTodos);
  };

  return (
    <>
      <h1>My Todos</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList
        items={todoList}
        onCompleteTodo={completeTodo}
        onUpdateTodo={updateTodo}
      />
    </>
  );
}

export default App;
