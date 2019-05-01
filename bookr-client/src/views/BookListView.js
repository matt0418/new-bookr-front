import React, {useEffect} from 'react'
import requireAuth from '../requireAuth/requireAuth'
import LoginView from './LoginView'
import Logout from '../components/Logout'
import { connect } from 'react-redux'
import { userLogout } from '../store/actions/credentialsActions'
import { fetchBooks } from '../store/actions/bookActions'
import ListOfBooks from '../components/ListOfBooks'


const BookListView = props => {

    useEffect(() => {
        props.fetchBooks()
    },[])

    console.log(props.books)



    if (localStorage.jwt !== undefined) {
        return(
            <div>
                <ListOfBooks {...props}/>
                <Logout logout={props.userLogout}/>
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