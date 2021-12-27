// import './App.css';
import { Fragment } from "react";
// import BarraNav from "./components/navbar";
import UserList from "./components/userList";
import { Provider } from "react-redux";
import store from "./store";
import Contador from "./components/contador";
// import {ButtonC,ButtonB} from "./components/buttons/buttonB"

import Topbar from './components/Topbar';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        
        <Topbar></Topbar>
        <Contador />
        <UserList />  

        {/* <ButtonC></ButtonC>
        <ButtonB></ButtonB>  */}

      </Fragment>
    </Provider>
  );
}

export default App;
