import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import AddIcon from '../../assets/icons/add.svg'
import { addTodo as addNewTodo } from '../../redux/TodoSlice';

function TodoInput() {
  const dispatch = useDispatch();
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
    
    dispatch(addNewTodo(newTodo))
    addTodo('')
  }  

  return (
    <form onSubmit={onSubmit} className='todo-form' data-testid='todo-input-form'>
      <input value={todo} onChange={handleOnChange} className="todo-input" data-testid="todo-input" placeholder='Add todo here...' />
      <button className='todo-input-btn' data-testid="todo-input-btn" type="submit" disabled={isDisabled}>
        <img src={AddIcon} alt="" />
      </button>
    </form>

  )
}

export default TodoInput