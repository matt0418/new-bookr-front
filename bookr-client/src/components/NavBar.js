import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { userLogout } from '../store/actions/credentialsActions'

const NavBar = (props) => {

    const token = localStorage.getItem('jwt')

    return(
        <div>
            <StyledNav>
                <NavLink to="/"><StyledLink>Home</StyledLink></NavLink>
                {token ? <NavLink to="/addbook"><StyledLink>Add New Book</StyledLink></NavLink> : null}
                <NavLink to="/"><StyledLink onClick={props.userLogout}>Logout</StyledLink></NavLink>
            </StyledNav>
        </div>
    )
}


const mapStateToProps = state => ({
    loggedIn: state.credentialsReducer.loggedIn,
    isLoggingOut: state.credentialsReducer.isLoggingOut,
})

export default connect(
    mapStateToProps,
    { 
        userLogout
     }
)(NavBar)

const StyledNav = styled.nav`
    text-align: right;
    margin: 0 auto;
    background: #689775;
    padding-right: 10%;
    padding-top: 2%;
    padding-bottom: 2%;
    position: relative;
    width: 100%
    @media(max-width: 500px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-right: 0%;
    }

`

const StyledLink = styled.span`
    color: black;
    font-size: 30px;
    margin-left: 5%;
    margin-right: 2%;
    color: white;
    font-weight: bold;
    @media(max-width: 500px) {
        // font-size: 24px;
        margin-left: 0%;
    }

`