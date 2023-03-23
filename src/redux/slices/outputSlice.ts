import { createSlice, PayloadAction } from '@reduxjs/toolkit'
enum Shifts {
  d8n7 = '8 дней, 7 ночей',
  d7n8 = '7 дней, 8 ночей',
  d8n8 = '8 дней, 8 ночей',
  d7n7 = '7 дней, 7 ночей',
}

interface ISalaryChunk {
  salary: number
  night: number
  harmfulness: number
  tax: number
  dirty: number
  total: number
}

interface IInitialState {
  shifts: Shifts[]
  salary: ISalaryChunk[]
  bonus: number
  tariff: number
}
const initialState: IInitialState = {
  shifts: [Shifts.d8n7, Shifts.d7n8, Shifts.d8n8, Shifts.d7n7],
  salary: [],
  bonus: 20,
  tariff: 0,
}

const outputSlice = createSlice({
  name: 'output',
  initialState,
  reducers: {
    //setTariff(state, action: PayloadAction<{ tariff: number }>) {
    //  state.tariff = action.payload.tariff
    //},
    setSalary(state, action: PayloadAction<{ salary: ISalaryChunk[] }>) {
      state.salary = action.payload.salary
    },
  },
})

export default outputSlice.reducer
export const { setSalary } = outputSlice.actions
