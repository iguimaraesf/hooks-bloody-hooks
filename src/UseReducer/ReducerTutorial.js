import { useReducer } from 'react'

function ReducerTutorial() {
  const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: 1 + state.count, showText: state.showText }
        case 'toggleShowText':
            return { count: state.count, showText: !state.showText }
        default:
            return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: true
  })
  return (
    <div>
        <b>{state.count}</b>
        <button onClick={() => {
            dispatch({ type: 'INCREMENT' })
            dispatch({ type: 'toggleShowText' })
        }}>Clique aqui</button>
        {state.showText && <p>Este é um texto</p>}
    </div>
  )
}

export default ReducerTutorial