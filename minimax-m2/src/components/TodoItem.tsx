import { Todo, Priority } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdatePriority: (id: string, priority: Priority) => void;
}

export function TodoItem({ todo, onToggle, onDelete, onUpdatePriority }: TodoItemProps) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div
        className={`checkbox ${todo.completed ? 'checked' : ''}`}
        onClick={() => onToggle(todo.id)}
      />
      <select
        className={`priority-tag priority-${todo.priority}`}
        value={todo.priority}
        onChange={(e) => onUpdatePriority(todo.id, e.target.value as Priority)}
        onClick={(e) => e.stopPropagation()}
      >
        <option value="high">高</option>
        <option value="medium">中</option>
        <option value="low">低</option>
      </select>
      <span className="todo-text">{todo.text}</span>
      <button className="delete-btn" onClick={() => onDelete(todo.id)}>
        ×
      </button>
    </li>
  );
}
