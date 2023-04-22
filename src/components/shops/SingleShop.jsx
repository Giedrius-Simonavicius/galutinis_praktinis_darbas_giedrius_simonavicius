import React from 'react';
import './singleShop.scss';

function SingleShop({ item }) {
  return (
    <li>
      <div className="imgCont">
        <img src={item.ImageUrl} alt={item.shopName} />
      </div>
      <h3 className="shopName">{item.shopName}</h3>
      <div className="shopInfo">
        <p className="description">{item.description}</p>
        <p className="town">
          Located in <span className="highlight">{item.town}</span>
        </p>
        <p>
          Open since <span className="highlight">{item.startYear}</span>
        </p>
      </div>
    </li>
  );
}

export default SingleShop;
