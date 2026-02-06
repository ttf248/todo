import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useTodos } from './useTodos';

describe('useTodos', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('should initialize with empty todos', () => {
    const { result } = renderHook(() => useTodos());

    expect(result.current.todos).toEqual([]);
    expect(result.current.stats).toEqual({
      total: 0,
      completed: 0,
      pending: 0,
      highPriority: 0,
      mediumPriority: 0,
      lowPriority: 0,
    });
    expect(result.current.allTags).toEqual([]);
  });

  it('should add a todo', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo('Test todo', 'medium');
    });

    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0]).toMatchObject({
      text: 'Test todo',
      priority: 'medium',
      completed: false,
    });
    expect(result.current.stats.total).toBe(1);
    expect(result.current.stats.pending).toBe(1);
  });

  it('should not add empty todos', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo('   ', 'medium');
    });

    expect(result.current.todos).toHaveLength(0);
  });

  it('should toggle todo completion', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo('Test todo', 'medium');
    });

    const todoId = result.current.todos[0].id;

    act(() => {
      result.current.toggleTodo(todoId);
    });

    expect(result.current.todos[0].completed).toBe(true);
    expect(result.current.stats.completed).toBe(1);
    expect(result.current.stats.pending).toBe(0);

    act(() => {
      result.current.toggleTodo(todoId);
    });

    expect(result.current.todos[0].completed).toBe(false);
  });

  it('should delete a todo', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo('Test todo', 'medium');
    });

    const todoId = result.current.todos[0].id;

    act(() => {
      result.current.deleteTodo(todoId);
    });

    expect(result.current.todos).toHaveLength(0);
  });

  it('should update todo priority', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo('Test todo', 'low');
    });

    const todoId = result.current.todos[0].id;

    act(() => {
      result.current.updateTodoPriority(todoId, 'high');
    });

    expect(result.current.todos[0].priority).toBe('high');
    expect(result.current.stats.highPriority).toBe(1);
  });

  it('should update todo text', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo('Original text', 'medium');
    });

    const todoId = result.current.todos[0].id;

    act(() => {
      result.current.updateTodoText(todoId, 'Updated text');
    });

    expect(result.current.todos[0].text).toBe('Updated text');
  });

  it('should update todo due date', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo('Test todo', 'medium');
    });

    const todoId = result.current.todos[0].id;
    const dueDate = new Date('2024-12-31');

    act(() => {
      result.current.updateTodoDueDate(todoId, dueDate);
    });

    expect(result.current.todos[0].dueDate).toEqual(dueDate);
  });

  it('should update todo tags', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo('Test todo', 'medium');
    });

    const todoId = result.current.todos[0].id;

    act(() => {
      result.current.updateTodoTags(todoId, ['work', 'urgent']);
    });

    expect(result.current.todos[0].tags).toEqual(['work', 'urgent']);
    expect(result.current.allTags).toEqual(['urgent', 'work']);
  });

  it('should add todo with all properties', () => {
    const { result } = renderHook(() => useTodos());
    const dueDate = new Date('2024-12-31');

    act(() => {
      result.current.addTodo('Complete todo', 'high', dueDate, ['work', 'important']);
    });

    expect(result.current.todos[0]).toMatchObject({
      text: 'Complete todo',
      priority: 'high',
      completed: false,
      dueDate,
      tags: ['work', 'important'],
    });
  });
});
