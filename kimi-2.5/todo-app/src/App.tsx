import { useState, useMemo } from 'react';
import { useTodos } from './hooks/useTodos';
import { TodoInput } from './components/TodoInput';
import { TodoFilter } from './components/TodoFilter';
import { PriorityFilter } from './components/PriorityFilter';
import { TodoList } from './components/TodoList';
import { TodoStats } from './components/TodoStats';
import type { FilterType, PriorityFilterType } from './types/todo';
import { priorityOrder } from './types/todo';
import './App.css';

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();
  const [filter, setFilter] = useState<FilterType>('all');
  const [priorityFilter, setPriorityFilter] = useState<PriorityFilterType>('all');

  const filteredTodos = useMemo(() => {
    return todos
      .filter((todo) => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
      })
      .filter((todo) => {
        if (priorityFilter === 'all') return true;
        return todo.priority === priorityFilter;
      })
      .sort((a, b) => {
        // 优先级排序：高 > 中 > 低
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      });
  }, [todos, filter, priorityFilter]);

  return (
    <div className="container">
      <h1>📝 Todo 列表</h1>

      <TodoInput onAdd={addTodo} />

      <div className="filters-row">
        <TodoFilter filter={filter} onFilterChange={setFilter} />
        <PriorityFilter
          priority={priorityFilter}
          onPriorityChange={setPriorityFilter}
        />
      </div>

      <TodoList
        todos={filteredTodos}
        filter={filter}
        priorityFilter={priorityFilter}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />

      <TodoStats todos={todos} />
    </div>
  );
}

export default App;
