import React from 'react'
import { useSelector } from 'react-redux'

function TodoStatus() {
  const todoList = useSelector(state => state.todos.todoList)

  const tasksCompleted = todoList.filter(({ isComplete }) => isComplete === true)

  
  return (
    <div className='todo-status' data-testid="todo-status">
      <span>{`Total Tasks: ${todoList.length}`}</span>
      <span>{`Completed Tasks: ${tasksCompleted.length}`}</span>
    </div>
  )
}

export default TodoStatus