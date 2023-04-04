import { useDispatch } from 'react-redux'
import { AppDispatch } from '../app/store'
import { ISalaryChunk } from '../redux/slices/outputSlice'

export const calculateSalary = (tariff: number, hours: 165 | 176 | 154) => {
  return +(tariff * hours).toFixed(2)
}

export const calculateNight = (tariff: number, hours: 49 | 56 | 0) => {
  return +(tariff * 0.4 * hours).toFixed(2)
}

export const calculateTax = (summ: number) => {
  return +(summ * 0.13).toFixed(2)
}

export const calculateHarmfulness = (summ: number, harmfulness: number) => {
  return +(summ * (harmfulness / 100)).toFixed(2)
}

export const calculateBonus = (summ: number, bonusPercent: number) => {
  return +(summ * (bonusPercent / 100)).toFixed(2)
}

export const calculateDirty = (
  salary: number,
  night: number,
  harmfulness: number,
  bonus: number
) => {
  return (salary + night + harmfulness + bonus).toFixed(2)
}

export const calculateTotal = (summ: number, tax: number) => {
  return (summ - tax).toFixed(2)
}

export const calculateChunckSalary = (
  salary: number,
  night: number,
  harmfulness: number,
  bonusPercent: number
): ISalaryChunk => {
  const bonus = +calculateBonus(salary, bonusPercent)
  const dirty = +calculateDirty(salary, night, harmfulness, bonus)
  const tax = calculateTax(dirty)
  const total = +calculateTotal(dirty, tax)

  return {
    salary,
    dirty,
    harmfulness,
    night,
    tax,
    total,
    bonus,
  }
}

export const calculateTotalSalary = (
  tariff: number,
  harmfulnessPercent: number,
  isNightShifts: boolean,
  bonus: number,
  setSalary: setSalary,
  dispatch: Dispatch
) => {
  const nightHours49 = calculateNight(tariff, 49)
  const nightHours56 = calculateNight(tariff, 56)

  const salaryHours154 = calculateSalary(tariff, 154)
  const salaryHours165 = calculateSalary(tariff, 165)
  const salaryHours176 = calculateSalary(tariff, 176)

  const harmfulness154 = calculateHarmfulness(
    +salaryHours154,
    harmfulnessPercent
  )
  const harmfulness165 = calculateHarmfulness(
    +salaryHours165,
    harmfulnessPercent
  )
  const harmfulness176 = calculateHarmfulness(
    +salaryHours176,
    harmfulnessPercent
  )

  if (isNightShifts) {
    const d8n7 = calculateChunckSalary(
      salaryHours165,
      nightHours49,
      harmfulness165,
      bonus
    )
    const d7n8 = calculateChunckSalary(
      salaryHours165,
      nightHours56,
      harmfulness165,
      bonus
    )
    const d7n7 = calculateChunckSalary(
      salaryHours154,
      nightHours49,
      harmfulness154,
      bonus
    )
    const d8n8 = calculateChunckSalary(
      salaryHours176,
      nightHours56,
      harmfulness176,
      bonus
    )

    dispatch(setSalary({ salary: [d8n7, d7n8, d7n7, d8n8] }))
  } else {
    const d15 = calculateChunckSalary(salaryHours165, 0, harmfulness165, bonus)
    const d16 = calculateChunckSalary(salaryHours176, 0, harmfulness176, bonus)
    const d14 = calculateChunckSalary(salaryHours154, 0, harmfulness154, bonus)
    dispatch(setSalary({ salary: [d15, d16, d14] }))
  }
}

type Dispatch = (setSalary: any) => typeof useDispatch<AppDispatch> // изменит Any

type setSalary = (payload: { salary: ISalaryChunk[] }) => {
  payload: {
    salary: ISalaryChunk[]
  }
  type: 'output/setSalary'
}
