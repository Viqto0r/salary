import { FC, memo } from 'react'
import styles from './Output.module.scss'

const Output: FC = () => {
  return <div className={styles.container}></div>
}

export default memo(Output)
