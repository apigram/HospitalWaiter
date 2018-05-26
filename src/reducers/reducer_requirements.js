import {FETCH_PATIENT_REQUIREMENTS} from '../actions/index'

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_PATIENT_REQUIREMENTS:
            return action.payload.data.requirements;
        default:
            return state;
    }
}