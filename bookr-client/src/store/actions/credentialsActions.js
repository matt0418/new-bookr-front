import axios from 'axios'

export const START_LOGIN_USER = "START_LOGIN_USER"
export const SUCCESS_LOGIN_USER = "SUCCESS_LOGIN_USER"
export const ERROR_LOGIN_USER = "ERROR_LOGIN_USER"

export const START_LOGOUT_USER = "START_LOGOUT_USER"
export const SUCCESS_LOGOUT_USER = "SUCCESS_LOGOUT_USER"
export const ERROR_LOGOUT_USER = "ERROR_LOGOUT_USER"

export const userLogin = inputLogin => dispatch => {
    const endpoint = 'https://bookr-matt.herokuapp.com/api/auth/login'
    dispatch({ type: START_LOGIN_USER })
        axios
        .post(endpoint, inputLogin)
        .then(res => {
            localStorage.setItem('jwt', res.data.token)
            localStorage.setItem('userId', res.data.id)
            dispatch({ type: SUCCESS_LOGIN_USER, payload: res.data.token })
        })
        .catch(err => {
            dispatch({ type: ERROR_LOGIN_USER, payload: err })
        })
}

export const userLogout = () => dispatch => {
    dispatch({ type: START_LOGOUT_USER })
    localStorage.clear()
    dispatch({ type: SUCCESS_LOGOUT_USER })
}