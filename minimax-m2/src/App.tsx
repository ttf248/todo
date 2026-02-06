import { useState, useMemo } from 'react';
import { useTodos } from './hooks/useTodos';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { TodoStatsView } from './components/TodoStats';
import { TodoFilter } from './components/TodoFilter';
import { PriorityFilter } from './components/PriorityFilter';
import { FilterStatus, FilterPriority } from './types/filter';
import './App.css';

function App() {
  const { todos, stats, addTodo, toggleTodo, deleteTodo, updateTodoPriority, updateTodoText } = useTodos();
  const [statusFilter, setStatusFilter] = useState<FilterStatus>('all');
  const [priorityFilter, setPriorityFilter] = useState<FilterPriority>('all');

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      // Status filter
      if (statusFilter === 'active' && todo.completed) return false;
      if (statusFilter === 'completed' && !todo.completed) return false;

      // Priority filter
      if (priorityFilter !== 'all' && todo.priority !== priorityFilter) return false;

      return true;
    });
  }, [todos, statusFilter, priorityFilter]);

  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoInput onAdd={addTodo} />
      <TodoStatsView stats={stats} />
      <div className="filters-container">
        <TodoFilter currentFilter={statusFilter} onFilterChange={setStatusFilter} />
        <PriorityFilter currentFilter={priorityFilter} onFilterChange={setPriorityFilter} />
      </div>
      <TodoList
        todos={filteredTodos}
        statusFilter={statusFilter}
        priorityFilter={priorityFilter}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onUpdatePriority={updateTodoPriority}
        onUpdateText={updateTodoText}
      />
    </div>
  );
}

export default App;
