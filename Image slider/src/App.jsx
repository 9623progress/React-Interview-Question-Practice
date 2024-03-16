import React from "react";
import Image from "./components/Image";
import "./components/style.css";

const App = () => {
  return (
    <div className="app">
      <h1>Image Slider</h1>
      <div className="box">
        <Image url={"https://dummyjson.com/recipes"} />
      </div>
    </div>
  );
};

export default App;
