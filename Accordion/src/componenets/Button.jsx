import React, { useState } from "react";
import Comp2 from "./Comp2";
import Comp from "./Comp";

const Button = () => {
  const [flag, setFlag] = useState(false);
  const click = () => {
    if (flag) {
      setFlag(false);
    } else {
      setFlag(true);
    }
  };

  return (
    <div>
      <div className="button">
        <button onClick={click}>Change Accordian</button>
      </div>
      {flag === true ? <Comp2 /> : <Comp />}
    </div>
  );
};

export default Button;
