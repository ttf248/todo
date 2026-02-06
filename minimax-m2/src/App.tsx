import { useTodos } from './hooks/useTodos';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { TodoStatsView } from './components/TodoStats';
import './App.css';

function App() {
  const { todos, stats, addTodo, toggleTodo, deleteTodo, updateTodoPriority } = useTodos();

  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoInput onAdd={addTodo} />
      <TodoStatsView stats={stats} />
      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onUpdatePriority={updateTodoPriority}
      />
    </div>
  );
}

export default App;
