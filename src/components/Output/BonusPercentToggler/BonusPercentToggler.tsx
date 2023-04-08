import { FC, memo } from 'react'
import styles from './BonusPercentToggler.module.scss'
import {
  outputSelector,
  setBonus,
  setSalary,
} from '../../../redux/slices/outputSlice'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { salaryChunkSelector } from '../../../redux/slices/calculatorSlice'
import { recalcBonus } from '../../../utils/calculatorUtils'

const BonusPercentToggler: FC = () => {
  const dispatch = useAppDispatch()
  const { bonus } = useAppSelector(outputSelector)
  const salary = useAppSelector(salaryChunkSelector)
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setBonus({ bonus: +e.target.value }))
    recalcBonus(salary, +e.target.value, setSalary, dispatch)
  }
  return (
    <div className={styles.container}>
      <label>
        <input
          type='radio'
          name='bonus'
          id=''
          value={0}
          onChange={onChangeHandler}
          checked={bonus === 0}
        />
        0%
      </label>
      <label>
        <input
          type='radio'
          name='bonus'
          id=''
          value={10}
          onChange={onChangeHandler}
          checked={bonus === 10}
        />
        10%
      </label>
      <label>
        <input
          type='radio'
          name='bonus'
          id=''
          value={20}
          onChange={onChangeHandler}
          checked={bonus === 20}
        />
        20%
      </label>
      <label>
        <input
          type='radio'
          name='bonus'
          id=''
          value={30}
          onChange={onChangeHandler}
          checked={bonus === 30}
        />
        30%
      </label>
    </div>
  )
}

export default memo(BonusPercentToggler)
