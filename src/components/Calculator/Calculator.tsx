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
import Options from './Options/Options'
import TariffInput from './TariffInput/TariffInput'

const Calculator: FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Рассчёт зарплаты</h1>
      <TariffInput />
      <Options />
      <div className={styles.btnContainer}>
        <button>Рассчитать</button>
      </div>
    </div>
  )
}

export default memo(Calculator)
