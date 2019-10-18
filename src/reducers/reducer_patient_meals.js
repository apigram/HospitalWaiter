import {FETCH_PATIENT_MEALS, SELECT_MEAL, DELETE_MEAL} from '../actions/index'

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_PATIENT_MEALS:
            if (action.payload.data) {
                return action.payload.data;
            }
            return [];
        case SELECT_MEAL:
            return [action.payload.data, ...state];
        case DELETE_MEAL:
            return state.filter((meal) => {return meal.id !== action.payload.data.id});
        default:
            return state;
    }
}