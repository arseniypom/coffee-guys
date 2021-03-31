import React, {useState} from 'react';
import ContentLoader from "react-content-loader"
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
        <ContentLoader 
        speed={2}
        width={207}
        height={415}
        viewBox="0 0 207 415"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="20" y="20" rx="0" ry="0" width="170" height="170" /> 
        <rect x="0" y="223" rx="4" ry="4" width="207" height="22" /> 
        <rect x="17" y="264" rx="10" ry="10" width="178" height="90" /> 
        <rect x="0" y="375" rx="4" ry="4" width="84" height="25" /> 
        <rect x="113" y="363" rx="20" ry="20" width="89" height="45" />
      </ContentLoader>
    )

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
