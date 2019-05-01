import React from 'react'
import styled from 'styled-components'
import NavBar from './NavBar'


const RegistrationForm = props => {

    return (
        <div>
            <NavBar />
            <StyledHeader>Register Here</StyledHeader>
            <StyledForm onSubmit={props.handleRegister}>
                <StyledInput
                type="text"
                name="name"
                placeholder="enter name"
                value={props.registerInfo.name}
                onChange={props.handleChanges}
                />
                <StyledInput
                type="email"
                name="email"
                placeholder="enter email address"
                value={props.registerInfo.email}
                onChange={props.handleChanges}
                />
                <StyledInput
                type="text"
                name="username"
                placeholder="enter username"
                value={props.registerInfo.username}
                onChange={props.handleChanges}
                />
                <StyledInput
                type="password"
                name="password"
                placeholder="enter password"
                value={props.registerInfo.password}
                onChange={props.handleChanges}
                />
                <StyledButton type="submit">Register</StyledButton>
             </StyledForm>
        </div>
        
    )
}

export default RegistrationForm

const StyledHeader = styled.div`
    text-align: center;
    font-size: 50px;
    font-weight: bold;
    margin-top: 5%;
    margin-bottom: 5%;
    border-bottom: 1px solid black;
    padding-bottom: 3%;
    width: 80%;
    margin-left: 10%;
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 15%;
`
const StyledInput = styled.input`
    width: 50%
    padding: .5%;
    font-size: 20px;
    margin-bottom: 1.5%;
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