import { useState, useEffect, useMemo } from 'react';
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
    highPriority: todos.filter((t) => t.priority === 'high').length,
    mediumPriority: todos.filter((t) => t.priority === 'medium').length,
    lowPriority: todos.filter((t) => t.priority === 'low').length,
  };

  const addTodo = (text: string, priority: Priority, dueDate?: Date, tags: string[] = []) => {
    if (!text.trim()) return;

    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: text.trim(),
      completed: false,
      priority,
      createdAt: new Date(),
      dueDate,
      tags,
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

  const updateTodoText = (id: string, text: string) => {
    if (!text.trim()) return;
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, text: text.trim() } : todo
      )
    );
  };

  const updateTodoDueDate = (id: string, dueDate?: Date) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, dueDate } : todo
      )
    );
  };

  const updateTodoTags = (id: string, tags: string[]) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, tags } : todo
      )
    );
  };

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    todos.forEach((todo) => {
      todo.tags.forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  }, [todos]);

  return {
    todos,
    stats,
    allTags,
    addTodo,
    toggleTodo,
    deleteTodo,
    updateTodoPriority,
    updateTodoText,
    updateTodoDueDate,
    updateTodoTags,
  };
}
