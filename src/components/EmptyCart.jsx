import React from 'react';
import { Link } from 'react-router-dom';
import shoppingCartImage from '../images/shopping-cart-woman.png';

function EmptyCart() {
  return (
    <div className="empty-cart">
      <h1>The cart is empty 😕</h1>
      <p>Seems like you haven't added anything to your shopping cart.</p>
      <p>To order some freshly-roasted coffee from all over the world go to the main page.</p>
      <img src={shoppingCartImage} alt="shopping cart" />
      <Link to="/">
        <button className="empty-cart-go-back">Go back</button>
      </Link>
    </div>
  )
}

export default EmptyCart;