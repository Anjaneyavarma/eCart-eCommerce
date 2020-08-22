import React, {useState, useEffect, useContext} from 'react'
import logo from './images/logo_size.jpg';
import './nav.css';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { auth } from './firebase';
import {ProductContext} from './ProductProvider'
import SignUp from './SignUp';
import { Avatar } from '@material-ui/core';

function Nav() {
    const [user, setUser] = useState(null)
    const [{basket}] = useContext(ProductContext)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser)=>{
            if(authUser){
              setUser(authUser);
              
            }else{
              setUser(null);
            }
          })
          return () => {
            unsubscribe();
          };
        }, [user]);


    return (
        <div>
            <nav className='app_header'>
                <Link to='/'>
                <img
                    className='logo'
                    src='https://ecart.com/assets/images/logos/logo-ecart.svg'
                    alt='logo'
                />
                </Link>
                {/*<input
                    className='app_search'
                    type='search'
                    placeholder='Search'
                />*/}
                <div className="app_nav">
                {user?(<Link className='link_Signin' to="/">
                    <h3 onClick={()=> auth.signOut()}>Sign Out</h3>
                </Link>):(<Link className='link_Signin' to="/login">
                    <h3>Sign In</h3>
                </Link>)}
                
                {/*<Link className='link_Signin' to="/login">
                    <h3 onClick={()=> auth.signOut()}>Sign Out</h3>
            </Link>*/}
                <FavoriteBorderIcon className='wish_icon'/>
                <Link to="/checkout">
                    <ShoppingCartIcon className='cart_icon'/>
                </Link>
                <span>{basket?.length}</span>
                </div>
            </nav>
        </div>
    )
}

export default Nav
