import { INPUT_STATES, CREATE_STATES, DELETE_STATES } from './constants'

export const setJob = payload => {
    return {
        type: INPUT_STATES,
        payload
    }
}

export const createJob = payload => {
    return {
        type: CREATE_STATES,
        payload
    }
}

export const deleteJob = payload => {
    return {
        type: DELETE_STATES,
        payload
    }
}