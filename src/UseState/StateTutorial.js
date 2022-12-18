import {useState} from 'react'

function StateTutorial() {
  const [counter, setCounter] = useState(0)
  const increment = () => {
    setCounter(1 + counter);
    console.log(counter);
  }
  return (
    <div>Olá, StateTutorial {counter} <button onClick={increment}>Incrementar</button></div>
  )
}

export default StateTutorial