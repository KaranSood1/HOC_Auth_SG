import {CHANGE_AUTH} from './types';

export default function authenticate(isLoggesIn) {
    return{
        type: CHANGE_AUTH,
        payload : isLoggesIn
    };
}