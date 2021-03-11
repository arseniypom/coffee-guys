import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function CoffeeCard({imageUrl, name, price, grinds, sizes}) {
    const grindNames = ['in grains', 'pre-ground'];
    const packSizes = [200, 500, 1000];
    const [activeType, setActiveType] = useState(grinds[0]);
    const [activeSize, setactiveSize] = useState(sizes[0]);

    const handleGrindClick = (index) => {
        setActiveType(index);
    }
    const handleSizeClick = (name) => {
        setactiveSize(name);
    }

    return (
        <div className="product-card">
            <img src={imageUrl} alt="coffee" className="product-card-img" />
            <h3 className="product-card-name">{name}</h3>
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
                                    "disabled": !grinds.includes(i)
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
                                onClick={() => handleSizeClick(packSize)}
                                className={classNames({
                                    "active": activeSize === packSize,
                                    "disabled": !sizes.includes(packSize)
                                })}>
                                {packSize}g
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="product-card-bottom">
                <h3 className="product-card-price">{price} rub</h3>
                <button className="product-card-button"><strong>+</strong> Add <div className="added_amount active">3</div></button>
            </div>
        </div>
    )
}

CoffeeCard.propTypes = {
    // imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    grinds: PropTypes.arrayOf(PropTypes.number).isRequired,
    sizes: PropTypes.arrayOf(PropTypes.number).isRequired
};
CoffeeCard.defaultProps ={
    name: "---",
    price: 0,
    grinds: [],
    sizes: []
}

export default CoffeeCard;
