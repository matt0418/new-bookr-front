import { ADD_COMMENT_START, ADD_COMMENT_SUCCESS, ADD_COMMENT_ERROR } from '../actions/commentActions'

const initialState = {
    addingComment: false,
    comment: '',
    error: ''
}

export const commentReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_COMMENT_START:
            return {
                ...state,
                addingComment: true
            }

        case ADD_COMMENT_SUCCESS:
            return {
                ...state,
                addingComment: false,
                comment: action.payload
            }

        case ADD_COMMENT_ERROR:
            return {
                ...state,
                addingComment: false,
                error: action.payload.err
            }

        default:
            return state
    }
}