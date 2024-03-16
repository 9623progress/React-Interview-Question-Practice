import React, { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "react-icons";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Image = ({ url }) => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState([1]);
  const [current, setCurrent] = useState(0);
  const [error, setError] = useState("");

  const fetchImage = async (url) => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      if (data && Array.isArray(data.recipes)) {
        const arr = data.recipes.slice(0, 10);
        setImage(arr);
        setLoading(false);
      } else {
        setError("Invalid data format");
        setLoading(false);
      }
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url != "") {
      fetchImage(url);
    }
  }, [url]);

  const left = () => {
    console.log("left click");
    if (current === 0) {
      setCurrent(image.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  const right = () => {
    console.log("right click");
    if (current == image.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  if (loading) {
    return <div>Loadding........Please wait</div>;
  }

  if (error != "") {
    return <div>Something went wrong</div>;
  }

  return (
    <div className="container">
      <FaArrowLeft
        className="Arrowleft Arrow"
        onClick={() => {
          left();
        }}
      />
      <div className="Images">
        {image.length > 0 ? (
          image.map(
            (recipe, index) =>
              current === index && (
                <img
                  key={index}
                  src={recipe.image}
                  alt={recipe.image}
                  className={current === index ? "img-active" : "img-inactive"}
                />
              )
          )
        ) : (
          <p>No data</p>
        )}
      </div>
      <FaArrowRight
        className="ArrowRight Arrow"
        onClick={() => {
          right();
        }}
      />

      <div className="circle-container">
        {image.map((_, index) => (
          <div
            className={`circle ${
              current === index ? "circle-active" : "circle-inactive"
            }`}
            key={index}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Image;
