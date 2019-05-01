import { combineReducers } from 'redux'
import { credentialsReducer } from './credentialsReducer'
import { bookReducer } from './bookReducer'
import { commentReducer } from './commentReducer'

export default combineReducers({
    credentialsReducer,
    bookReducer,
    commentReducer
})