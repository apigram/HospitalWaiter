import {combineReducers} from 'redux';
import RequirementsReducer from './reducer_requirements';
import ActivePatientReducer from './reducer_active_patient';
import MealsReducer from './reducer_meals';
import PatientMealsReducer from './reducer_patient_meals';

const rootReducer = combineReducers({
    patientRequirements: RequirementsReducer,
    activePatient: ActivePatientReducer,
    meals: MealsReducer,
    patientMeals: PatientMealsReducer,
});

export default rootReducer;
