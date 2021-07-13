import React from "react";

const GridExplicita2 = () => {
  return (
    <div className="App-header">
      <h1>Posicionamiento con Grid Lines</h1>
        <section className="container grid-grid-explicita2">

          <div className="col one">One</div>
          <div className="col two">
            <h2>Two</h2>
          </div>
          <div className="col three">
            <h3>Tree</h3>
          </div>
          <div className="col four">Four</div>
          <div className="col five">Five</div>
          <div className="col  six">Six</div>
          <div className="col  six">Seven</div>

          <div className="col ocho ">
            The text will be displayed exactly as written in the HTML source
            code. Text in a pre element is displayed in a fixed-width font, and
            it preserves both spaces and line breaks
          </div>
          <div className="col  ">9</div>
          <div className="col  ">10</div>
          <div className="col  ">11</div>
          <div className="col  ">12</div>
          <div className="col  ">13</div>
          <div className="col  ">14</div>
          <div className="col  ">15</div>
          <div className="col  ">16</div>
          <div className="col  ">17</div><div className="col  ">18</div>
        </section>
      
    </div>
  );
};

export default GridExplicita2;
