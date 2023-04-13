import { FC, memo } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { Shifts, toggleOppened } from '../../redux/slices/outputSlice'
import {
  isNightShiftsSelector,
  salaryChunkSelector,
} from '../../redux/slices/calculatorSlice'
import SalaryChunk from './SalaryChunk/SalaryChunk'
import BonusPercentToggler from './BonusPercentToggler/BonusPercentToggler'
import styles from './Output.module.scss'

const shifts = [
  Shifts.d8n7,
  Shifts.d7n8,
  Shifts.d8n8,
  Shifts.d7n7,
  Shifts.d15,
  Shifts.d16,
  Shifts.d14,
]

const Output: FC = () => {
  const dispatch = useAppDispatch()
  const salary = useAppSelector(salaryChunkSelector)
  const isNightShifts = useAppSelector(isNightShiftsSelector)

  return (
    <div className={styles.container}>
      <div className={styles.output}>
        <header className={styles.menu}>
          <div className={styles.title}>Премия:</div>
          <div className={styles.headerBody}>
            <BonusPercentToggler />
            <div
              className={styles.closeBtn}
              onClick={() => {
                dispatch(toggleOppened())
              }}
            ></div>
          </div>
        </header>

        <div className={styles.chunkList}>
          {salary.map((salaryChunk, idx) => (
            <SalaryChunk
              key={idx}
              {...salaryChunk}
              chunkName={!isNightShifts ? shifts.slice(4)[idx] : shifts[idx]}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default memo(Output)
