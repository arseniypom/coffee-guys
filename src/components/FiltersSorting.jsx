import React from 'react';
import classNames from "classnames";

const FiltersSorting = React.memo(function FiltersSorting({sortingOptions}) {

    const [visiblePopup, setVisiblePopup] = React.useState(false);
    const [activeOption, setActiveOption] = React.useState(0);
    const activeLabel = sortingOptions[activeOption].name;

    const sortRef = React.useRef();

    const togglePopupVisibility = () => setVisiblePopup((prevValue) => !prevValue);

    const handleOutsideClick = (event) => {
        if (!event.path.includes(sortRef.current)) {
            setVisiblePopup(false)
        }
    };

    React.useEffect(() => {
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
                    )} key={`${sortingOption.name}_${index}`}><p>{sortingOption.name}</p></div>
                })}
            </div>}
        </div>
    )
})

export default FiltersSorting
