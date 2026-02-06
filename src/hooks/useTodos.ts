import { useState, useEffect } from 'react';
import { Todo, TodoStats, Priority } from '../types/todo';

const STORAGE_KEY = 'todos';

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved, (key, value) => {
          if (key === 'createdAt') return new Date(value);
          return value;
        });
      } catch {
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const stats: TodoStats = {
    total: todos.length,
    completed: todos.filter((t) => t.completed).length,
    pending: todos.filter((t) => !t.completed).length,
  };

  const addTodo = (text: string, priority: Priority) => {
    if (!text.trim()) return;

    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: text.trim(),
      completed: false,
      priority,
      createdAt: new Date(),
    };

    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const updateTodoPriority = (id: string, priority: Priority) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, priority } : todo
      )
    );
  };

  return {
    todos,
    stats,
    addTodo,
    toggleTodo,
    deleteTodo,
    updateTodoPriority,
  };
}
