import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';
import React, { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51MY10mKdi3JXIzNVPdLwNjvefydp70bV6QIKLp8lo3ndFvMhh7Dl71fES2lB2SmjWFSlkznDEQiqnQzbFZCzVteW008lrbRqvv');

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/orders" element={[<Header />, <Orders />]} />

          <Route path="/checkout" element={[<Header />, <Checkout />]} />

          <Route path="/payment" element={[<Header />, 
                                        <Elements stripe={promise}> 
                                          <Payment />
                                        </Elements>]} />

          <Route path="/login" element={<Login />} />

          <Route path="/" element={[<Header />, <Home />]} />

        </Routes>
      </div>
    </Router> 
  );
}

export default App;
