import React,{ useEffect } from 'react'

const Login = props => {

    console.log(props)

    const path = props.location.search
    return (
        <div>
            <form onSubmit={props.handleLogin}>
                <input
                type="text"
                placeholder="username" 
                name='username' 
                value={props.loginInfo.username} 
                onChange={props.handleChanges}/>
                <input 
                type="password"
                placeholder="password"
                name='password' 
                value={props.loginInfo.password} 
                onChange={props.handleChanges}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Login