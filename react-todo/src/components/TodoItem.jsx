export default function TodoItem({ todo, toggleComplete, removeTodo }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <label>
        <input 
          type="checkbox" 
          checked={todo.completed} 
          onChange={() => toggleComplete(todo.id)} 
        />
        {todo.text}
      </label>
      <button onClick={() => removeTodo(todo.id)}>Remover</button>
    </li>
  );
}