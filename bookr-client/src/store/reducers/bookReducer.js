import {
    FETCH_BOOKS_START,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_ERROR,
    FETCH_BOOK_START,
    FETCH_BOOK_SUCCESS,
    FETCH_BOOK_ERROR,
    // DELETE_BOOK_START,
    // DELETE_BOOK_SUCCESS,
    // DELETE_BOOK_ERROR,
    // ADD_BOOK_START,
    // ADD_BOOK_SUCCESS,
    // ADD_BOOK_ERROR
} from '../actions/bookActions'

const initialState = {
    fetchingBooks: false,
    books: [],
    fetchingBook: false,
    book: {},
    deletingBooks: false,
    addingBooks: false,
    error: ''
}

export const bookReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_BOOKS_START:
            return {
                ...state,
                fetchingBooks: true,
                error: ''
            }

        case FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                fetchingBooks: false,
                books: action.payload.data
            }

        case FETCH_BOOKS_ERROR:
            return {
                ...state,
                fetchingBooks: false,
                error: action.payload.error
            }

        case FETCH_BOOK_START:
            return {
                ...state,
                fetchingBook: true,
                error: ''
            }

        case FETCH_BOOK_SUCCESS:
            return {
                ...state,
                fetchingBook: false,
                book: action.payload
            }

        case FETCH_BOOK_ERROR:
            return {
                ...state,
                fetchingBook: false,
                error: action.payload.error
            }

        

        default:
            return state
    }
}