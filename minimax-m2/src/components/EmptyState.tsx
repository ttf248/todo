import { FilterStatus, FilterPriority } from '../types/filter';

interface EmptyStateProps {
  statusFilter: FilterStatus;
  priorityFilter: FilterPriority;
}

export function EmptyState({ statusFilter, priorityFilter }: EmptyStateProps) {
  const getMessage = () => {
    // Both filters active
    if (statusFilter !== 'all' && priorityFilter !== 'all') {
      const statusText = statusFilter === 'active' ? '待完成' : '已完成';
      const priorityText =
        priorityFilter === 'high' ? '高优先级' :
        priorityFilter === 'medium' ? '中优先级' : '低优先级';
      return `暂无${statusText}的${priorityText}事项`;
    }

    // Only status filter
    if (statusFilter !== 'all') {
      return statusFilter === 'active'
        ? '暂无待完成事项'
        : '暂无已完成事项';
    }

    // Only priority filter
    if (priorityFilter !== 'all') {
      return priorityFilter === 'high'
        ? '暂无高优先级事项'
        : priorityFilter === 'medium'
        ? '暂无中优先级事项'
        : '暂无低优先级事项';
    }

    // No filters
    return '暂无待办事项';
  };

  return (
    <div className="empty-state">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
      <p>{getMessage()}</p>
    </div>
  );
}
