import React, { useReducer, useEffect } from 'react'
import AddBookForm from '../components/AddBookForm'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addBook } from '../store/actions/bookActions'

const AddBookView = props => {
    const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
        {
            title: '',
            author: '',
            publisher: '',
            description: '',
            image: '',
            price: 0
        }
    );

    const handleChanges = e => {
        e.preventDefault()
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const submitBook = e => {
        e.preventDefault()
        console.log('here ia m')
        // e.preventDefault()
        // props.addBook(state)
    }

    console.log("book info", state)
    return (
        <AddBookForm
        {...props}
        newBookInfo={state}
        handleChanges={handleChanges}
        submitBook={submitBook}
         />
    )
}

const mapStateToProps = state => ({
    addingBooks: state.bookReducer.addingBooks,
    error: state.bookReducer.error
})

export default withRouter(connect(
    mapStateToProps,
    {
        addBook,
    }
)(AddBookView))
