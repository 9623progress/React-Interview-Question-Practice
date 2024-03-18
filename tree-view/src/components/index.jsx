import React from "react";
import list from "./data";
import MenuList from "./MenuList";

const index = () => {
  return (
    <div className="container">
      <h2>Menu list</h2>
      <MenuList list={list} />
    </div>
  );
};

export default index;
