import React, {useEffect, useReducer} from 'react'
import { connect } from 'react-redux'
import { addComment } from '../store/actions/commentActions'
import { withRouter } from 'react-router-dom'


const CommentForm = props => {
    const userId = localStorage.getItem('userId')
    const [state, setState] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
            {
                book_id: props.bookID,
                user_id: userId,
                comment: '',
                rating: 5
            }
        );

    const handleChanges = e => {
        e.preventDefault()
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    let thisComment = state.comment
    let thisRating = state.rating

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addComment({
            book_id: props.bookID,
            user_id: userId,
            comment: thisComment,
            rating: thisRating
        })
        props.incrementCount()
    }

    
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                name="comment"
                type="text"
                placeholder="enter your review"
                value={state.comment}
                onChange={handleChanges}
                />
                <input 
                name="rating"
                type="number"
                placeholder="enter rating"
                value={state.rating}
                onChange={handleChanges}
                min="1"
                max="5"
                />
                <button type="submit">Add Review</button>
            </form>
        </div>
    )
}


const mapStateToProps = state => ({
    addingComment: state.commentReducer.addingComment,
    error: state.bookReducer.error
})

export default withRouter(connect(
    mapStateToProps,
    {
        addComment,
    }
)(CommentForm))