import { RootState } from './../../app/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
export enum Shifts {
  d8n7 = '8 дней, 7 ночей',
  d7n8 = '7 дней, 8 ночей',
  d8n8 = '8 дней, 8 ночей',
  d7n7 = '7 дней, 7 ночей',
  d15 = '15 дней',
  d16 = '16 дней',
  d14 = '14 дней',
}

export interface ISalaryChunk {
  salary: number
  night: number
  harmfulness: number
  tax: number
  dirty: number
  total: number
  bonus: number
}

//type BonusType = 0 | 10 | 20 | 30
interface IInitialState {
  salary: ISalaryChunk[]
  bonus: number
  isOpened: boolean
}
const initialState: IInitialState = {
  salary: [],
  bonus: 20,
  isOpened: false,
}

const outputSlice = createSlice({
  name: 'output',
  initialState,
  reducers: {
    setSalary(state, action: PayloadAction<{ salary: ISalaryChunk[] }>) {
      state.salary = action.payload.salary
    },
    toggleOppened(state) {
      state.isOpened = !state.isOpened
    },
    setBonus(state, action: PayloadAction<{ bonus: number }>) {
      state.bonus = action.payload.bonus
    },
  },
})

export const outputSelector = (state: RootState) => ({
  harmfulnessPercent: state.calculator.harmfulnessPercent,
  tariff: state.calculator.tariff,
  isNightShifts: state.calculator.isNightShifts,
  bonus: state.output.bonus,
})

export const isOpenedSelector = (state: RootState) => ({
  isOpened: state.output.isOpened,
})

export default outputSlice.reducer
export const { setSalary, toggleOppened, setBonus } = outputSlice.actions
