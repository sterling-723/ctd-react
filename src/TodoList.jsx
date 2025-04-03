import TodoListItem from './TodoListItem';

const TodoList = ({ items }) => (
  <ul>
    {items.map(
      (item) => item.title && <TodoListItem key={item.id} item={item.title} />
    )}
  </ul>
);

export default TodoList;
