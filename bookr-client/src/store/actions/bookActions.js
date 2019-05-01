import axios from 'axios'

export const FETCH_BOOKS_START = "FETCH_BOOKS_START"
export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS"
export const FETCH_BOOKS_ERROR = "FETCH_BOOKS_ERROR"

export const FETCH_BOOK_START = "FETCH_BOOK_START"
export const FETCH_BOOK_SUCCESS = "FETCH_BOOK SUCCESS"
export const FETCH_BOOK_ERROR = "FETCH_BOOK_ERROR"

export const DELETE_BOOK_START = "DELETE_BOOK_START"
export const DELETE_BOOK_SUCCESS = "DELETE_BOOK_SUCCESS"
export const DELETE_BOOK_ERROR = "DELETE_BOOK_ERROR"

export const ADD_BOOK_START = "ADD_BOOK_START"
export const ADD_BOOK_SUCCESS = "ADD_BOOK_SUCCESS"
export const ADD_BOOK_ERROR = "ADD_BOOK_ERROR"

const token = localStorage.getItem("jwt");
const requestOptions = {
  headers: {
    authorization: token
  }
};
const API = axios.create({baseUrl: 'https://bookr-matt.herokuapp.com/api/'})

export const fetchBooks = () => dispatch => {
    dispatch({ type: FETCH_BOOKS_START })
    API
        .get(`books`, requestOptions)
        .then(res => {
            dispatch({ type: FETCH_BOOKS_SUCCESS, payload: res})
        })
        .catch(err => {
            dispatch({ type: FETCH_BOOKS_ERROR, payload: err })
        })
}

export const fetchSingleBook = id => dispatch => {
    dispatch({ type: FETCH_BOOK_START })
    API
        .get(`books/${id}`, requestOptions)
        .then(res => {
            console.log("here", res.data)
            dispatch({ type: FETCH_BOOK_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: FETCH_BOOK_ERROR, payload: err })
        })
}


export const deleteBook = id => dispatch => {
    dispatch({ type: DELETE_BOOK_START, payload: id })
    API
        .delete(`books/${id}`, requestOptions)
        .then(res => {
            console.log(res)
            dispatch({ type: DELETE_BOOK_SUCCESS })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: DELETE_BOOK_ERROR })
        })
}

export const addBook = bookInfo => dispatch => {
    dispatch({ type: ADD_BOOK_START, payload: bookInfo })
    API
        .post(`books`, bookInfo)
        .then(res => {
            console.log(res)
            dispatch({ type: ADD_BOOK_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: ADD_BOOK_ERROR, payload: err })
        })
}