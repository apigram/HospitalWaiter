import {FETCH_PATIENT_MEALS, SELECT_MEAL, DELETE_MEAL} from '../actions/index'

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_PATIENT_MEALS:
            return action.payload.data.meals;
        case SELECT_MEAL:
            return [action.payload.data.meal, ...state];
        case DELETE_MEAL:
            return state.filter((meal) => {return meal.id !== action.payload.data.id});
        default:
            return state;
    }
}