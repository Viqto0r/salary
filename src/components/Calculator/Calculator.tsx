import { FC, memo } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import {
  outputSelector,
  setSalary,
  toggleOppened,
} from '../../redux/slices/outputSlice'
import { calculateTotalSalary } from '../../utils/calculatorUtils'
import styles from './Calculator.module.scss'
import Options from './Options/Options'
import TariffInput from './TariffInput/TariffInput'

const Calculator: FC = () => {
  const { harmfulnessPercent, tariff, isNightShifts, bonus } =
    useAppSelector(outputSelector)
  const dispatch = useAppDispatch()
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Рассчёт зарплаты</h1>
      <TariffInput />
      <Options />
      <div className={styles.btnContainer}>
        <button
          onClick={() => {
            calculateTotalSalary(
              +tariff,
              +harmfulnessPercent,
              isNightShifts,
              bonus,
              setSalary,
              dispatch
            )
            dispatch(toggleOppened())
          }}
        >
          Рассчитать
        </button>
      </div>
    </div>
  )
}

export default memo(Calculator)
