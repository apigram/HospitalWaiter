import { combineReducers } from 'redux';
import RequirementsReducer from './reducer_requirements';
import ActivePatientReducer from './reducer_active_patient';
import MealsReducer from './reducer_meals';

const rootReducer = combineReducers({
  requirements: RequirementsReducer,
  activePatient: ActivePatientReducer,
  meals: MealsReducer
});

export default rootReducer;
