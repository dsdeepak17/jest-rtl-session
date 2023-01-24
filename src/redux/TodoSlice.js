import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todoList: [
    // {
    //   id: 123,
    //   text: 'Wash Car',
    //   isComplete: false,
    // },
  ]
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.todoList.push(action.payload)
    },
    toggleTodoCompletion: (state, action) => {
      const id = state.todoList.findIndex(todo => todo.id === action.payload)
      state.todoList[id].isComplete = !state.todoList[id].isComplete
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter(({ id }) => id !== action.payload)
    },
    resetTodos: (state) => {
      state.todoList = []
    }
  },
})

// Action creators are generated for each case reducer function
export const { addTodo, toggleTodoCompletion, deleteTodo, resetTodos } = todoSlice.actions

export default todoSlice.reducer