import { combineReducers } from 'redux'
import { credentialsReducer } from './credentialsReducer'
import { bookReducer } from './bookReducer'

export default combineReducers({
    credentialsReducer,
    bookReducer
})