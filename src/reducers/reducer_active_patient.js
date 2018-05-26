import { FETCH_PATIENT } from '../actions/index'
import {fetchPatientRequirements} from "../actions/index";

export default function (state = null, action) {
  switch (action.type){
    case FETCH_PATIENT:
      fetchPatientRequirements(action.payload.data.patient.requirements);
      return action.payload.data.patient;
    default:
      return state;
  }
}