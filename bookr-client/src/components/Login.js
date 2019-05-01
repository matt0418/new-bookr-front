import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Login = props => {

    return (
        <div>
            <TopSpace>.</TopSpace>
            <MainHeading>Bookr Login</MainHeading>
            <StyledForm onSubmit={props.handleLogin}>
                <StyledInput
                type="text"
                placeholder="username" 
                name='username' 
                value={props.loginInfo.username} 
                onChange={props.handleChanges}/>
                <StyledInput 
                type="password"
                placeholder="password"
                name='password' 
                value={props.loginInfo.password} 
                onChange={props.handleChanges}/>
                <StyledButton type='submit'>submit</StyledButton>
            </StyledForm>
            <div>
                <h3>First Time Here?</h3>
                <Link to="/register">Click here to register</Link>
            </div>
        </div>
    )
}

export default Login

const TopSpace = styled.div`
    background: #689775;
    width: 100%;
    display: block;
    color: #689775;
    padding-bottom: 5%;
`

const MainHeading = styled.h1`
    text-align: center;
    font-size: 75px;
    font-weight: bold;
    margin-top: 5%;
    margin-bottom: 3%;
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledInput = styled.input`
    width: 25%;
    padding: .5%;
    font-size: 24px;
    margin-bottom: 2%;
`

const StyledButton = styled.button`
    width: 200px;
    padding-top: .5%;
    padding-bottom: .5%;
    border-radius: 10px;
    background: #907163;
    color: white;
    font-weight: bold;
`