import React, { useContext } from 'react';
import './FoodItem.css';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';

const FoodItem = ({ id, name, price, description, image }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className='food-item-image' src={image} alt={name} />
            </div>
            <div className="food-item-info">
                <div className="food-item-header">
                    <p className="food-item-name">{name}</p>
                    {!cartItems[id] ? (
                        <img
                            className='add'
                            alt='Add'
                            onClick={() => addToCart(id)}
                            src={assets.Add || 'https://via.placeholder.com/50'}
                        />
                    ) : (
                        <div className='food-item-count'>
                            <img onClick={() => removeFromCart(id)} src={assets.Remove} alt='Remove' />
                            <p>{cartItems[id]}</p>
                            <img onClick={() => addToCart(id)} src={assets.AddGreen} alt='Add' />
                        </div>
                    )}
                </div>
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
