import {React, useState, useEffect, useRef} from 'react';
import classNames from "classnames";

function FiltersSorting({sortingOptions}) {

    const [visiblePopup, setVisiblePopup] = useState(false);
    const [activeOption, setActiveOption] = useState(0);
    const activeLabel = sortingOptions[activeOption];

    const sortRef = useRef();

    const togglePopupVisibility = () => setVisiblePopup((prevValue) => !prevValue);

    const handleOutsideClick = (event) => {
        if (!event.path.includes(sortRef.current)) {
            setVisiblePopup(false)
        }
    };

    useEffect(() => {
        document.body.addEventListener("click", handleOutsideClick);
    }, [])

    function onSelectItem(item) {
        setActiveOption(item);
        setVisiblePopup(false);
    }

    return (
        <div ref={sortRef} className="filters-sorting">
            <img className="filters-sorting-triangle" src="images/triangle.svg" alt="" />
            <p className="filters-sorting-label">Sorted by: </p>
            <p className="filters-sorting-method" onClick={togglePopupVisibility}>{activeLabel}</p>
            {visiblePopup && <div className="filters-sorting-menu">
                {sortingOptions.map((sortingOption, index) => {
                    return <div onClick={() => onSelectItem(index)} className={classNames(
                        "filters-sorting-menu-item",
                        {"filters-sorting-menu-item-active": activeOption === index}
                    )} key={`${sortingOption}_${index}`}><p>{sortingOption}</p></div>
                })}
            </div>}
        </div>
    )
}

export default FiltersSorting
