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
    </div>
  );
}
