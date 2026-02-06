import { useState, useMemo } from 'react';
import { useTodos } from './hooks';
import {
  TodoInput,
  TodoList,
  TodoStatsView,
  TodoFilter,
  PriorityFilter,
  TagFilter,
} from './components';
import type { FilterStatus, FilterPriority } from './types';
import './App.css';

function App() {
  const { todos, stats, allTags, addTodo, toggleTodo, deleteTodo, updateTodoPriority, updateTodoText, updateTodoDueDate, updateTodoTags } = useTodos();
  const [statusFilter, setStatusFilter] = useState<FilterStatus>('all');
  const [priorityFilter, setPriorityFilter] = useState<FilterPriority>('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      // Status filter
      if (statusFilter === 'active' && todo.completed) return false;
      if (statusFilter === 'completed' && !todo.completed) return false;

      // Priority filter
      if (priorityFilter !== 'all' && todo.priority !== priorityFilter) return false;

      // Tag filter
      if (selectedTags.length > 0 && !selectedTags.some((tag) => todo.tags.includes(tag))) {
        return false;
      }

      return true;
    });
  }, [todos, statusFilter, priorityFilter, selectedTags]);

  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoInput onAdd={addTodo} allTags={allTags} />
      <TodoStatsView stats={stats} />
      <div className="filters-container">
        <TodoFilter currentFilter={statusFilter} onFilterChange={setStatusFilter} />
        <PriorityFilter currentFilter={priorityFilter} onFilterChange={setPriorityFilter} />
      </div>
      <TagFilter
        allTags={allTags}
        selectedTags={selectedTags}
        onTagSelect={(tag: string) =>
          setSelectedTags((prev: string[]) =>
            prev.includes(tag) ? prev.filter((t: string) => t !== tag) : [...prev, tag]
          )
        }
        onClearFilters={() => setSelectedTags([])}
      />
      <TodoList
        todos={filteredTodos}
        statusFilter={statusFilter}
        priorityFilter={priorityFilter}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onUpdatePriority={updateTodoPriority}
        onUpdateText={updateTodoText}
        onUpdateDueDate={updateTodoDueDate}
        onUpdateTags={updateTodoTags}
        allTags={allTags}
      />
    </div>
  );
}

export default App;
