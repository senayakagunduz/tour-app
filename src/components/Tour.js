import React, { useState } from "react";

function Tour({ id, name, image, info, price, removeTour }) {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="container mx-auto" style={{ width: "800px" }}>
      <div className="card">
        <img src={image} alt={name} />
        <div className=" row card-body">
          <div className="col md-9">
            <h4>{name}</h4>
          </div>
          <div className="col-md-3">
            <h4 className="text-end text-info">${price}</h4>
          </div>

          <p className="cart-text">
            {readMore ? info : `${info.substring(0, 200)}...`}
            <button
              className="btn btn-link"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "showless" : "readMore"}
            </button>
          </p>
        </div>
        <div className="btn mx-auto">
          <button
            className="btn btn-outline-danger"
            onClick={() => {
              removeTour(id);
            }}
          >
            not interested
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tour;
