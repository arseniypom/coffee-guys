import React from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';

const Categories = React.memo(({items, onClickCategory, activeCategory}) => {
    // const [activeItem, setActiveItem] = React.useState(null)


    return (
        <div className="filters-div">
            <button onClick={() => onClickCategory(null)} className={classNames(
                "filters-button",
                {"filters-button-active": activeCategory === null}
            )}>All</button>
            {items &&
                items.map((item, index) => {
                return <button onClick={() => onClickCategory(index)} className={classNames(
                    "filters-button",
                    {"filters-button-active": activeCategory === index}
                )} key={`${item}_${index}`}>{item}</button>
            })}
        </div>
    );
})

Categories.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    activeCategory: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null])]),
    onClickCategory: PropTypes.func
}

Categories.defaultProps = {items: [], activeCategory: null}

export default Categories;