import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/auth/login';
import NuevaCuenta from './components/auth/nuevaCuenta'
import Proyectos from './components/projects/Projects'

function App() {
  return (

   

    <Router>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
            <Route exact path="/proyectos" component={Proyectos} />
        </Switch>
        </Router>
  );
}

export default App;
