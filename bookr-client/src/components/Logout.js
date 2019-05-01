import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { userLogout } from '../store/actions/credentialsActions'

const Logout = props => {
    console.log(props)
    return (
        <div onClick={props.logout}>
            Logout
        </div>
    )
}

// const mapStateToProps = state => ({
//     loggedIn: state.credentialsReducer.loggedIn,
//     isLoggingOut: state.credentialsReducer.isLoggingOut
// })

// export default connect(
//     mapStateToProps,
//     { userLogout }
// )(Logout)
export default Logout