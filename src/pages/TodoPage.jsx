import React from 'react'
import TodoInput from '../components/Todo/TodoInput'
import TodoList from '../components/Todo/TodoList'
import TodoStatus from '../components/Todo/TodoStatus'

function TodoPage() {

  return (
    <div className='todo-container' data-testid="todo-container">
      <TodoInput />
      <TodoList />
      <TodoStatus />
    </div>
  )
}

export default TodoPage