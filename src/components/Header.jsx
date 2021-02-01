import React from "react";
import HeaderButton from "./HeaderButton";

export default function Header() {
    return (
        <header>
        <div className="header-logo">
            <img src="images/coffe-guys-logo.png" alt="" className="header-logo-img" />
            <div className="header-logo-text">
                <h2>Coffee guys</h2>
                <p>the freshest coffee from enthusiasts</p>
            </div>
        </div>
        <HeaderButton 
            cartPrice="545"
            cartQuantity="1"
        />
    </header>
    );
}