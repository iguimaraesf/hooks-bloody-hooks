import {useState} from 'react'

function StateTutorial() {
  const [counter, setCounter] = useState(0)
  const [inputValue, setInputValue] = useState("valor inicial")
  const increment = () => {
    setCounter(1 + counter);
  }
  const onChange = (event) => {
    const newValue = event.target.value
    setInputValue(newValue)
  }
  return (
    <div>
      <div className='title'>StateTutorial</div>
        Olá, StateTutorial {counter} <button onClick={increment}>Incrementar</button>
        <br/>
        <input placeholder='Digite algo' onChange={onChange}/>
        {inputValue}
    </div>
  )
}

export default StateTutorial