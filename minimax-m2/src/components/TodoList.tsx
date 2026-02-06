import { Todo, Priority } from '../types/todo';
import { FilterStatus, FilterPriority } from '../types/filter';
import { TodoItem } from './TodoItem';
import { EmptyState } from './EmptyState';

interface TodoListProps {
  todos: Todo[];
  statusFilter: FilterStatus;
  priorityFilter: FilterPriority;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdatePriority: (id: string, priority: Priority) => void;
}

export function TodoList({ todos, statusFilter, priorityFilter, onToggle, onDelete, onUpdatePriority }: TodoListProps) {
  if (todos.length === 0) {
    return (
      <EmptyState statusFilter={statusFilter} priorityFilter={priorityFilter} />
    );
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onUpdatePriority={onUpdatePriority}
        />
      ))}
    </ul>
  );
}
