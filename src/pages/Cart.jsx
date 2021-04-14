import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { CartItem, EmptyCart } from '../components';
import { clearCart, removeCartItem, plusCartItem, minusCartItem } from '../redux/actions/cart'

function Cart() {
    const dispatch = useDispatch();
    const { cartItems, totalPrice, itemsCount } = useSelector(({cart}) => {
        return {
            cartItems: cart.items,
            totalPrice: cart.totalPrice,
            itemsCount: cart.itemsCount,
        }
    });

    const addedCoffee = Object.keys((cartItems)).map(key => {
        return cartItems[key].items[0]
    })

    const onClearCart = () => {
        if (window.confirm('Are you sure you want to delete everything from the cart?')) {
            dispatch(clearCart())
        }
    }
    
    const onRemoveItem = (id) => {
        if (window.confirm(`Are you sure you want to delete ${cartItems[id].items[0].name} from the cart?`)) {
            dispatch(removeCartItem(id))
        }
    }

    const onPlusCartItem = (id) => {
        dispatch(plusCartItem(id))
    }

    const onMinusCartItem = (id) => {
        dispatch(minusCartItem(id))
    }
    
    return (
        <div className="content">
            {
                itemsCount ? <div className="cart">
                    <div className="cart-header">
                        <div className="cart-header-logo">
                            <img src="images/shopping-cart.png" alt="" />
                            <h1>Cart</h1>
                        </div>
                        <button onClick={onClearCart} className="cart-header-clear"><img src="images/trash.svg" alt="trash icon" className="" /> Empty cart</button>
                    </div>
                    <div className="cart-items">
                        {addedCoffee && addedCoffee.map(coffee => {
                            return <CartItem
                                id={coffee.id}
                                name={coffee.name}
                                imageUrl={coffee.imageUrl}
                                grind={coffee.grind}
                                size={coffee.size}
                                totalPrice={cartItems[coffee.id].totalPrice}
                                totalCount={cartItems[coffee.id].items.length}
                                onRemove={onRemoveItem}
                                onPlus={onPlusCartItem}
                                onMinus={onMinusCartItem}
                                key={coffee.id}
                            />
                        })}
                    </div>
                    <div className="cart-total">
                        <h3>Packs: <span className="cart-total-quantity">{itemsCount} pcs.</span></h3>
                        <h3>Total: <span className="cart-total-sum">{totalPrice} rub.</span></h3>
                    </div>
                    <div className="cart-bottom-buttons">
                        <Link to="/">
                            <button className="cart-bottom-buttons-go-back"><img src="images/go-back-arrow.svg" alt="arrow" className="go-back-arrow" /> Go back</button>
                        </Link>
                        <button className="cart-bottom-buttons-buy-now">Buy now</button>
                    </div>
                </div>
                : <EmptyCart />
            }
            
        </div>
    )
}

export default Cart
