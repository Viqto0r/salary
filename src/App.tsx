import styles from './App.module.scss'
import { useAppSelector } from './app/hooks'
import Calculator from './components/Calculator/Calculator'
import Output from './components/Output/Output'
import { isOpenedSelector } from './redux/slices/outputSlice'

function App() {
  const { isOpened } = useAppSelector(isOpenedSelector)

  return (
    <div className={styles.container}>
      <Calculator />
      {isOpened && <Output />}
    </div>
  )
}

export default App
