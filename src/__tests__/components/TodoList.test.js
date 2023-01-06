import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import TodoList from '../../components/Todo/TodoList';

const todoList = [
  {
    id: 123,
    text: 'Wash Car',
    isComplete: false,
  },
]

const mockedToggleCompletion = jest.fn();
const mockedDeletion = jest.fn();

describe('Tests the TodoList Component', () => {

  afterEach(() => {
    cleanup();
    jest.resetModules();
  });

  it('should render the todo-text, todo-delete', () => {
    render(<TodoList
      todoList={todoList}
      toggleTodoCompletion={mockedToggleCompletion}
      handleTodoDeletion={mockedDeletion}
    />)
    const todoText = screen.getByText('Wash Car');
    const todoDelete = screen.getByTestId('delete Wash Car')
    expect(todoText).toBeInTheDocument()
    expect(todoDelete).toBeInTheDocument()
  })


  it('should remove the todo-item when todo-delete button is clicked.', () => {
    render(<TodoList
      todoList={todoList}
      toggleTodoCompletion={mockedToggleCompletion}
      handleTodoDeletion={mockedDeletion}
    />)
    const todoDeleteButton = screen.getByTestId('delete Wash Car');
    const todoItem = screen.getByTestId('todo-item')
    expect(todoItem).toBeInTheDocument();
    fireEvent.click(todoDeleteButton);
    expect(mockedDeletion).toBeCalled();
  })


  it('should toggle the completion of todo-text when it\'s clicked.', () => {
    render(<TodoList
      todoList={todoList}
      toggleTodoCompletion={mockedToggleCompletion}
      handleTodoDeletion={mockedDeletion}
    />)
    const todoItem = screen.getByTestId('todo-text')
    expect(todoItem).toBeInTheDocument();
    fireEvent.click(todoItem);
    expect(mockedToggleCompletion).toBeCalled();
  })
})