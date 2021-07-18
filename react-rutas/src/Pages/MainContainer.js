import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Contacts from './Contacts';
import Error404 from './Error404';
import Home from './Home';
import Persons from './Persons';
import Products from './Products';

const MainContainer = () => {
    return (
        <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/persons">Persons</Link>
            </li>
            <li>
              <Link to="/sales">Sales not fount</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL.
            The Exact component aloss to match exactly with de rute 
            With exact. the ruter dosen´t looks the First match*/}
        <Switch>
          <Route exact path="/contacts">
            <Contacts />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/persons" children={<Persons/>} />            
          <Route path="*" component={Error404} />            
      
        
        </Switch>
      </div>
    </Router>
    )
}

export default MainContainer
