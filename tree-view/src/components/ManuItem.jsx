import React, { useState } from "react";
import MenuList from "./MenuList";
import { FaMinus, FaPlus } from "react-icons/fa6";

const ManuItem = ({ Item = "" }) => {
  const [childLabel, setChildLabel] = useState({});
  //   console.log(Item);
  const handelDisplayChild = (getChild) => {
    setChildLabel({
      ...childLabel,
      [getChild]: !childLabel[getChild],
    });

    // console.log(childLabel);
  };
  return (
    <li>
      <div className="label">
        <p>{Item.label}</p>
        {Item.children && (
          <p
            onClick={() => {
              handelDisplayChild(Item.label);
            }}
          >
            {childLabel[Item.label] ? <FaMinus /> : <FaPlus />}
          </p>
        )}
      </div>

      {Item &&
      Item.children &&
      Item.children.length &&
      childLabel[Item.label] > 0 ? (
        <MenuList list={Item.children} />
      ) : null}
    </li>
  );
};

export default ManuItem;
