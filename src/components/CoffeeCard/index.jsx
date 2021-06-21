import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function CoffeeCard({id, imageUrl, name, price, grinds, sizes, onAddToCart, addedCount}) {
    const grindNames = ['in grains', 'pre-ground'];
    const packSizes = [200, 500, 1000];
    const [activeType, setActiveType] = React.useState(0);
    const [activeSize, setactiveSize] = React.useState(0);

    const handleGrindClick = (index) => {
        setActiveType(index);
    }
    const handleSizeClick = (index) => {
        setactiveSize(index);
    }
    const onAddCoffee = () => {
        const coffeeObj = {
            id,
            name,
            imageUrl,
            price,
            grind: grindNames[activeType],
            size: packSizes[activeSize],
        }
        onAddToCart(coffeeObj)
    }


    return (
        <div className="product-card">
            <div className="product-card-image-container">
                <img src={imageUrl} alt="coffee" />
            </div>
            <h3 className="product-card-name">{name}</h3>
            { (() => {
                    if (grinds.length) {
                        return (
                        <div className="product-card-options">
                            <ul className="product-card-options-grind">
                                {grindNames.map((grindName, i) => {
                                    return (
                                        <li 
                                            key={grindName}
                                            value="grind-li"
                                            onClick={() => handleGrindClick(i)}
                                            className={classNames({
                                                "active": activeType === i,
                                                "disabled": !grinds.includes(0)
                                            })}>
                                            {grindName}
                                        </li>
                                    )
                                })}
                            </ul>
                            <ul className="product-card-options-size">
                                {packSizes.map((packSize, i) => {
                                    return (
                                        <li 
                                            key={packSize}
                                            value="size-li"
                                            onClick={() => handleSizeClick(i)}
                                            className={classNames({
                                                "active": activeSize === i,
                                                "disabled": !sizes.includes(packSize)
                                            })}>
                                            {packSize}g
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        )
                    }
                }
                )()
            }
            <div className="product-card-bottom">
                <h3 className="product-card-price">{price} rub</h3>
                <button onClick={onAddCoffee} className="product-card-button">
                    <strong>+</strong> Add {addedCount && <div className="added_amount active">{addedCount}</div>}
                </button>
            </div>
        </div>
    )
}

CoffeeCard.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    grinds: PropTypes.arrayOf(PropTypes.number).isRequired,
    sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
    onAddToCart: PropTypes.func,
    addedCount: PropTypes.number,
}

CoffeeCard.defaultProps = {
    name: "---",
    price: 0,
    grinds: [],
    sizes: [],
}

export default CoffeeCard;
