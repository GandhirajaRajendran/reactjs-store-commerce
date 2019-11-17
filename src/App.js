import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Default from './components/Default';
import Details from './components/Details';
import Productlist from './components/Productlist';

function App() {
  return (
    <React.Fragment>
      <h3> hello from app</h3>
      <Navbar></Navbar>

      <Switch>
        <Route exact path="/">
          <Productlist></Productlist>
        </Route>

        <Route exact path="/details"> <Details></Details> </Route>

        <Route exact path="/cart"> <Cart></Cart> </Route>

        <Route component={Default}></Route>

      </Switch>Í


    </React.Fragment>





  );
}

export default App;
