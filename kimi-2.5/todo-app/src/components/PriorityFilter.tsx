import type { PriorityFilterType } from '../types/todo';

interface PriorityFilterProps {
  priority: PriorityFilterType;
  onPriorityChange: (priority: PriorityFilterType) => void;
}

const priorityFilters: { type: PriorityFilterType; label: string }[] = [
  { type: 'all', label: '全部' },
  { type: 'high', label: '高' },
  { type: 'medium', label: '中' },
  { type: 'low', label: '低' }
];

export const PriorityFilter = ({
  priority,
  onPriorityChange
}: PriorityFilterProps) => {
  return (
    <div className="filter-group">
      <span className="filter-label">优先级筛选</span>
      <div className="priority-filter-container">
        {priorityFilters.map(({ type, label }) => (
          <button
            key={type}
            className={`filter-btn ${priority === type ? 'active' : ''}`}
            onClick={() => onPriorityChange(type)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};
