import React, { useReducer } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../store/actions/commentActions'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'


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
        <StyledSub>Add a review</StyledSub>
            <FormContainer>
                <StyledForm onSubmit={handleSubmit}>
                    <InputField 
                    name="comment"
                    type="text"
                    placeholder="enter your review"
                    value={state.comment}
                    onChange={handleChanges}
                    />
                    <InputField 
                    name="rating"
                    type="number"
                    placeholder="enter rating"
                    value={state.rating}
                    onChange={handleChanges}
                    min="1"
                    max="5"
                    />
                    <FormButton type="submit">Add Review</FormButton>
                </StyledForm>
            </FormContainer>
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

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 10%;
    @media(max-width: 500px) {
        display: block;
    }
`
const StyledForm = styled.form`
    display: flex;
    justify-content: center;
    @media(max-width: 500px) {
        display: block;
    }
`
const FormButton = styled.button`
    width: 30%;
    margin-left: 5%;
    border-radius: 10px;
    background: #907163;
    color: white;
    font-weight: bold;
    @media(max-width: 500px) {
        margin-left: 35%;
    }
`

const InputField = styled.input`
    margin-right: 10%;
    margin-bottom: 3%;
    @media(max-width: 500px) {
        width: 85%;
        margin-left: 7.5%;
    }
`

const StyledSub = styled.h2`
    text-align: center;
    margin-bottom: 2%;
    border-bottom: 1px solid black;
    padding-bottom: 2%;
    width: 80%;
    margin-left: 10%;
`