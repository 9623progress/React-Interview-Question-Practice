import { useState } from "react";
import data from "./data";
const Comp2 = () => {
  const [selected, setSelected] = useState([]);

  const Click = (id) => {
    const inc = selected.includes(id);
    console.log(inc);
    if (inc) {
      const newdata = selected.filter((items) => items !== id);

      setSelected(newdata);
    } else {
      setSelected([...selected, id]);
      // console.log(selected);
    }
  };

  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length === 0 ? (
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

                {selected.length > 0 &&
                  selected.map(
                    (e) =>
                      data.id === e && (
                        <div className="option" key={e}>
                          <div>Quantity:{data.quantity}</div>
                          <div>Price:{data.price}</div>
                          <div>
                            DiscountPercentage: {data.discountPercentage}
                          </div>
                          <div>DiscountedPrice:{data.discountedPrice}</div>
                          <div>Total:{data.total}</div>
                        </div>
                      )
                  )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Comp2;
