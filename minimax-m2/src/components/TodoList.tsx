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
  onUpdateText: (id: string, text: string) => void;
  onUpdateDueDate: (id: string, dueDate?: Date) => void;
  onUpdateTags: (id: string, tags: string[]) => void;
  allTags: string[];
}

export function TodoList({ todos, statusFilter, priorityFilter, onToggle, onDelete, onUpdatePriority, onUpdateText, onUpdateDueDate, onUpdateTags, allTags }: TodoListProps) {
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
          onUpdateText={onUpdateText}
          onUpdateDueDate={onUpdateDueDate}
          onUpdateTags={onUpdateTags}
          allTags={allTags}
        />
      ))}
    </ul>
  );
}
