import axios from 'axios';

const MEAL_SERVICE_URL = 'http://localhost:5000';

export const FETCH_MEALS = 'FETCH_MEALS';
export const FETCH_MEAL = 'FETCH_MEAL';
export const FETCH_PATIENT = 'FETCH_PATIENT';
export const SELECT_MEAL = 'SELECT_MEAL';
export const FETCH_REQUIREMENTS = 'FETCH_REQUIREMENTS';
export const FETCH_PATIENT_REQUIREMENTS = 'FETCH_PATIENT_REQUIREMENTS';

export function fetchMeals() {
    const url = `${MEAL_SERVICE_URL}/mealservice/meal`;

    const request = axios.get(url);

    return {
        type: FETCH_MEALS,
        payload: request
    }
}

export function fetchMeal(meal) {
    const url = `${MEAL_SERVICE_URL}${meal}`;

    const request = axios.get(url);

    return {
        type: FETCH_MEALS,
        payload: request
    }
}

export function fetchPatient(patient) {
    const url = `${MEAL_SERVICE_URL}/mealservice/patient/${patient}`;

    const request = axios.get(url);

    return {
        type: FETCH_PATIENT,
        payload: request
    }
}

export function fetchPatientRequirements(patient) {
    console.log('Fetching patient requirements');
    const url = `${MEAL_SERVICE_URL}${patient}`;

    const request = axios.get(url);

    return {
        type: FETCH_PATIENT_REQUIREMENTS,
        payload: request
    }
}

export function selectMeal(meal) {
    const url = `${MEAL_SERVICE_URL}${meal}`;

    const request = axios.get(url);

    return {
        type: SELECT_MEAL,
        payload: request
    }
}