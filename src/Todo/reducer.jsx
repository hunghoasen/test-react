import { INPUT_STATES, CREATE_STATES, DELETE_STATES } from './constants'


export const initStates = {
    job: '',
    jobs: []
}

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

export default reducer;