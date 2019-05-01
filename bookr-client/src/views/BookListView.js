import React, {useEffect} from 'react'
import requireAuth from '../requireAuth/requireAuth'
import LoginView from './LoginView'
import { connect } from 'react-redux'
import { userLogout } from '../store/actions/credentialsActions'
import { fetchBooks } from '../store/actions/bookActions'
import ListOfBooks from '../components/ListOfBooks'
import NavBar from '../components/NavBar'
import Jumbo from '../components/Jumbo'


const BookListView = props => {

    
    useEffect(() => {
        if (localStorage.jwt) {
            props.fetchBooks()
        }
    },[])


    if (localStorage.jwt !== undefined) {
        return(
            <div>
                <NavBar />
                <Jumbo />
                <ListOfBooks {...props}/>
            </div>
        )
    } else {
        return (
            <div>
                <LoginView {...props}/>
            </div>
        )
    }

    
}

const mapStateToProps = state => ({
    loggedIn: state.credentialsReducer.loggedIn,
    isLoggingOut: state.credentialsReducer.isLoggingOut,
    books: state.bookReducer.books
})

export default connect(
    mapStateToProps,
    { 
        userLogout,
        fetchBooks
     }
)(BookListView)

// export default requireAuth(connect(
//     mapStateToProps,
//     { userLogout }
// )(BookListView))(LoginView)