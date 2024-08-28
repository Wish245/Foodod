import React from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';

const FoodItem = ({ id, name, price, description, image }) => {
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt={name} />
      </div>
      <div className="food-item-info">
        <p className="food-item-name">{name}</p>
        <div className="food-item-rating">
          {/* Render stars as rating images */}
          <img src={assets.RatingStar} alt="star" />
          <img src={assets.RatingStar} alt="star" />
          <img src={assets.RatingStar} alt="star" />
          <img src={assets.RatingStar} alt="star" />
          <img src={assets.RatingStar} alt="star" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
}

export default FoodItem;
