import {LOGIN} from '../actions'
import axios from 'axios';

export default function(state = null, action) {
    switch (action.type) {
        case LOGIN:
            console.log(action.payload.data);
            axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.data.user.token}`;
            return action.payload.data.user;
        default:
            return state;
    }
}