import type { FilterType } from '../types/todo';

interface TodoFilterProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const filters: { type: FilterType; label: string }[] = [
  { type: 'all', label: '全部' },
  { type: 'active', label: '进行中' },
  { type: 'completed', label: '已完成' }
];

export const TodoFilter = ({ filter, onFilterChange }: TodoFilterProps) => {
  return (
    <div className="filter-container">
      {filters.map(({ type, label }) => (
        <button
          key={type}
          className={`filter-btn ${filter === type ? 'active' : ''}`}
          onClick={() => onFilterChange(type)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
