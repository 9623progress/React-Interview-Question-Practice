import React from "react";
import Star from "./components/Star";
import "./components/style.css";
const App = () => {
  return (
    <div>
      <h1>Star Rating System</h1>
      <Star length={10} />
    </div>
  );
};

export default App;
