import useTodos from "./hooks/useTodos";

const TodoList = () => {
  // Query object; destructure for the "data" property
  const { data: todos, error, isLoading } = useTodos();

  if (isLoading) return <p>Loading todos...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <ul className="list-group">
      {todos?.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
