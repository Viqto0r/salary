import { FC, memo } from 'react'
import { useAppSelector } from '../../../app/hooks'
import useCheckbox from '../../../customHooks/useCheckbox'
import useInput from '../../../customHooks/useInput'
import {
  harmfulnessPercentSelector,
  isHarmfulnessSelector,
  isNightShiftsSelector,
  setHarmfulness,
  toggleHarmfulness,
  toggleNightShifts,
} from '../../../redux/slices/calculatorSlice'
import styles from './Options.module.scss'

const Options: FC = () => {
  const isHarmfulness = useAppSelector(isHarmfulnessSelector)
  return (
    <div className={styles.container}>
      <div className={styles.harmfulnessContainer}>
        <label>
          <input
            type='checkbox'
            {...useCheckbox(isHarmfulnessSelector, toggleHarmfulness)}
          />
          Вредность &nbsp;
        </label>
        <label style={{ display: isHarmfulness ? 'block' : 'none' }}>
          <input
            type='number'
            {...useInput(harmfulnessPercentSelector, setHarmfulness)}
          />
          &nbsp;%
        </label>
      </div>
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

export default memo(Options)
