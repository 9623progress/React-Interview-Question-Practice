import React from "react";
import ManuItem from "./ManuItem";

const MenuList = ({ list = [] }) => {
  return (
    <ul>
      {list.length > 0
        ? list.map((data, index) => (
            <div key={index}>
              <ManuItem Item={data} />
            </div>
          ))
        : null}
    </ul>
  );
};

export default MenuList;
