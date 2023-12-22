import React, { useState } from "react";

// const Card = (id, image, name, price, info) => {
// Check this code again
const Card = ({ id, image, name, price, info , removeTour}) => {
  const [readmore, setReadmore] = useState(false);

  const desc = readmore ? info : `${info.substring(0, 200)}....`;

  const readHandler = () => {
    setReadmore(!readmore);
  };

  return (
    <>
      <div className="card">
        <img className="image" src={image} alt="" />

        <div className="tour-info">
          <div className="tour-details">
            <h4 className="tour-price">{price}</h4>
            <h4 className="tour-name">{name}</h4>
          </div>

          <div className="desc">
            {desc}
            <span className="read-more" onClick={readHandler}>
              {readmore ? `Show Less` : `Read More`}
            </span>
          </div>
        </div>

      <button className="btn-red" onClick={()=> removeTour(id)}>
        Not Interested
      </button>
      </div>

    </>
  );
};

export default Card;
