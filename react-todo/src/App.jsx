import { useState, useMemo } from 'react';
import { TodoProvider, useTodos } from './context/TodoContext';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons';

function Todos() {
  const { todos, addTodo, toggleComplete, removeTodo } = useTodos();
  const [filter, setFilter] = useState('all');

  const filteredTodos = useMemo(() => {
    if (filter === 'completed') return todos.filter(todo => todo.completed);
    if (filter === 'pending') return todos.filter(todo => !todo.completed);
    return todos;
  }, [todos, filter]);

  return (
    <>
      <TodoForm addTodo={addTodo} />
      <FilterButtons filter={filter} setFilter={setFilter} />
      <TodoList
        todos={filteredTodos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
      />
    </>
  );
}

function App() {
  return (
    <div className="container">
      <h1>Lista do que Fazer:</h1>
      <TodoProvider>
        <Todos />
      </TodoProvider>
    </div>
  );
}

export default App;