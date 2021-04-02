import React from "react";
import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';

import HeaderButton from "./HeaderButton";

export default function Header() {
    // const { totalPrice, itemsCount } = useSelector(({cart}) => {
    //     return {
    //         totalPrice: cart.totalPrice,
    //         itemsCount: cart.itemsCount
    //     }
    // })


    return (
        <header>
            <Link to="/">
                <div className="header-logo">
                    <img src="images/coffe-guys-logo.png" alt="" className="header-logo-img" />
                    <div className="header-logo-text">
                        <h2>Coffee guys</h2>
                        <p>the freshest coffee from enthusiasts</p>
                    </div>
                </div>
            </Link>
            <Link to="/cart">
                <HeaderButton />
            </Link>
        </header>
    );
}