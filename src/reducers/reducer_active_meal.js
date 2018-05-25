import {FETCH_MEAL} from '../actions/index'

export default function (state = null, action) {
  switch (action.type){
    case FETCH_MEAL:
      return action.payload.data;
    default:
      return state;
  }
}