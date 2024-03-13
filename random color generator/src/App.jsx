import React from "react";
import Color from "./component/Color";
import "./component/style.css";

const App = () => {
  return (
    <div className="container">
      <h1>Random Color Generator</h1>
      <Color />
    </div>
  );
};

export default App;
