import {
    START_LOGIN_USER,
    SUCCESS_LOGIN_USER,
    ERROR_LOGIN_USER,
    START_LOGOUT_USER,
    SUCCESS_LOGOUT_USER,
    ERROR_LOGOUT_USER
} from '../actions/credentialsActions'

const initialState = {
    loggedIn: false,
    isLoggingIn: false,
    isLoggingOut: false,
    jwtToken: null
}

export const credentialsReducer = (state = initialState, action) => {
    switch(action.type) {
        case START_LOGIN_USER:
            return {
                ...state,
                isLoggingIn: true
            }

        case SUCCESS_LOGIN_USER:
            return {
                ...state,
                isLoggingIn: false,
                loggedIn: true
            }

        case ERROR_LOGIN_USER:
            return {
                ...state,
                isLoggingIn: false,
            }

        case START_LOGOUT_USER:
            return {
                ...state,
                isLoggingOut: true,
            }

        case SUCCESS_LOGOUT_USER:
            return {
                ...state,
                loggedIn: false
            }

        default:
            return state
    }
}
