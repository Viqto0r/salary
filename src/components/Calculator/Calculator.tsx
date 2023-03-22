import { FC, memo } from 'react'
import { useAppSelector } from '../../app/hooks'
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
  const isHarmfulness = useAppSelector(isHarmfulnessSelector)
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Рассчёт зарплаты</h1>
      <div className={styles.inputContainer}>
        <input
          className={styles.tariffInput}
          type='number'
          {...useInput(tariffSelector, setTariff)}
          placeholder='Введите тарифную ставку'
        />
      </div>
      <div className={styles.optionsContainer}>
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
      <div className={styles.btnContainer}>
        <button>Рассчитать</button>
      </div>
    </div>
  )
}

export default memo(Calculator)
