import { render, screen, cleanup } from '@testing-library/react';
import TodoStatus from '../../components/Todo/TodoStatus';

const todoList = [
  {
    id: 123,
    text: 'Wash Car1',
    isComplete: false,
  },
  {
    id: 345,
    text: 'Wash Car2',
    isComplete: true,
  },
  {
    id: 678,
    text: 'Wash Car3',
    isComplete: false,
  },
];

describe('Tests the TodoList Component', () => {

  afterEach(() => {
    cleanup();
    jest.resetModules();
  });

  it('should show number of total tasks.', () => {
    render(<TodoStatus
      todoList={todoList}
    />)
    const todoStatusElement = screen.getByTestId('todo-status');
    expect(todoStatusElement).toHaveTextContent(/total tasks: 3/i)
  });

  it('should show number of tasks completed.', () => {
    render(<TodoStatus
      todoList={todoList}
    />)
    const todoStatusElement = screen.getByTestId('todo-status');
    expect(todoStatusElement).toHaveTextContent(/completed tasks: 1/i)
  });
});