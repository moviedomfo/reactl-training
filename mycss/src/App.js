import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";
import GridExplicita from "./GridExplicita";
import GridExplicita2 from "./GridExplicita2";
import GridNombres from "./GridNombres";

function App() {
  return (
  <Fragment>
    {/* <GridExplicita></GridExplicita> */}
    {/* <GridExplicita2></GridExplicita2> */}
    <GridNombres></GridNombres>
  </Fragment>
  );
}

export default App;
