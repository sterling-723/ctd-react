import './App.css';
import TodoList from './features/TodoList/TodoList';
import TodoForm from './TodoForm';
import TodosViewForm from './features/TodosViewForm';
import { useEffect, useState } from 'react';

const url = `https://api.airtable.com/v0/${import.meta.env.VITE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;
const token = `Bearer ${import.meta.env.VITE_PAT}`;

function encodeUrl({ sortField, sortDirection, queryString }) {
  let searchQuery = '';
  let sortQuery = `sort[0][field]=${sortField}&sort[0][direction]=${sortDirection}`;
  if (searchQuery) {
    searchQuery = `&filterByFormula=SEARCH("${queryString}",+title)`;
  }
  return encodeURI(`${url}?${sortQuery}${searchQuery}`);
}

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [sortField, setSortField] = useState('createdTime');
  const [sortDirection, setSortDirection] = useState('desc');
  const [queryString, setQueryString] = useState('');

  useEffect(() => {
    const fetchTodos = async () => {
      setIsLoading(true);
      const options = {
        method: 'GET',
        headers: { Authorization: token },
      };

      try {
        const resp = await fetch(
          encodeUrl({ sortDirection, sortField, queryString }),
          options
        );
        console.log(resp);
        if (!resp.ok) {
          throw new Error(`Failed to fetch: ${resp.message}`);
        }
        const { records } = await resp.json();

        const mappedRecords = records.map((record) => {
          const todo = {
            id: record.id,
            title: record.fields.title,
            isCompleted: record.fields.isCompleted ? true : false,
          };
          return todo;
        });

        setTodoList(mappedRecords);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTodos();
  }, [sortDirection, sortField, queryString]);

  const handleAddTodo = async (title) => {
    const newTodo = {
      title: title,
      id: Date.now(),
      isCompleted: false,
    };

    const payload = {
      records: [
        {
          fields: {
            title: newTodo.title,
            isCompleted: newTodo.isCompleted,
          },
        },
      ],
    };
    const options = {
      method: 'POST',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };

    try {
      setIsSaving(true);
      const resp = await fetch(
        encodeUrl({ sortDirection, sortField, queryString }),
        options
      );
      if (!resp.ok) {
        throw new Error(`Failed to save: ${resp.statusText}`);
      }
      const { records } = await resp.json();
      const savedTodo = {
        id: records[0].id,
        ...records[0].fields,
      };
      if (!records[0].fields.isCompleted) {
        savedTodo.isCompleted = false;
      }
      setTodoList([...todoList, savedTodo]);
    } catch (error) {
      setErrorMessage(error.message);
    }
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
        isLoading={isLoading}
      />
      <hr />
      <TodosViewForm
        sortField={sortField}
        setSortField={setSortField}
        sortDirection={sortDirection}
        setSortDirection={setSortDirection}
        queryString={queryString}
        setQueryString={setQueryString}
      />
      {errorMessage && (
        <>
          <hr />
          <p>{errorMessage}</p>
          <button onClick={setErrorMessage(null)}>Dismiss</button>
        </>
      )}
    </>
  );
}

export default App;
