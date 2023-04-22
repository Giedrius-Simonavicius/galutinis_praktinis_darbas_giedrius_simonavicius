import React from 'react';

function SingleShop({ item }) {
  return (
    <li className="singleShop">
      <div>
        <img src={item.ImageUrl} alt={item.shopName} />
        <h3>{item.shopName}</h3>
        <p>{item.description}</p>
        <p>
          {item.town}, open since {item.startYear}
        </p>
      </div>
    </li>
  );
}

export default SingleShop;
