import { useState } from 'react';
import { Priority } from '../types/todo';

interface TodoInputProps {
  onAdd: (text: string, priority: Priority, dueDate?: Date) => void;
}

export function TodoInput({ onAdd }: TodoInputProps) {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = () => {
    if (!text.trim()) return;
    const date = dueDate ? new Date(dueDate) : undefined;
    onAdd(text, priority, date);
    setText('');
    setPriority('medium');
    setDueDate('');
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
      <input
        type="date"
        className="date-input"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        placeholder="截止日期"
      />
      <button className="add-btn" onClick={handleSubmit}>
        添加
      </button>
    </div>
  );
}
