import {LOGIN, AUTH_HEADER} from '../actions'

export default function(state = null, action) {
    switch (action.type) {
        case LOGIN:
            if (action.error) {
                console.log(action.error);
                return null;
            }
            AUTH_HEADER.headers.Authorization = `Bearer ${action.payload.data.user.token}`;
            return action.payload.data.user;
        default:
            return state;
    }
}