import { FC, memo } from 'react'
import styles from './Output.module.scss'
import { useAppDispatch } from '../../app/hooks'
import { toggleOppened } from '../../redux/slices/outputSlice'

const Output: FC = () => {
  const dispatch = useAppDispatch()
  return (
    <div className={styles.container}>
      <div className={styles.output}>
        <div
          className={styles.closeBtn}
          onClick={() => {
            dispatch(toggleOppened())
          }}
        ></div>
      </div>
    </div>
  )
}

export default memo(Output)
