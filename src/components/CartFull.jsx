import React from 'react'

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
                    <div className="cart-item">
                        <div className="cart-item-info">
                            <img src="images/uganda-sipi-falls-organic-025.png" alt="" />
                            <div className="cart-item-info-text">
                                <h3>Uganda Sipi Falls</h3>
                                <p>in grains, 200g</p>
                            </div>
                        </div>
                        <div className="cart-item-actions">
                            <button className="cart-item-actions-minus"><i className="fas fa-minus"></i></button>
                            <h3 className="cart-item-actions-quantity">3</h3>
                            <button className="cart-item-actions-plus"><i className="fas fa-plus"></i></button>
                            <h3 className="cart-item-actions-price">545</h3>
                            <button className="cart-delete-button"><img src="images/cross.png" alt="cross" /></button>
                        </div>
                    </div>
                </div>
                <div className="cart-total">
                    <h3>Packs: <span className="cart-total-quantity">3 pcs.</span></h3>
                    <h3>Total: <span className="cart-total-sum">900 rub.</span></h3>
                </div>
                <div className="cart-bottom-buttons">
                    <button className="cart-bottom-buttons-go-back"><img src="images/go-back-arrow.svg" alt="arrow" className="go-back-arrow" /> Go back</button>
                    <button className="cart-bottom-buttons-buy-now">Buy now</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
