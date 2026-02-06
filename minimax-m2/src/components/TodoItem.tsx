import { useState, useRef, useEffect, useMemo } from 'react';
import { Todo, Priority } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdatePriority: (id: string, priority: Priority) => void;
  onUpdateText: (id: string, text: string) => void;
  onUpdateDueDate: (id: string, dueDate?: Date) => void;
}

export function TodoItem({ todo, onToggle, onDelete, onUpdatePriority, onUpdateText, onUpdateDueDate }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [showDatePicker, setShowDatePicker] = useState(false);
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

  const formatDate = (date: Date): string => {
    return new Date(date).toLocaleDateString('zh-CN', {
      month: 'short',
      day: 'numeric',
    });
  };

  const isOverdue = useMemo(() => {
    if (!todo.dueDate || todo.completed) return false;
    return new Date(todo.dueDate) < new Date();
  }, [todo.dueDate, todo.completed]);

  const isDueSoon = useMemo(() => {
    if (!todo.dueDate || todo.completed || isOverdue) return false;
    const due = new Date(todo.dueDate);
    const now = new Date();
    const diffDays = Math.ceil((due.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    return diffDays <= 3;
  }, [todo.dueDate, todo.completed, isOverdue]);

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
      <div className="todo-content">
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
        {todo.dueDate && !isEditing && (
          <span className={`due-date ${isOverdue ? 'overdue' : ''} ${isDueSoon ? 'due-soon' : ''}`}>
            📅 {formatDate(todo.dueDate)}
          </span>
        )}
      </div>
      <div className="todo-actions">
        {!isEditing && (
          <>
            <button
              className="date-btn"
              onClick={() => setShowDatePicker(!showDatePicker)}
              disabled={todo.completed}
              title="设置截止日期"
            >
              📅
            </button>
            <button
              className="edit-btn"
              onClick={() => setIsEditing(true)}
              disabled={todo.completed}
              title="编辑"
            >
              ✎
            </button>
          </>
        )}
        <button className="delete-btn" onClick={() => onDelete(todo.id)} title="删除">
          ×
        </button>
      </div>
      {showDatePicker && (
        <div className="date-picker-popup">
          <input
            type="date"
            defaultValue={todo.dueDate ? new Date(todo.dueDate).toISOString().split('T')[0] : ''}
            onChange={(e) => {
              const date = e.target.value ? new Date(e.target.value) : undefined;
              onUpdateDueDate(todo.id, date);
              setShowDatePicker(false);
            }}
            autoFocus
          />
          <button
            className="clear-date-btn"
            onClick={() => {
              onUpdateDueDate(todo.id, undefined);
              setShowDatePicker(false);
            }}
          >
            清除
          </button>
          <button
            className="close-date-btn"
            onClick={() => setShowDatePicker(false)}
          >
            关闭
          </button>
        </div>
      )}
    </li>
  );
}
