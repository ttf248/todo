import type { Todo } from '../types/todo';
import { TodoItem } from './TodoItem';
import { EmptyState } from './EmptyState';
import type { FilterType, PriorityFilterType } from '../types/todo';

interface TodoListProps {
  todos: Todo[];
  filter: FilterType;
  priorityFilter: PriorityFilterType;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export const TodoList = ({
  todos,
  filter,
  priorityFilter,
  onToggle,
  onDelete
}: TodoListProps) => {
  if (todos.length === 0) {
    return <EmptyState filter={filter} priorityFilter={priorityFilter} />;
  }

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};
