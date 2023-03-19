import { FC, memo } from 'react'
import useCheckbox from '../../customHooks/useCheckbox'
import useInput from '../../customHooks/useInput'
import {
  harmfulnessPercentSelector,
  isHarmfulnessSelector,
  isNightShiftsSelector,
  setHarmfulness,
  setTariff,
  tariffSelector,
  toggleHarmfulness,
  toggleNightShifts,
} from '../../redux/slices/calculatorSlice'
import styles from './Calculator.module.scss'

const Calculator: FC = () => {
  return (
    <div className={styles.container}>
      <input
        className={styles.tariffInput}
        type='number'
        {...useInput(tariffSelector, setTariff)}
      />
      <label>
        <input
          type='checkbox'
          {...useCheckbox(isHarmfulnessSelector, toggleHarmfulness)}
        />
        Вредность
      </label>
      <label>
        <input
          type='number'
          {...useInput(harmfulnessPercentSelector, setHarmfulness)}
        />
        %
      </label>
      <label>
        <input
          type='checkbox'
          {...useCheckbox(isNightShiftsSelector, toggleNightShifts)}
        />
        Ночные смены
      </label>
    </div>
  )
}

export default memo(Calculator)
