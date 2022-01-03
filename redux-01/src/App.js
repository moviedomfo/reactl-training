import "./App.css";
import { Fragment } from "react";
// import BarraNav from "./components/navbar";
import UserList from "./components/userList";
import { Provider } from "react-redux";
import store from "./store";
import Contador from "./components/contador";
import Sidebar from "./components/siderbar/sidebar";
import Bancks from "./pages/Bancks/Bancks";
// import {ButtonC,ButtonB} from "./components/buttons/buttonB"
import { Routes, Route } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Users from "./pages/Users/Users";
import Home from "./pages/Home";
import { Balance } from "./pages/Balanse/Balance";

function App() {
  return (
    <Provider store={store}>
      <Fragment>
    
        <Topbar></Topbar>
     
        <div className="container">
        <Sidebar />
        <Routes>
         
          
              <Route exact path="/" element={<Home />}></Route> 
              <Route path="/bancks" element={<Bancks />}></Route>
              <Route path="/users" element={<Users />}/>
              <Route path="/balance" element={<Balance />}/>

            
            </Routes>
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
