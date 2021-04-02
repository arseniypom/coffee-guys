import React from "react";
import { useSelector } from 'react-redux';

export default function HeaderButton({cartPrice, cartQuantity}) {
    const { totalPrice, itemsCount } = useSelector(({cart}) => {
        return {
            totalPrice: cart.totalPrice,
            itemsCount: cart.itemsCount
        }
    })

    return (
        <button className="header-cart-button">
            <p className="header-cart-button-price">{totalPrice} <i className="fas fa-ruble-sign"></i></p>
            <img className="header-cart-button-cart_icon" src="images/shopping-cart.svg" alt="cart icon" />
            <p>{itemsCount}</p>
        </button>
    );
}