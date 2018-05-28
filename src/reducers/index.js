import {combineReducers} from 'redux';
import RequirementsReducer from './reducer_requirements';
import ActivePatientReducer from './reducer_active_patient';
import MealsReducer from './reducer_meals';
import PatientMealsReducer from './reducer_patient_meals';
import AuthReducer from './reducer_auth';

const rootReducer = combineReducers({
    patientRequirements: RequirementsReducer,
    activePatient: ActivePatientReducer,
    meals: MealsReducer,
    patientMeals: PatientMealsReducer,
    activeUser: AuthReducer
});

export default rootReducer;
