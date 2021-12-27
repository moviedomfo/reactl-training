// import './App.css';
import { Fragment } from "react";
// import BarraNav from "./components/navbar";
import UserList from "./components/userList";
import { Provider } from "react-redux";
import store from "./store";
import Contador from "./components/contador";
import Sidebar from "./components/siderbar/sidebar"
// import {ButtonC,ButtonB} from "./components/buttons/buttonB"

import Topbar from './components/Topbar';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        
        <Topbar></Topbar>
        <div className="container">
          <Sidebar/>
         <div className="others">
            OTRA PAGINA
           </div> 
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
