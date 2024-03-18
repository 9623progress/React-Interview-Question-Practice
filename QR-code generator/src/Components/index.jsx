import React, { useState } from "react";
import { QRCode } from "react-qr-code";

const index = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");
  const handleClick = (name) => {
    console.log(name);
    setInput(name);
  };

  const buttonClick = (name) => {
    setQrCode(name);
  };

  return (
    <div className="container">
      <div className="input">
        <input
          type="text"
          onChange={(e) => {
            handleClick(e.target.value);
          }}
          placeholder="Enter URL"
        />
        <button
          onClick={() => {
            buttonClick(input);
          }}
        >
          Submit
        </button>
      </div>
      <QRCode id="react-qr-value" value={qrCode} />
    </div>
  );
};

export default index;
