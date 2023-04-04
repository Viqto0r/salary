import { RootState } from '../../app/store'
import { createSlice as calculatorSlice, PayloadAction } from '@reduxjs/toolkit'

interface IInintialState {
  tariff: string
  isHarmfulness: boolean
  harmfulnessPercent: string
  isNightShifts: boolean
}

const initialState: IInintialState = {
  tariff: '',
  isHarmfulness: true,
  harmfulnessPercent: '4',
  isNightShifts: true,
}

const inputSlice = calculatorSlice({
  name: 'input',
  initialState,
  reducers: {
    setTariff(state, action: PayloadAction<{ value: string }>) {
      state.tariff = action.payload.value
    },
    setHarmfulness(state, action: PayloadAction<{ value: string }>) {
      state.harmfulnessPercent = action.payload.value
    },
    toggleHarmfulness(state) {
      if (state.isHarmfulness) {
        state.harmfulnessPercent = '0'
      } else {
        state.harmfulnessPercent = '4'
      }
      state.isHarmfulness = !state.isHarmfulness
    },
    toggleNightShifts(state) {
      state.isNightShifts = !state.isNightShifts
    },
  },
})

export const tariffSelector = (state: RootState) => state.calculator.tariff
export const harmfulnessPercentSelector = (state: RootState) =>
  state.calculator.harmfulnessPercent

export const isNightShiftsSelector = (state: RootState) =>
  state.calculator.isNightShifts

export const isHarmfulnessSelector = (state: RootState) =>
  state.calculator.isHarmfulness

export const {
  setTariff,
  setHarmfulness,
  toggleHarmfulness,
  toggleNightShifts,
} = inputSlice.actions
export default inputSlice.reducer
