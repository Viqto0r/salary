import { RootState } from './../../app/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
enum Shifts {
  d8n7 = '8 дней, 7 ночей',
  d7n8 = '7 дней, 8 ночей',
  d8n8 = '8 дней, 8 ночей',
  d7n7 = '7 дней, 7 ночей',
  d15 = '15 дней',
  d16 = '16 дней',
  d14 = '14 дней',
}

const shifts = [
  Shifts.d8n7,
  Shifts.d7n8,
  Shifts.d8n8,
  Shifts.d7n7,
  Shifts.d15,
  Shifts.d16,
  Shifts.d14,
]

export interface ISalaryChunk {
  salary: number
  night: number
  harmfulness: number
  tax: number
  dirty: number
  total: number
  bonus: number
}

interface IInitialState {
  salary: ISalaryChunk[]
  bonus: number
}
const initialState: IInitialState = {
  salary: [],
  bonus: 20,
}

const outputSlice = createSlice({
  name: 'output',
  initialState,
  reducers: {
    setSalary(state, action: PayloadAction<{ salary: ISalaryChunk[] }>) {
      state.salary = action.payload.salary
    },
  },
})

export const outputSelector = (state: RootState) => ({
  harmfulnessPercent: state.calculator.harmfulnessPercent,
  tariff: state.calculator.tariff,
  isNightShifts: state.calculator.isNightShifts,
  bonus: state.output.bonus,
})
export default outputSlice.reducer
export const { setSalary } = outputSlice.actions
