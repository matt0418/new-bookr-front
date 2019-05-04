import React, {useEffect} from 'react'
import requireAuth from '../requireAuth/requireAuth'
import LoginView from './LoginView'
import { connect } from 'react-redux'
import { userLogout } from '../store/actions/credentialsActions'
import { fetchBooks } from '../store/actions/bookActions'
import ListOfBooks from '../components/ListOfBooks'
import NavBar from '../components/NavBar'
import Jumbo from '../components/Jumbo'
import Loader from 'react-loader-spinner'
import styled from 'styled-components'

const LoaderContainer = styled.div`
    margin-top: 25%;
`

const BookListView = props => {

    const token = localStorage.getItem('jwt')
    
    useEffect(() => {
        if (localStorage.jwt) {
            props.fetchBooks()
        }
    },[token])

    if (props.isLoggingIn === true) {
        return (
            <LoaderContainer>
                <h2>You are being logged in</h2>
                <Loader
                    color="#689775"
                    height="100"
                    width="100%"
                />
            </LoaderContainer>
            
        )

    }


    if (props.isLoggingIn === false && localStorage.jwt) {
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
    isLoggingIn: state.credentialsReducer.isLoggingIn,
    isLoggingOut: state.credentialsReducer.isLoggingOut,
    books: state.bookReducer.books
})

export default connect(
    mapStateToProps,
    { 
        userLogout,
        fetchBooks,
     }
)(BookListView)