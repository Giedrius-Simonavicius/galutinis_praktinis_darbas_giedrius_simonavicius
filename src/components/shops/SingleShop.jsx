import React from 'react';
import './singleShop.scss';
import PropTypes from 'prop-types';
function SingleShop({ item }) {
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <li>
      <div className="imgCont">
        <img src={item.ImageUrl} alt={item.shopName} />
      </div>
      <h3 className="shopName">{item.shopName}</h3>
      <div className="shopInfo">
        <p className="description">{capitalizeFirstLetter(item.description)}</p>
        <p className="town">
          Located in{' '}
          <span className="highlight">{capitalizeFirstLetter(item.town)}</span>
        </p>
        <p>
          Open since <span className="highlight">{item.startYear}</span>
        </p>
      </div>
    </li>
  );
}
SingleShop.propTypes = {
  item: PropTypes.object,
};

export default SingleShop;
