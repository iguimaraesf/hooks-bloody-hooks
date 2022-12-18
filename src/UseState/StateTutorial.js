import {useState} from 'react'

function StateTutorial() {
  const [counter, setCounter] = useState(0)
  const [inputValue, setInputValue] = useState("valor inicial")
  const increment = () => {
    setCounter(1 + counter);
    console.log(counter);
  }
  const onChange = (event) => {
    const newValue = event.target.value
    setInputValue(newValue)
  }
  return (
    <div>
        Olá, StateTutorial {counter} <button onClick={increment}>Incrementar</button>
        <br/>
        <input placeholder='Digite algo' onChange={onChange}/>
        {inputValue}
        <hr/>
    </div>
  )
}

export default StateTutorial