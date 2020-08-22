import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import { auth } from './firebase';
import firebase from 'firebase';
import './Signup.css';

function SignUp() {

    const history = useHistory();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(true);
    const [user, setUser] = useState(null)


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser)=>{
            if(authUser){
              console.log(authUser);
              setUser(authUser);
              
            }else{
              setUser(null);
            }
          })
          return () => {
            unsubscribe();
          };
        }, [user, username]);

    const handleSignUp = (event) => {
        event.preventDefault();
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((authUser)=>{
            history.push("/")
            return authUser.user.updateProfile({
                displayName: username
              })
              
        })
        .catch((error) => alert(error.message))
    }

    return (
        <div className='signup'>
        <Link to='/'>
            <img
                className='logo'
                src='https://ecart.com/assets/images/logos/logo-ecart.svg'
                alt='logo'
            />
        </Link>
        <div className='signup_container'>
            <h1>SignIn</h1>
            <form className='app_signup'>
            <h4>Username</h4>
            <input
            className='signup_input'
            type='text'
            value={username}
            onChange = {(e)=>setUsername(e.target.value)}
            />
            <h4>Email</h4>
            <input
            className='signup_input'
            type='text'
            value={email}
            onChange = {(e)=>setEmail(e.target.value)}
            />
            <h4>Password</h4>
            <input
            className='signup_input'
            type='password'
            value={password}
            onChange = {(e)=>setPassword(e.target.value)}
            />
            <div className='signup_checkbox'>
            <Checkbox
            checked={checked}
            onChange={() => setChecked(!checked)}
            inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <p>Accept all "Terms and conditions"</p>
            </div>
            <button onClick={handleSignUp}>SIGN UP</button>
            
            </form>
        </div>
    </div>
    )
}

export default SignUp
