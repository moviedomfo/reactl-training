// import './App.css';
import { Fragment } from "react";
import BarraNav from "./components/navbar";
import UserList from "./components/userList";
import { Provider } from "react-redux";
import store from "./store";
import Contador from "./components/contador";

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <BarraNav />
        <Contador />
        <UserList />
      </Fragment>
    </Provider>
  );
}

export default App;
