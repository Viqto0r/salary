import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import calculatorSlice from '../redux/slices/calculatorSlice'
import outputSlice from '../redux/slices/outputSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    calculator: calculatorSlice,
    output: outputSlice,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
