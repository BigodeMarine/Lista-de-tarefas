import TodoItem from './TodoItem';

export default function TodoList({ todos, toggleComplete, removeTodo }) {
  if (todos.length === 0) return <p>Nenhuma tarefa ainda.</p>;

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          toggleComplete={toggleComplete} 
          removeTodo={removeTodo} 
        />
      ))}
    </ul>
  );
}