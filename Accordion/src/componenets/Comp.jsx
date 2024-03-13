import { useState } from "react";
import data from "./data";
const Comp = () => {
  const [selected, setSelected] = useState(null);

  const Click = (id) => {
    if (selected != id) {
      setSelected(id);
    } else {
      setSelected(null);
    }
  };
  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length < 0 ? (
          <div>data not found</div>
        ) : (
          data.map((data) => (
            <div className="item" key={data.id}>
              <div className="tittle">
                <h3
                  className="hedding"
                  onClick={() => {
                    Click(data.id);
                  }}
                >
                  {data.title}
                  <span> + </span>
                </h3>

                {selected == data.id && (
                  <div className="option">
                    <div>Quantity:{data.quantity}</div>
                    <div>Price:{data.price}</div>
                    <div>DiscountPercentage: {data.discountPercentage}</div>
                    <div>DiscountedPrice:{data.discountedPrice}</div>
                    <div>Total:{data.total}</div>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Comp;
