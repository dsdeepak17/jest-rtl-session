import React from 'react'

function TodoStatus({ todoList }) {

  const tasksCompleted = todoList.filter(({ isComplete }) => isComplete === true)

  return (
    <div className='todo-status' data-testid="todo-status">
      <span>{`Total Tasks: ${todoList.length}`}</span>
      <span>{`Completed Tasks: ${tasksCompleted.length}`}</span>
    </div>
  )
}

export default TodoStatus