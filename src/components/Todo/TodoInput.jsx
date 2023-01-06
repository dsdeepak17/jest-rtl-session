import React, { useState } from 'react'

function TodoInput({ handleAddTodo }) {
  const [todo, addTodo] = useState('')
  const isDisabled = todo.length === 0;

  const handleOnChange = e => {
    addTodo(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.random(),
      text: todo,
      isComplete: false,
    }
    handleAddTodo(newTodo)
    addTodo('')
  }  

  return (
    <form onSubmit={onSubmit} className='todo-form' data-testid='todo-input-form'>
      <input value={todo} onChange={handleOnChange} className="todo-input" data-testid="todo-input" placeholder='Add todo here...' />
      <button className='todo-input-btn' data-testid="todo-input-btn" type="submit" disabled={isDisabled}>Add Todo</button>
    </form>

  )
}

export default TodoInput