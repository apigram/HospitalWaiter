import {FETCH_REQUIREMENTS} from '../actions/index'

export default function (state = [], action) {
  switch (action.type){
    case FETCH_REQUIREMENTS:
      return action.payload.requirements;
    default:
      return state;
  }
}