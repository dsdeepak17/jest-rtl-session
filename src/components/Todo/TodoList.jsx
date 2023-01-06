import React from 'react'
import DeleteIcon from '../../assets/icons/delete.svg'

function TodoList({ todoList, toggleTodoCompletion, handleTodoDeletion }) {
  return (
    <div className='todo-list' data-testid="todo-list">
      <h2 className='text-center'>Todo List</h2>
      {todoList?.map(({ id, text, isComplete }) =>
        <div key={id} className="todo-item" data-testid="todo-item">
          <div
            className={isComplete ? 'todo-text complete' : 'todo-text'}
            onClick={() => toggleTodoCompletion(id)}
            data-testid="todo-text"
          >
            {text}
          </div>
          <img
            src={DeleteIcon}
            className="todo-delete"
            data-testid={`delete ${text}`}
            alt="delete-icon"
            onClick={() => handleTodoDeletion(id)} />
        </div>
      )} 
    </div>
  )
}

export default TodoList