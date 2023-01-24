import { render, screen, cleanup } from '../../test-utils';
import { act } from 'react-dom/test-utils';
import TodoStatus from '../../components/Todo/TodoStatus';
import { addTodo } from '../../redux/TodoSlice';
import { store } from '../../redux/store';

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

describe('Tests the TodoStatus Component', () => {

  afterEach(() => {
    cleanup();
    jest.resetModules();
  });

  it('should show number of total tasks.', () => {
    render(<TodoStatus />)

    act(() => {
      todoList.forEach(todo => store.dispatch(addTodo(todo)))
    })

    const todoStatusElement = screen.getByTestId('todo-status');
    expect(todoStatusElement).toHaveTextContent(/total tasks: 3/i)
  });

  it('should show number of tasks completed.', () => {
    render(<TodoStatus />)
    const todoStatusElement = screen.getByTestId('todo-status');
    expect(todoStatusElement).toHaveTextContent(/completed tasks: 1/i)
  });
});