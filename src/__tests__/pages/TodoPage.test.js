import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Todo from '../../pages/TodoPage'



const addTask = (tasks) => {
  const inputElement = screen.getByTestId('todo-input')
  const addTodoButton = screen.getByTestId('todo-input-btn')
  tasks.forEach(task => {
    userEvent.type(inputElement, task); 
    userEvent.click(addTodoButton);
  });
}

describe('Testing TodoPage Components (Integration Test)', () => {

  afterEach(() => {
    cleanup();
    jest.resetModules();
  });

  it('should add todo to the list when user inputs in todo-input form', () => {
    render(<Todo />)

    addTask(['Wash Car'])
    const todoListElement = screen.getByTestId('todo-list');
    expect(todoListElement).toHaveTextContent(/wash car/i)
  })


  it('should add three todoTasks to the todoList from the todo-input', () => {
    render(<Todo />)

    addTask(['Wash Car', 'Goto Office', 'Goto Grocery Shopping']);
    const todoItems = screen.getAllByTestId('todo-item');
    expect(todoItems.length).toBe(3)
  })


  it('should add a todo and click one to toggle it\'s complete status and status should have 1 task complete', () => {
    render(<Todo />)

    addTask(['Wash Car', 'Clean the Kitchen'])
    const todoItem1 = screen.getByText(/wash car/i)
    const todoStatusElement = screen.getByTestId('todo-status')

    userEvent.click(todoItem1)
    expect(todoItem1).toHaveClass('complete')
    expect(todoStatusElement).toHaveTextContent(/total tasks: 2/i)
    expect(todoStatusElement).toHaveTextContent(/completed tasks: 1/i)
    userEvent.click(todoItem1)
    expect(todoItem1).not.toHaveClass('complete')
    expect(todoStatusElement).toHaveTextContent(/completed tasks: 0/i)
  })


  it('should add tasks and delete and again add tasks while status should be consistent with the number of tasks', () => {
    render(<Todo />)

    addTask(['fix router', 'fix playpercup', 'create profilePage'])
  
    const todoItemRouter = screen.getByText(/router/i)
    const todoItemPlaypercup = screen.getByText(/playpercup/i)
    const deleteBtnRouter = screen.getByTestId('delete fix router') 
    const deletePlaypercup = screen.getByTestId('delete fix playpercup')
    const todoStatusElement = screen.getByTestId('todo-status')

    expect(todoStatusElement).toHaveTextContent(/total tasks: 3/i)
    expect(todoStatusElement).toHaveTextContent(/completed tasks: 0/i)
    userEvent.click(todoItemRouter)
    expect(todoStatusElement).toHaveTextContent(/completed tasks: 1/i)
    userEvent.click(todoItemPlaypercup)
    expect(todoStatusElement).toHaveTextContent(/completed tasks: 2/i)
    userEvent.click(deleteBtnRouter)
    expect(todoStatusElement).toHaveTextContent(/total tasks: 2/i)
    expect(todoStatusElement).toHaveTextContent(/completed tasks: 1/i)
    expect((screen.getAllByTestId('todo-item')).length).toBe(2)
    userEvent.click(deletePlaypercup)
    expect(todoStatusElement).toHaveTextContent(/total tasks: 1/i)
    expect(todoStatusElement).toHaveTextContent(/completed tasks: 0/i)
    expect((screen.getAllByTestId('todo-item')).length).toBe(1)
    addTask(['bring grocery'])
    expect(todoStatusElement).toHaveTextContent(/total tasks: 2/i)
    expect(todoStatusElement).toHaveTextContent(/completed tasks: 0/i)
    expect((screen.getAllByTestId('todo-item')).length).toBe(2)
  })
})