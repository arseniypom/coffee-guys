import React from "react";

export default function HeaderButton({cartPrice, cartQuantity}) {
    return (
        <button className="header-cart-button">
            <p className="header-cart-button-price">{cartPrice} ₽</p>
            <img className="header-cart-button-cart_icon" src="images/shopping-cart.svg" alt="cart icon" />
            <p>{cartQuantity}</p>
        </button>
    );
}