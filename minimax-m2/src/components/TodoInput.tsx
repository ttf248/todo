import { useState } from 'react';
import { Priority } from '../types/todo';

interface TodoInputProps {
  onAdd: (text: string, priority: Priority, dueDate?: Date, tags?: string[]) => void;
  allTags: string[];
}

export function TodoInput({ onAdd, allTags }: TodoInputProps) {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');
  const [dueDate, setDueDate] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState('');

  const handleSubmit = () => {
    if (!text.trim()) return;
    const date = dueDate ? new Date(dueDate) : undefined;
    onAdd(text, priority, date, selectedTags);
    setText('');
    setPriority('medium');
    setDueDate('');
    setSelectedTags([]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    );
  };

  const handleAddNewTag = () => {
    if (newTag.trim() && !selectedTags.includes(newTag.trim())) {
      setSelectedTags((prev) => [...prev, newTag.trim()]);
      setNewTag('');
    }
  };

  return (
    <div className="input-group">
      <div className="input-row">
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

      {(allTags.length > 0 || selectedTags.length > 0) && (
        <div className="tags-section">
          <div className="selected-tags">
            {selectedTags.map((tag) => (
              <span key={tag} className="tag selected">
                {tag}
                <button onClick={() => toggleTag(tag)}>×</button>
              </span>
            ))}
          </div>
          <div className="existing-tags">
            {allTags
              .filter((tag) => !selectedTags.includes(tag))
              .map((tag) => (
                <button
                  key={tag}
                  className="tag-btn"
                  onClick={() => toggleTag(tag)}
                >
                  + {tag}
                </button>
              ))}
          </div>
          <div className="new-tag-input">
            <input
              type="text"
              placeholder="新标签..."
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAddNewTag()}
            />
            <button onClick={handleAddNewTag}>添加</button>
          </div>
        </div>
      )}
    </div>
  );
}
