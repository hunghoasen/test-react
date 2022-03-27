import Content from './Content';
import { useReducer } from 'react';
import './App.css';

// Init states
const initStates = 0;

// Actions
const UP_STATES = 'up'
const DOWN_STATES = 'down'

// Reducer
const reducer = (state, action) => {
  switch (action) {
    case UP_STATES:
      return state + 1
    case DOWN_STATES:
      return state - 1
    default: new Error('invalid error')
  }

}

function App() {

  const [cost, dispatch] = useReducer(reducer, initStates)



  return (

    <div style={{ padding: "10px 32px" }}>

      <h1>{cost}</h1>
      <br />
      <button
        onClick={() => dispatch(UP_STATES)}
      >Up</button>
      <button
        onClick={() => dispatch(DOWN_STATES)}
      >Down</button>

    </div>
  )
}

export default App;
