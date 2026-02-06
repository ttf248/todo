import { useState, useCallback } from 'react';
import type { Priority } from '../types/todo';
import { priorityLabels } from '../types/todo';

interface TodoInputProps {
  onAdd: (text: string, priority: Priority) => void;
}

export const TodoInput = ({ onAdd }: TodoInputProps) => {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');

  const handleSubmit = useCallback(() => {
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed, priority);
    setText('');
  }, [text, priority, onAdd]);

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleSubmit();
      }
    },
    [handleSubmit]
  );

  return (
    <div className="input-section">
      <div className="input-container">
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="添加新任务..."
          maxLength={100}
          className="todo-input"
        />
        <div className="priority-selector">
          {(['high', 'medium', 'low'] as Priority[]).map(p => (
            <button
              key={p}
              type="button"
              className={`priority-btn ${priority === p ? 'active' : ''}`}
              onClick={() => setPriority(p)}
            >
              {priorityLabels[p]}
            </button>
          ))}
        </div>
        <button onClick={handleSubmit} className="add-btn">
          添加任务
        </button>
      </div>
    </div>
  );
};
