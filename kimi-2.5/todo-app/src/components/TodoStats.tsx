import type { Todo } from '../types/todo';

interface TodoStatsProps {
  todos: Todo[];
}

export const TodoStats = ({ todos }: TodoStatsProps) => {
  const total = todos.length;
  const activeCount = todos.filter(t => !t.completed).length;
  const completedCount = todos.filter(t => t.completed).length;

  const highCount = todos.filter(t => t.priority === 'high').length;
  const mediumCount = todos.filter(t => t.priority === 'medium').length;
  const lowCount = todos.filter(t => t.priority === 'low').length;

  if (total === 0) {
    return (
      <div className="stats-section">
        <div className="stats-main">暂无任务</div>
      </div>
    );
  }

  return (
    <div className="stats-section">
      <div className="stats-main">
        {activeCount} 个待办，{completedCount} 个已完成，共 {total} 个任务
      </div>
      <div className="stats-grid">
        <div className="stat-item high">
          <span className="stat-value">{highCount}</span>
          <span className="stat-label">高优先级</span>
        </div>
        <div className="stat-item medium">
          <span className="stat-value">{mediumCount}</span>
          <span className="stat-label">中优先级</span>
        </div>
        <div className="stat-item low">
          <span className="stat-value">{lowCount}</span>
          <span className="stat-label">低优先级</span>
        </div>
      </div>
    </div>
  );
};
