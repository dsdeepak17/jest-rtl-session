import { configureStore } from '@reduxjs/toolkit'
// import { setupListeners } from '@reduxjs/toolkit/query'
import todoReducer from './TodoSlice';
import { followerApi } from './followerApi'

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    // Add the generated reducer as a specific top-level slice
    [followerApi.reducerPath]: followerApi.reducer,
  },

  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(followerApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch)