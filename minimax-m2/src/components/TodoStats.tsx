import { TodoStats as TodoStatsType } from '../types/todo';

interface TodoStatsProps {
  stats: TodoStatsType;
}

export function TodoStatsView({ stats }: TodoStatsProps) {
  return (
    <div className="stats">
      <div className="stat-item">
        总计: <span>{stats.total}</span>
      </div>
      <div className="stat-item">
        已完成: <span>{stats.completed}</span>
      </div>
      <div className="stat-item">
        待完成: <span>{stats.pending}</span>
      </div>
      <div className="stat-item priority-stat-high">
        高: <span>{stats.highPriority}</span>
      </div>
      <div className="stat-item priority-stat-medium">
        中: <span>{stats.mediumPriority}</span>
      </div>
      <div className="stat-item priority-stat-low">
        低: <span>{stats.lowPriority}</span>
      </div>
    </div>
  );
}
