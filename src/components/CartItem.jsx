import React, {useState} from 'react';

function CartItem({ id, name, imageUrl, grind, size, totalPrice, totalCount, onRemove, onPlus, onMinus }) {
    const handleRemoveClick = () => {
        onRemove(id)
    }

    const handlePlusClick = () => {
        onPlus(id)
    }

    const handleMinusClick = () => {
        onMinus(id)
    }

    return (
        <div className="cart-item">
            <div className="cart-item-info">
                <img src={imageUrl} alt="" />
                <div className="cart-item-info-text">
                    <h3>{name}</h3>
                    <p>{grind}, {size}g</p>
                </div>
            </div>
            <div className="cart-item-actions">
                <button className="cart-item-actions-minus" name="minus" onClick={handleMinusClick}><i className="fas fa-minus"></i></button>
                <h3 className="cart-item-actions-quantity">{totalCount}</h3>
                <button className="cart-item-actions-plus" name="plus" onClick={handlePlusClick}><i className="fas fa-plus"></i></button>
                <h3 className="cart-item-actions-price">{totalPrice} rub.</h3>
                <button className="cart-delete-button" onClick={handleRemoveClick}><img src="images/cross.png" alt="cross" /></button>
            </div>
        </div>
    )
}

export default CartItem;
