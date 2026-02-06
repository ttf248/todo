import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { TodoInput } from './TodoInput';

describe('TodoInput', () => {
  it('renders input elements', () => {
    render(<TodoInput onAdd={vi.fn()} allTags={[]} />);

    expect(screen.getByPlaceholderText('添加新的待办事项...')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /添加/i })).toBeInTheDocument();
  });

  it('calls onAdd when form is submitted', () => {
    const onAdd = vi.fn();
    render(<TodoInput onAdd={onAdd} allTags={[]} />);

    const input = screen.getByPlaceholderText('添加新的待办事项...');
    fireEvent.change(input, { target: { value: 'New todo' } });

    const addButton = screen.getByRole('button', { name: /添加/i });
    fireEvent.click(addButton);

    expect(onAdd).toHaveBeenCalledWith('New todo', 'medium', undefined, []);
  });

  it('calls onAdd with Enter key', () => {
    const onAdd = vi.fn();
    render(<TodoInput onAdd={onAdd} allTags={[]} />);

    const input = screen.getByPlaceholderText('添加新的待办事项...');
    fireEvent.change(input, { target: { value: 'New todo' } });
    fireEvent.keyPress(input, { key: 'Enter', code: 'Enter', charCode: 13 });

    expect(onAdd).toHaveBeenCalled();
  });

  it('does not call onAdd for empty input', () => {
    const onAdd = vi.fn();
    render(<TodoInput onAdd={onAdd} allTags={[]} />);

    const addButton = screen.getByRole('button', { name: /添加/i });
    fireEvent.click(addButton);

    expect(onAdd).not.toHaveBeenCalled();
  });

  it('resets form after submission', () => {
    const onAdd = vi.fn();
    render(<TodoInput onAdd={onAdd} allTags={[]} />);

    const input = screen.getByPlaceholderText('添加新的待办事项...');
    fireEvent.change(input, { target: { value: 'New todo' } });

    const addButton = screen.getByRole('button', { name: /添加/i });
    fireEvent.click(addButton);

    expect(input).toHaveValue('');
  });

  it('shows existing tags', () => {
    render(<TodoInput onAdd={vi.fn()} allTags={['work', 'personal']} />);

    expect(screen.getByText('+ work')).toBeInTheDocument();
    expect(screen.getByText('+ personal')).toBeInTheDocument();
  });
});
