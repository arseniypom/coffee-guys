import React, { useState } from "react";
import classNames from "classnames";

export default function Categories({items, handleClick}) {
    const [activeItem, setActiveItem] = useState(0)
    return (
        <div className="filters-div">
            {items &&
                items.map((item, index) => {
                return <button onClick={() => setActiveItem(index)} className={classNames(
                    "filters-button",
                    {"filters-button-active": activeItem === index}
                )} key={`${item}_${index}`}>{item}</button>
            })}
        </div>
    );
}