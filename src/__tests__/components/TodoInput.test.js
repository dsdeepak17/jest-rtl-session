import { render, screen, fireEvent } from '@testing-library/react';
import TodoInput from "../../components/Todo/TodoInput"

const mockedAddTodo = jest.fn();

describe("AddInput", () => {
  it('should render input element', () => {
    render(
      <TodoInput
        handleAddTodo={mockedAddTodo}
      />
    );
    const inputElement = screen.getByTestId('todo-input');
    expect(inputElement).toBeInTheDocument();
  });

  it('should be able to type into input', () => {
    render(
      <TodoInput
        handleAddTodo={mockedAddTodo}
      />
    );
    const inputElement = screen.getByTestId('todo-input');
    fireEvent.click(inputElement)
    fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping" } })
    expect(inputElement.value).toBe("Go Grocery Shopping");
  });

  it('should be able to type into input and click Add Todo button', () => {
    render(
      <TodoInput
        handleAddTodo={mockedAddTodo}
      />
    );
    const inputElement = screen.getByTestId('todo-input');
    fireEvent.click(inputElement)
    fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping" } });
    const buttonElement = screen.getByTestId('todo-input-btn');
    fireEvent.click(buttonElement)
    expect(mockedAddTodo).toBeCalled()
  });

  it('should have empty input when add button is clicked', () => {
    render(
      <TodoInput
        handleAddTodo={mockedAddTodo}
      />
    );
    const inputElement = screen.getByTestId('todo-input');
    fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping" } });
    const buttonElement = screen.getByTestId('todo-input-btn');
    fireEvent.click(buttonElement)
    expect(inputElement.value).toBe("")
  });

  it('should keep the todo-input button disabled unless the todo-input has some value', () => {
    render(
      <TodoInput
        handleAddTodo={mockedAddTodo}
      />
    );

    const inputElement = screen.getByTestId('todo-input');
    fireEvent.change(inputElement, {target: {value: ""}});
    const buttonElement = screen.getByTestId('todo-input-btn');
    expect(buttonElement).toBeDisabled();  
  })
})