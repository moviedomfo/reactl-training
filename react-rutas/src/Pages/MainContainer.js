import React from 'react'
import {
    BrowserRouter as Router,
    HashRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Contacts from './Contacts';
import Error404 from './Error404';
import Home from './Home';
import MenuConceptos from './MenuConceptos';
import PagePrivada from './PagePrivada';
import Persons from './Persons';
import PrivateRoute from './PrivateRoute';
import Products from './Products';
import SongSearch from '../components/SongSearch';
import CrudApi from '../components/CrudApi';

const MainContainer = () => {
    return (
    <div>
 
       <h2>Hash Router</h2>
    
      <HashRouter>
         <MenuConceptos></MenuConceptos>
         <Switch>
          <PrivateRoute exact path="/dashboard" component = {PagePrivada} /> *
            
          
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
          {/* to allow http://localhost:3000/persons/olecram          */}
          <Route exact path="/persons/:username" children={<Persons/>} />        
          {/* <Route exact path="/persons/:userName" children={<Persons/>} />      */}
          <Route path="*" component={Error404} />            
      
        
        </Switch>
      </HashRouter>
  
   
      <h2>Conceptos Básicos</h2>
      <Router>
      <div>
        <MenuConceptos></MenuConceptos>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL.
            The Exact component aloss to match exactly with de rute 
            With exact. the ruter dosen´t looks the First match*/}
        <Switch>
          <PrivateRoute exact path="/dashboard" component = {PagePrivada} /> *
            
          
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
          {/* to allow http://localhost:3000/persons/olecram          */}
          <Route exact path="/persons/:username" children={<Persons/>} />        
          {/* <Route exact path="/persons/:userName" children={<Persons/>} />      */}
          <Route path="*" component={Error404} />            
      
        
        </Switch>
      </div>
    </Router>
    </div>
       
    )
}

export default MainContainer
