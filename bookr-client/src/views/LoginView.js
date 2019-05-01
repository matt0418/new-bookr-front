import React, { useReducer } from 'react'
import Login from '../components/Login'
import { connect } from 'react-redux'
import { userLogin } from '../store/actions/credentialsActions' 

const LoginView = props => {
    const [state, setState] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            username: '',
            password: ''
        }
      );


    const handleChanges = e => {
        setState({
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = e => {
        e.preventDefault()
        props.userLogin(state)
    }
    console.log(props)

    return(
        <div> 
            <Login 
            {...props} 
            loginInfo={state} 
            handleChanges={handleChanges}
            handleLogin={handleLogin}
            />
        </div>

    )
}

const mapStateToProps = state => ({
    loggedIn: state.credentialsReducer.loggedIn,
    isLoggingIn: state.credentialsReducer.isLoggingIn,
    isLoggingOut: state.credentialsReducer.isLoggingOut,
    jwtToken: state.credentialsReducer.jwtToken
})

export default connect(
    mapStateToProps,
    { userLogin }
)(LoginView)