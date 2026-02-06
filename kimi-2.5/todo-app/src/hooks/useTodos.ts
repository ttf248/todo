import { useState, useEffect, useCallback } from 'react';
import type { Todo, Priority } from '../types/todo';

const STORAGE_KEY = 'todos';

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // 兼容旧数据：没有 priority 的默认为 medium
        return parsed.map((todo: Partial<Todo>) => ({
          ...todo,
          priority: (todo.priority as Priority) || 'medium'
        })) as Todo[];
      } catch {
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = useCallback((text: string, priority: Priority = 'medium') => {
    const todo: Todo = {
      id: Date.now(),
      text,
      completed: false,
      priority,
      createdAt: new Date().toISOString()
    };
    setTodos(prev => [todo, ...prev]);
  }, []);

  const toggleTodo = useCallback((id: number) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const deleteTodo = useCallback((id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo
  };
};
