import { useState } from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ length }) => {
  const [click, setClick] = useState(-1);
  const [hover, setHover] = useState(-1);
  const HandleClick = (index) => {
    setClick(index);
  };

  const mouseMove = (index) => {
    setHover(index);
    console.log(index);
  };

  const mouseLeave = () => {
    setHover(click);
  };

  return (
    <div className="center">
      {[...Array(length)].map((_, index) => (
        <FaStar
          key={index}
          className={index <= hover || index <= click ? "active" : "inactive"}
          onClick={() => {
            HandleClick(index);
          }}
          onMouseMove={() => {
            mouseMove(index);
          }}
          onMouseLeave={mouseLeave}
        />
      ))}
    </div>
  );
};

export default Star;
