import { useState } from 'react';
import { Priority } from '../types/todo';

interface TodoInputProps {
  onAdd: (text: string, priority: Priority) => void;
}

export function TodoInput({ onAdd }: TodoInputProps) {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');

  const handleSubmit = () => {
    if (!text.trim()) return;
    onAdd(text, priority);
    setText('');
    setPriority('medium');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="input-group">
      <select
        className="priority-select"
        value={priority}
        onChange={(e) => setPriority(e.target.value as Priority)}
      >
        <option value="high">高</option>
        <option value="medium">中</option>
        <option value="low">低</option>
      </select>
      <input
        type="text"
        className="todo-input"
        placeholder="添加新的待办事项..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button className="add-btn" onClick={handleSubmit}>
        添加
      </button>
    </div>
  );
}
