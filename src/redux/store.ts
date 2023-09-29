import { configureStore } from '@reduxjs/toolkit'
import countriesReducer from './slices/countries/countries.slice'
import filterReducer from './slices/filter/filter.slice'

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    filter: filterReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch