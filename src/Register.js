import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios';
import ErrorBar from './ErrorBar.js';

function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [terms, setTerms] = useState(false)
    const [error, setError] = useState('');
    const [showError, setShowError] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [success, setSuccess] = useState(false)

    //front end password validation
    const checkPassword = () => (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{7,})/g.test(password)) ? setPasswordError('Password must be at least 8 characters long and contain at least one capital letter and one digit') : setPasswordError('')


    const register = (e) => {
        e.preventDefault();

        // sending data to database
        if (terms && passwordError === '') {

            //changing cursor style

            let data = {
                "name": name,
                //making the email lowercase so that emails are case insensitive
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

            axios("https://guarded-wildwood-26859.herokuapp.com/api/user/register", requestOptions)
                .then(response => {
                    console.log(response.data);
                    setSuccess(true);
                })
                .catch(error => {
                    setError(error.response.data.message);
                    setShowError(true);
                    setTimeout(() => {
                        setShowError(false)
                        setError('')
                    }, 5000)
                });
        }
        else if (passwordError !== '') {
            setError('Password must be at least 8 characters long and contain at least one capital letter and one digit');
            setShowError(true);
            setTimeout(() => {
                setShowError(false)
                setError('')
            }, 5000)
        }
        else {
            setError('Please read and agree to the terms and conditions')
            setShowError(true);
            setTimeout(() => {
                setShowError(false)
                setError('')
            }, 5000)
        }
    }

    return (
        <>
            <ErrorBar error={error} show={showError} />
            <div className='login--container center-container flex-container-column'>
                <h1 className='login--title'>SIGN UP</h1>
                <form className='login--form' onSubmit={e => register(e)}>

                    <div className='flex-container-column'>
                        <label htmlFor='name'>* Name: </label>
                        <input type='text' required id='name' className='login--input' onChange={e => setName(e.target.value)}></input>
                    </div>

                    <div className='flex-container-column'>
                        <label htmlFor='email'>* Email address: </label>
                        <input type='email' required id='email' className='login--input' onChange={e => setEmail(e.target.value)}></input>
                    </div>

                    <div className='flex-container-column'>
                        <label htmlFor='password'>* Password: </label>
                        <input type='password' required id='password' className='login--input' onChange={e => { setPassword(e.target.value); checkPassword() }}></input>
                        <p className='error'>{passwordError}</p>
                    </div>

                    <div className='login--input--small'>
                        <input type='checkbox' id='remember' onChange={() => (terms === false) ? setTerms(true) : setTerms(false)}></input>
                        <label margin='15px' htmlFor='remember'> * I agree to the Terms and Conditions</label>
                    </div>

                    <button type='submit' className='btn btn--secondary'>Sign up</button>
                </form>
                <p>Already have an account? Login <Link to='/login'>here</Link> </p>
                {success && <Redirect to={{
                    pathname: '/login',
                    state: {
                        preEmail: email,
                    }
                }} />}
            </div>
        </>
    );
}

export default Register;