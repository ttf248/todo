import type { Todo } from '../types/todo';
import { priorityLabels } from '../types/todo';

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
      <div className="stats">
        <span>暂无任务</span>
      </div>
    );
  }

  return (
    <div className="stats">
      <div className="stats-main">
        <span>
          {activeCount} 个待办，{completedCount} 个已完成，共 {total} 个任务
        </span>
      </div>
      <div className="stats-priority">
        <span className="priority-stat high">{priorityLabels.high}: {highCount}</span>
        <span className="priority-stat medium">{priorityLabels.medium}: {mediumCount}</span>
        <span className="priority-stat low">{priorityLabels.low}: {lowCount}</span>
      </div>
    </div>
  );
};
