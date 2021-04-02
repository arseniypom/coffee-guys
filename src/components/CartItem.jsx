import React, {useState} from 'react';

function CartItem({coffeeItem, }) {
    const [packsAmount, setPacksAmount] = useState(1);

    function handleClick(event) {
        const {name} = event.target;
        name === "minus" ? setPacksAmount((prevValue) => --prevValue) : setPacksAmount((prevValue) => ++prevValue)
    }

    return (
        <div className="cart-item">
            <div className="cart-item-info">
                <img src="/images/yellow_pack.png" alt="" />
                <div className="cart-item-info-text">
                    <h3>Uganda Sipi Falls</h3>
                    <p>in grains, 200g</p>
                </div>
            </div>
            <div className="cart-item-actions">
                <button className="cart-item-actions-minus" name="minus" onClick={handleClick}><i className="fas fa-minus"></i></button>
                <h3 className="cart-item-actions-quantity">{packsAmount}</h3>
                <button className="cart-item-actions-plus" name="plus" onClick={handleClick}><i className="fas fa-plus"></i></button>
                <h3 className="cart-item-actions-price">545</h3>
                <button className="cart-delete-button"><img src="images/cross.png" alt="cross" /></button>
            </div>
        </div>
    )
}

export default CartItem;
