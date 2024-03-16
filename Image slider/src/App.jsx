import React from "react";
import Image from "./components/Image";
import "./components/style.css";

const App = () => {
  return (
    <div className="app">
      <h1>Image Slider</h1>
      <Image url={"https://dummyjson.com/recipes"} />
    </div>
  );
};

export default App;
