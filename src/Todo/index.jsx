import { useReducer } from 'react';
//1. Init states
import reducer, { initStates } from './reducer'
//2. Actions
import { setJob, createJob, deleteJob } from './action'
//3. Reducer



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
