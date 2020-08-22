import React, {useState} from 'react';
import './LogIn.css';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { auth } from './firebase';
import firebase from 'firebase';


function LogIn({username}) {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const handleSignIn = (event) => {
        event.preventDefault();
        auth
        .signInWithEmailAndPassword(email, password)
        .then((auth)=>{
            history.push("/");
        })
        .catch((error) => alert(error.message))
    }

    const handleRegister = (event) => {
        event.preventDefault();
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth)=>{
            history.push("/");
        })
        .catch((error) => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className='logo'
                    src='https://ecart.com/assets/images/logos/logo-ecart.svg'
                    alt='logo'
                />
            </Link>
            <div className='login_container'>
                <h1>SignIn</h1>
                <form className='app_login'>
                <h4>Email</h4>
                <input
                className='login_input'
                type='text'
                value={email}
                onChange = {(e)=>setEmail(e.target.value)}
                />
                <h4>Password</h4>
                <input
                className='login_input'
                type='password'
                value={password}
                onChange = {(e)=>setPassword(e.target.value)}
                />
                <a href=''><p>Forgot Password?</p></a>
                <button onClick={handleSignIn}>SIGN IN</button>
                <Link to ="/signup">
                    <p className='login_p'>New User?</p>
                    <button>Create an Account</button>
                </Link>
                    <p>{username}</p>
                </form>
            </div>
        </div>
    )
}

export default LogIn
