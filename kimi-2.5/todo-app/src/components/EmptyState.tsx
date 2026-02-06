import type { FilterType, PriorityFilterType } from '../types/todo';

interface EmptyStateProps {
  filter: FilterType;
  priorityFilter: PriorityFilterType;
}

export const EmptyState = ({ filter, priorityFilter }: EmptyStateProps) => {
  const getMessage = () => {
    if (filter === 'all' && priorityFilter === 'all') {
      return '暂无任务，添加一个吧！';
    }

    const filterText =
      filter === 'active' ? '进行中' : filter === 'completed' ? '已完成' : '';

    const priorityText =
      priorityFilter === 'high'
        ? '高优先级'
        : priorityFilter === 'medium'
        ? '中优先级'
        : priorityFilter === 'low'
        ? '低优先级'
        : '';

    if (filterText && priorityText) {
      return `没有${priorityText}的${filterText}任务`;
    }

    if (filterText) {
      return `没有${filterText}的任务`;
    }

    return `没有${priorityText}的任务`;
  };

  return (
    <div className="empty-state">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
      <p>{getMessage()}</p>
    </div>
  );
};
