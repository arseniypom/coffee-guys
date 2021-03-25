import React from "react";
import classNames from "classnames";

const Categories = React.memo(({items, handleClick}) => {
    const [activeItem, setActiveItem] = React.useState(null)

    const onSelectItem = (index) => {
        setActiveItem(index)
        handleClick(index)
    }

    return (
        <div className="filters-div">
            {items &&
                items.map((item, index) => {
                return <button onClick={() => onSelectItem(index)} className={classNames(
                    "filters-button",
                    {"filters-button-active": activeItem === index || index === 0 && activeItem === null}
                )} key={`${item}_${index}`}>{item}</button>
            })}
        </div>
    );
})

export default Categories;