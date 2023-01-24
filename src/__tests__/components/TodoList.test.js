import { render, screen, fireEvent, cleanup, act } from '../../test-utils';
import TodoList from '../../components/Todo/TodoList';
import { addTodo } from '../../redux/TodoSlice'
import { store } from '../../redux/store';

const todoList = [
  {
    id: 123,
    text: 'Wash Car',
    isComplete: false,
  },
]


describe('Tests the TodoList Component', () => {

  afterEach(() => {
    cleanup();
  });

  it('should render the todo-text, todo-delete', () => {
  render(<TodoList />)

    act(() => {
      todoList.forEach(todo => store.dispatch(addTodo(todo)))
    })

    const todoText = screen.getByText('Wash Car');
    const todoDelete = screen.getByTestId('delete Wash Car')
    expect(todoText).toBeInTheDocument()
    expect(todoDelete).toBeInTheDocument()
  })


  it('should remove the todo-item when todo-delete button is clicked.', () => {
    render(<TodoList />)

    const todoDeleteButton = screen.getByTestId('delete Wash Car');
    const todoItem = screen.getByTestId('todo-item')
    expect(todoItem).toBeInTheDocument();
    fireEvent.click(todoDeleteButton);
    expect(todoItem).not.toBeInTheDocument()
  })


  it('should toggle the completion of todo-text when it\'s clicked.', () => {
    render(<TodoList />)

    act(() => {
      todoList.forEach((todo) => store.dispatch(addTodo(todo)))
    })

    const todoItem = screen.getByTestId('todo-text')
    expect(todoItem).toBeInTheDocument();
    fireEvent.click(todoItem)
    expect(todoItem).toHaveClass('complete')
    fireEvent.click(todoItem)
    expect(todoItem).not.toHaveClass('complete')
  })
})