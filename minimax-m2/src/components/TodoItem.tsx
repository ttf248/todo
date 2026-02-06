import { useState, useRef, useEffect } from 'react';
import { Todo, Priority } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdatePriority: (id: string, priority: Priority) => void;
  onUpdateText: (id: string, text: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete, onUpdatePriority, onUpdateText }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleSave = () => {
    if (editText.trim()) {
      onUpdateText(todo.id, editText.trim());
    } else {
      setEditText(todo.text);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  const handleDoubleClick = () => {
    if (!todo.completed) {
      setIsEditing(true);
    }
  };

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
        disabled={isEditing}
      >
        <option value="high">高</option>
        <option value="medium">中</option>
        <option value="low">低</option>
      </select>
      {isEditing ? (
        <input
          ref={inputRef}
          className="todo-text-edit"
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleSave}
        />
      ) : (
        <span
          className="todo-text"
          onDoubleClick={handleDoubleClick}
          title="双击编辑"
        >
          {todo.text}
        </span>
      )}
      <div className="todo-actions">
        {!isEditing && (
          <button
            className="edit-btn"
            onClick={() => setIsEditing(true)}
            disabled={todo.completed}
            title="编辑"
          >
            ✎
          </button>
        )}
        <button className="delete-btn" onClick={() => onDelete(todo.id)} title="删除">
          ×
        </button>
      </div>
    </li>
  );
}
