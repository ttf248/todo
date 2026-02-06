import { FilterStatus } from '../types/filter';

interface TodoFilterProps {
  currentFilter: FilterStatus;
  onFilterChange: (filter: FilterStatus) => void;
}

export function TodoFilter({ currentFilter, onFilterChange }: TodoFilterProps) {
  const filters: { value: FilterStatus; label: string }[] = [
    { value: 'all', label: '全部' },
    { value: 'active', label: '待完成' },
    { value: 'completed', label: '已完成' },
  ];

  return (
    <div className="filter-group">
      {filters.map((filter) => (
        <button
          key={filter.value}
          className={`filter-btn ${currentFilter === filter.value ? 'active' : ''}`}
          onClick={() => onFilterChange(filter.value)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
