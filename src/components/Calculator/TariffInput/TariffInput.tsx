import { FC, memo } from 'react'
import useInput from '../../../customHooks/useInput'
import {
  setTariff,
  tariffSelector,
} from '../../../redux/slices/calculatorSlice'
import styles from './TariffInput.module.scss'

const TariffInput: FC = () => {
  return (
    <div className={styles.container}>
      <input
        className={styles.tariffInput}
        type='number'
        {...useInput(tariffSelector, setTariff)}
        placeholder='Введите тарифную ставку'
      />
    </div>
  )
}

export default memo(TariffInput)
