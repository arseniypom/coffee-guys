import React from 'react';
import classNames from "classnames";
import PropTypes from 'prop-types';

const FiltersSorting = React.memo(function FiltersSorting({sortingOptions, onClickSortBy, activeSortBy}) {

    const [visiblePopup, setVisiblePopup] = React.useState(false);
    // const [activeOption, setActiveOption] = React.useState(0);
    const activeLabel = sortingOptions.find(obj => obj.name === activeSortBy).name

    const sortRef = React.useRef();

    const togglePopupVisibility = () => setVisiblePopup((prevValue) => !prevValue);

    const handleOutsideClick = (event) => {
        const path = event.path || (event.composedPath && event.composedPath())
        if (!path.includes(sortRef.current)) {
            setVisiblePopup(false)
        }
    };

    React.useEffect(() => {
        document.body.addEventListener("click", handleOutsideClick);
    }, [])

    function onSelectItem(sortName) {
        onClickSortBy(sortName)
        setVisiblePopup(false);
    }

    return (
        <div ref={sortRef} className="filters-sorting">
            <img className="filters-sorting-triangle" src="images/triangle.svg" alt="" />
            <p className="filters-sorting-label">Sorted by: </p>
            <p className="filters-sorting-method" onClick={togglePopupVisibility}>{activeLabel}</p>
            {visiblePopup && <div className="filters-sorting-menu">
                {sortingOptions.map((item, index) => {
                    return <div onClick={() => onSelectItem(item.name)} className={classNames(
                        "filters-sorting-menu-item",
                        {"filters-sorting-menu-item-active": activeSortBy === item.name}
                    )} key={`${item.name}_${index}`}><p>{item.name}</p></div>
                })}
            </div>}
        </div>
    )
})

FiltersSorting.propTypes = {
    sortingOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
    activeSortBy: PropTypes.string.isRequired,
    onClickSortBy: PropTypes.func
}

FiltersSorting.defaultProps = {sortingOptions: [], activeSortBy: 0}

export default FiltersSorting
