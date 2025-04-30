import './App.css';
import TodoList from './features/TodoList/TodoList';
import TodoForm from './TodoForm';
import { useEffect, useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const url = `https://api.airtable.com/v0/${import.meta.env.VITE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;
  const token = `Bearer ${import.meta.env.VITE_PAT}`;

  useEffect(() => {
    const fetchTodos = async () => {
      setIsLoading(true);
      const options = {
        method: 'GET',
        headers: { Authorization: token },
      };

      try {
        const resp = await fetch(url, options);
        if (!resp.ok) {
          throw new Error(`Failed to fetch: ${resp.message}`);
        }
        const records = await resp.json();
        records.map((record) => {
          const todo = {
            id: record.id,
            title: record.fields.title,
            isCompleted: record.fields.isCompleted ? true : false,
          };
          return todo;
        });
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTodos();
  }, []);

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
