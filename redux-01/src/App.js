  import "./App.css";
import { Fragment } from "react";
// import BarraNav from "./components/navbar";
import UserList from "./components/userList";
import { Provider } from "react-redux";
import store from "./store";
import Contador from "./components/contador";
import Sidebar from "./components/siderbar/sidebar";
import Bancks from "./pages/Bancks";
// import {ButtonC,ButtonB} from "./components/buttons/buttonB"
import { HashRouter, NavLink, Route, Switch } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Topbar></Topbar>
        <div className="container">
          <Sidebar />
          <Switch>
            <Route path= '/bancks'>
              <Bancks></Bancks>
            </Route>
            <Route path= '/users'>
              <UserList></UserList>
            </Route>
          </Switch>
            
          
        </div>
        {/* <Contador />
        <UserList />   */}

        {/* <ButtonC></ButtonC>
        <ButtonB></ButtonB>  */}
      </Fragment>
    </Provider>
  );
}

export default App;
