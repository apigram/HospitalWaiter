import axios from 'axios';

export const MEAL_SERVICE_URL = 'http://localhost:5001';
export const AUTH_SERVICE_URL = 'http://localhost:5000';

export const FETCH_MEALS = 'FETCH_MEALS';
export const FETCH_PATIENT = 'FETCH_PATIENT';
export const SELECT_MEAL = 'SELECT_MEAL';
export const DELETE_MEAL = 'DELETE_MEAL';
export const FETCH_PATIENT_REQUIREMENTS = 'FETCH_PATIENT_REQUIREMENTS';
export const FETCH_PATIENT_MEALS = 'FETCH_PATIENT_MEALS';
export const LOGIN = 'LOGIN';

export let AUTH_HEADER = {
    headers: {
        Authorization: ''
    }
};

export function fetchMeals() {
    const url = `${MEAL_SERVICE_URL}/mealservice/meal`;

    const request = axios.get(url, AUTH_HEADER);

    return {
        type: FETCH_MEALS,
        payload: request
    }
}

export function fetchPatient(patient) {
    const url = `${MEAL_SERVICE_URL}/mealservice/patient/${patient}`;

    const request = axios.get(url, AUTH_HEADER);

    return {
        type: FETCH_PATIENT,
        payload: request
    }
}

export function fetchPatientRequirements(patient_req_uri) {
    const url = `${MEAL_SERVICE_URL}${patient_req_uri}`;

    const request = axios.get(url, AUTH_HEADER);

    return {
        type: FETCH_PATIENT_REQUIREMENTS,
        payload: request
    }
}

export function fetchPatientMeals(patient_meal_uri) {
    const url = `${MEAL_SERVICE_URL}${patient_meal_uri}`;

    const request = axios.get(url, AUTH_HEADER);

    return {
        type: FETCH_PATIENT_MEALS,
        payload: request
    }
}

export function selectMeal(order_meal_uri, id) {
    const url = `${MEAL_SERVICE_URL}${order_meal_uri}`;

    const request = axios.post(url, {
        meal_id: id,
        quantity: 1,
    }, AUTH_HEADER);

    return {
        type: SELECT_MEAL,
        payload: request
    }
}

export function deleteMeal(delete_meal_uri) {
    const url = `${MEAL_SERVICE_URL}${delete_meal_uri}`;

    const request = axios.delete(url, AUTH_HEADER);

    return {
        type: DELETE_MEAL,
        payload: request
    }
}

export function login(user, password) {
    const url = `${AUTH_SERVICE_URL}/authservice/token`;

    const request = axios.get(url, {
            auth: {
                username: user,
                password,
            }
        }
    );

    return {
        type: LOGIN,
        payload: request
    }

}