export type Priority = 'high' | 'medium' | 'low';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  priority: Priority;
  createdAt: string;
}

export type FilterType = 'all' | 'active' | 'completed';
export type PriorityFilterType = 'all' | Priority;

export const priorityOrder: Record<Priority, number> = {
  high: 0,
  medium: 1,
  low: 2
};

export const priorityLabels: Record<Priority, string> = {
  high: '高',
  medium: '中',
  low: '低'
};

export const priorityColors: Record<Priority, { text: string; bg: string }> = {
  high: { text: '#ff4757', bg: 'rgba(255, 71, 87, 0.1)' },
  medium: { text: '#ffa502', bg: 'rgba(255, 165, 2, 0.1)' },
  low: { text: '#2ed573', bg: 'rgba(46, 213, 115, 0.1)' }
};
