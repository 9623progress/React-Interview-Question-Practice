import React, { useState } from "react";

const Color = () => {
  const [type, setType] = useState("hex");
  const [color, setColor] = useState("#00000");
  const tempArray = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  const Color = (parameter) => {
    setColor(parameter);
  };

  const Random = (length) => {
    return Math.floor(Math.random() * length);
  };

  const GenerateHex = () => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += tempArray[Random(tempArray.length)];
    }
    setColor(hexColor);
  };

  const GenerateRGB = () => {
    let R = Random(255);
    let G = Random(255);
    let B = Random(255);
    setColor(`rgb(${R},${G},${B})`);
  };

  return (
    <div className="main" style={{ backgroundColor: color, height: "100vh" }}>
      <div className="buttonRow">
        <button
          onClick={() => {
            setType("hex");
          }}
        >
          Hex Color
        </button>
        <button
          onClick={() => {
            setType("RGB");
          }}
        >
          RGB Color
        </button>
        <button onClick={type == "hex" ? GenerateHex : GenerateRGB}>
          Generate Random Color
        </button>
      </div>

      <h2 className="colorName">{color}</h2>
    </div>
  );
};

export default Color;
