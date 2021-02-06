import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ErrorBar from './ErrorBar.js'
import axios from 'axios'

function Login(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [loggedIn, setLoggedIn] = useState(false)
    const [user, setUser] = useState({})
    const [error, setError] = useState('');
    const [showError, setShowError] = useState(false);

    //check if user just registered and show email if yes
    if (props.location.state && email==='') {
            setEmail(props.location.state.preEmail)
    }

    //send login request to backend
    const login = (e) => {
        e.preventDefault()
        let data = {
            "email": email.toLowerCase(),
            "password": password
        }
        let requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(data),
        };

        axios("https://guarded-wildwood-26859.herokuapp.com/api/user/login", requestOptions)
            .then(response => {
                setUser(response.data)
                setLoggedIn(true)
            })
            .catch(error => {
                setError(error.response.data.message)
                setShowError(true);
                setEmail('');
                setPassword('');
                setTimeout(()=>{
                    setShowError(false)
                    setError('')
                },5000)
            });
    }

    return (
        <>
            <ErrorBar error={error} show={showError} />
            <div className='login--container center-container flex-container-column'>
                <h1 className='login--title'>LOG IN</h1>
                <form className='login--form' onSubmit={e => login(e)}>
                    <div className='flex-container-column'>
                        <label htmlFor='email'>Email address: </label>
                        <input type='text' id='email' className='login--input' value={email} onChange={e => setEmail(e.target.value)}></input>
                    </div>
                    <div className='flex-container-column'>
                        <label htmlFor='password'>Password: </label>
                        <input type='password' id='password' className='login--input' value={password} onChange={e => setPassword(e.target.value)}></input>
                    </div>
                    <button type='submit' className='btn btn--secondary'>Log in</button>
                </form>
                <p>Don't have an account? <Link to='/register'>Sign up</Link> now!</p>
                {loggedIn && <Redirect to={{
                    pathname: '/home',
                    state: { user: user }
                }} />}
            </div>
        </>
    );
}

export default Login;