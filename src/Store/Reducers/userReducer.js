import {
    SIGN_FAIL,
    SIGN_IN_SUCCESS,
    SIGN_OUT
} from '../ActionTypes'

const initState = {
    user: null,
    isUser: false,
    error: null,
};

export const userReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                user: payload,
                isUser: true,
                error: null
            };
        case SIGN_FAIL:
        case SIGN_OUT:
            return {
                user: null,
                isUser: false,
                error: null,
            };
            // case SIGN_FAIL:
            // return {
            //     ...state,
            //     error: payload
            // };
        default:
            return state;

    }
};