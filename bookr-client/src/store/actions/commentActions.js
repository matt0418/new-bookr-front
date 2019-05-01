import axios from 'axios'

export const ADD_COMMENT_START = "ADD_COMMENT_START"
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS"
export const ADD_COMMENT_ERROR = "ADD_COMMENT_ERROR"

const token = localStorage.getItem("jwt");
const requestOptions = {
  headers: {
    authorization: token
  }
};

const API = axios.create({baseUrl: 'https://bookr-matt.herokuapp.com/api/'})

export const addComment = commentInfo => dispatch => {
    dispatch({ type: ADD_COMMENT_START })
    API
        .post('comments', commentInfo, requestOptions)
        .then(res => {
            dispatch({ type: ADD_COMMENT_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: ADD_COMMENT_ERROR, payload: err })
        })
}