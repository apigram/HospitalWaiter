import {FETCH_PATIENT_REQUIREMENTS} from '../actions/index'

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_PATIENT_REQUIREMENTS:
            if (action.payload.data) {
                return action.payload.data;
            }
            return [];
        default:
            return state;
    }
}