import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { fetchSingleBook, deleteBook } from '../store/actions/bookActions' 
import IndividualBook from '../components/IndividualBook'
import { withRouter } from 'react-router-dom'
import CommentForm from '../components/CommentForm'
import NavBar from '../components/NavBar'


const IndividualBookView = props => {
    const id = props.match.params.id
    const [count, setCount] = useState(0)

    const incrementCount = e => {
        setCount(count + 1)
    }
    
    useEffect(() => {
        props.fetchSingleBook(id)
    },[count])

    return (
        <div>
            <NavBar />
            <IndividualBook 
                {...props}
                book={props.book}
                deleteBook={props.deleteBook}
            />
            <CommentForm 
                {...props}
                bookID = {id}
                incrementCount = {incrementCount}
            />
        </div>
       
    )
}

// export default IndividualBookView

const mapStateToProps = state => ({
    book: state.bookReducer.book,
    fetchingBook: state.bookReducer.fetchingBook

})

export default withRouter(connect(
    mapStateToProps,
    {

        fetchSingleBook,
        deleteBook

    }
)(IndividualBookView))