import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchSingleBook, deleteBook } from '../store/actions/bookActions' 
import IndividualBook from '../components/IndividualBook'
import { withRouter } from 'react-router-dom'


const IndividualBookView = props => {
    const id = props.match.params.id
    useEffect(() => {
        props.fetchSingleBook(id)
    }, [])

    console.log(props)

    return (
        <IndividualBook 
        {...props}
        book={props.book}
        deleteBook={props.deleteBook}
        />
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