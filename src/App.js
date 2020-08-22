import React, { useContext, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from './Checkout';
import { ProductContext } from './ProductProvider';
import { auth } from './firebase';


function App({user, username}) {
  const [{basket}, dispatch] = useContext(ProductContext)

  {/*useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{
        if(authUser){
          dispatch({
            type: "SET_USER",
            user: authUser
            })
          }
        else{
          dispatch({
            type: "SET_USER",
            user: null
        })
      }
      })
    
  })*/}


  return (
    <Router>
      <div className='App'>
      <Switch>
        <Route path="/login">
          <LogIn/>
        </Route>
        <Route path = "/signup">
          <SignUp/>
        </Route>
        <Route path="/checkout">
          <Checkout/>
        </Route>
        <Route path="/">
          <Nav/>
          <Home/>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
