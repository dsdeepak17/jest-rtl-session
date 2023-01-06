import React, { useState } from 'react'
import TodoInput from '../components/Todo/TodoInput'
import TodoList from '../components/Todo/TodoList'
import TodoStatus from '../components/Todo/TodoStatus'


function TodoPage() {
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodoList(prevTodos => ([
      ...prevTodos,
      newTodo
    ]))
  }

  const toggleTodoCompletion = (toggleId) => {
    const newTodos = [...todoList];
    const id = todoList.findIndex(todo => todo.id === toggleId)
    newTodos[id].isComplete = !todoList[id].isComplete
    setTodoList(newTodos)
  }

  const handleTodoDeletion = deletionId => {
    const filteredTodos = todoList.filter(({ id }) => id !== deletionId)
    setTodoList(filteredTodos)
  }

  return (
    <div className='todo-container' data-testid="todo-container">
      <TodoInput handleAddTodo={handleAddTodo} />
      <TodoList
        todoList={todoList}
        toggleTodoCompletion={toggleTodoCompletion}
        handleTodoDeletion={handleTodoDeletion}
      />
      <TodoStatus todoList={todoList} />
    </div>
  )
}

export default TodoPage