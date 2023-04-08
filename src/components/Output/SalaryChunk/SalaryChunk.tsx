import { FC, memo } from 'react'
import styles from './SalaryChunk.module.scss'

interface SalaryChunkProps {
  chunkName: string
  salary: number
  dirty: number
  harmfulness: number
  night: number
  tax: number
  total: number
  bonus: number
}

const SalaryChunk: FC<SalaryChunkProps> = ({
  chunkName,
  salary,
  harmfulness,
  night,
  bonus,
  tax,
  dirty,
  total,
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.chunkName}>{chunkName}</p>
      <div>
        <p>Оклад: {salary}</p>
        {harmfulness ? <p>Вредность: {harmfulness}</p> : ''}
        {night ? <p>Ночные: {night}</p> : ''}
        <p>Премия: {bonus}</p>
        <p>Налог: {tax}</p>
        <p className={styles.dirty}>Грязными: {dirty}</p>
        <p className={styles.total}>Итого: {total}</p>
      </div>
    </div>
  )
}

export default memo(SalaryChunk)
