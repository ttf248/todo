import { useCallback } from 'react';
import type { Todo } from '../types/todo';
import { priorityLabels } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  const handleToggle = useCallback(() => {
    onToggle(todo.id);
  }, [onToggle, todo.id]);

  const handleDelete = useCallback(() => {
    onDelete(todo.id);
  }, [onDelete, todo.id]);

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div
        className={`checkbox ${todo.completed ? 'checked' : ''}`}
        onClick={handleToggle}
        role="button"
        tabIndex={0}
        onKeyPress={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleToggle();
          }
        }}
      />
      <span className={`priority-badge ${todo.priority}`}>
        {priorityLabels[todo.priority]}
      </span>
      <span className="todo-text">{todo.text}</span>
      <button onClick={handleDelete} className="delete-btn">
        删除
      </button>
    </li>
  );
};
