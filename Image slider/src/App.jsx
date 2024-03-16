import React from "react";
import Image from "./components/Image";
import "./components/style.css";

const App = () => {
  return (
    <div className="app">
      <Image url={"https://dummyjson.com/recipes"} />
    </div>
  );
};

export default App;
