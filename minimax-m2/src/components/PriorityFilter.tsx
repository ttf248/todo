import { FilterPriority } from '../types/filter';

interface PriorityFilterProps {
  currentFilter: FilterPriority;
  onFilterChange: (filter: FilterPriority) => void;
}

export function PriorityFilter({ currentFilter, onFilterChange }: PriorityFilterProps) {
  const priorities: { value: FilterPriority; label: string }[] = [
    { value: 'all', label: '全部优先级' },
    { value: 'high', label: '高优先级' },
    { value: 'medium', label: '中优先级' },
    { value: 'low', label: '低优先级' },
  ];

  return (
    <div className="filter-group priority-filter-group">
      {priorities.map((priority) => (
        <button
          key={priority.value}
          className={`filter-btn priority-filter-btn ${currentFilter === priority.value ? 'active' : ''} ${priority.value !== 'all' ? `priority-${priority.value}` : ''}`}
          onClick={() => onFilterChange(priority.value)}
        >
          {priority.label}
        </button>
      ))}
    </div>
  );
}
