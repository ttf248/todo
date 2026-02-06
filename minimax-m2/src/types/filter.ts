export type FilterStatus = 'all' | 'active' | 'completed';
export type FilterPriority = 'all' | 'high' | 'medium' | 'low';

export interface FilterState {
  status: FilterStatus;
  priority: FilterPriority;
}
