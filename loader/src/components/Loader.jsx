import { useEffect } from "react";
import { useState } from "react";

const Loader = () => {
  const [product, setProduct] = useState([]);
  const [loader, setLoader] = useState(false);
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);

  const fetchImage = async () => {
    try {
      if (count * 20 === 80) {
        setDisable(true);
      }

      setLoader(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count > 0 ? count * 20 : 0
        }`
      );

      const data = await response.json();
      if (data && data.products && data.products.length) {
        setProduct((prevProduct) => [...prevProduct, ...data.products]);
      }
      setLoader(false);

      //   console.log(data);
    } catch (error) {
      setLoader(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImage();
  }, [count]);

  const loadMore = () => {
    setCount((prevCount) => prevCount + 1);
  };
  if (loader) {
    return <p>..........</p>;
  }

  return (
    <div className="container">
      <div className="row">
        {Array.isArray(product) && product.length > 0
          ? product.map((data, index) => (
              <div className="box" key={index}>
                <img src={data.thumbnail} alt="no Image" />
                <p>{data.title}</p>
              </div>
            ))
          : null}
      </div>
      {disable ? (
        <div>
          <p>No more products</p>
          <button disabled>load more product</button>
        </div>
      ) : (
        <button
          onClick={() => {
            loadMore();
          }}
        >
          Load More Products
        </button>
      )}
    </div>
  );
};

export default Loader;
