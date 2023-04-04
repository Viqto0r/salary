import styles from './App.module.scss'
import Calculator from './components/Calculator/Calculator'
import Output from './components/Output/Output'

function App() {
  return (
    <div className={styles.container}>
      <Calculator />
      {/*<Output />*/}
    </div>
  )
}

export default App
