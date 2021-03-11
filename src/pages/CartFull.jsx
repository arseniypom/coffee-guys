import React from 'react';
import { Link } from 'react-router-dom';
import { CartItem } from '../components';

function Cart() {
    return (
        <div className="content">
            <div className="cart">
                <div className="cart-header">
                    <div className="cart-header-logo">
                        <img src="images/shopping-cart.png" alt="" />
                        <h1>Cart</h1>
                    </div>
                    <button className="cart-header-clear"><img src="images/trash.svg" alt="trash icon" className="" /> Empty cart</button>
                </div>
                <div className="cart-items">
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>
                <div className="cart-total">
                    <h3>Packs: <span className="cart-total-quantity">3 pcs.</span></h3>
                    <h3>Total: <span className="cart-total-sum">900 rub.</span></h3>
                </div>
                <div className="cart-bottom-buttons">
                    <Link to="/">
                        <button className="cart-bottom-buttons-go-back"><img src="images/go-back-arrow.svg" alt="arrow" className="go-back-arrow" /> Go back</button>
                    </Link>
                    <button className="cart-bottom-buttons-buy-now">Buy now</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
