import Content from './Content';
import { useReducer } from 'react';
import './App.css';

//1. Init states

const initStates = {
  job: '',
  jobs: []
}

//2. Actions

const INPUT_STATES = 'input'
const CREATE_STATES = 'create'
const DELETE_STATES = 'delete'

const setJob = payload => {
  return {
    type: INPUT_STATES,
    payload
  }
}

const createJob = payload => {
  return {
    type: CREATE_STATES,
    payload
  }
}

const deleteJob = payload => {
  return {
    type: DELETE_STATES,
    payload
  }
}

//3. Reducer

const reducer = (states, action) => {

  let newState

  switch (action.type) {
    case INPUT_STATES:
      newState = {
        ...states,
        job: action.payload
      }
      break
    case CREATE_STATES:
      newState = {
        ...states,
        jobs: [...states.jobs, action.payload]
      }
      break
    case DELETE_STATES:
      const newJobs = [...states.jobs]

      newJobs.splice(action.payload, 1)

      newState = {
        ...states,
        jobs: newJobs
      }
      break
    default:
      throw new Error('Invalid action.')
  }

  return newState
}

function App() {

  const [states, dispatch] = useReducer(reducer, initStates)

  const { job, jobs } = states

  // const handleDelete = (index) => {
  //   dispatch(deleteJob(index))
  // }

  const handleSubmit = () => {
    dispatch(createJob(job))
    dispatch(setJob(''))
  }

  return (

    <div style={{ padding: "10px 32px" }}>

      <input
        value={job}
        type="text"
        onChange={e => { dispatch(setJob(e.target.value)) }}
      />
      <button
        onClick={handleSubmit}
      >Add</button>
      <ul>
        {jobs.map((e, index) => (
          <li key={index}>
            {e}
            <span
              onClick={() => { dispatch(deleteJob(index)) }}
            >&times;</span>
          </li>
        ))}
      </ul>



    </div>
  )
}

export default App;
