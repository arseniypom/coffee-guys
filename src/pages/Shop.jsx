import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import { Categories, FiltersSorting, CoffeeCard, CoffeeLoadingCard } from "../components";
import { fetchCoffee } from '../redux/actions/coffee';
import { setCategory, setSortBy } from '../redux/actions/filters'
import filters from "../redux/reducers/filters";

const categoryNames = [
  "Filter",
  "Espresso",
  "Capsules",
  "Drip bags"
]
const sortItems = [
  {name: "popularity"},
  {name: "price"},
  {name: "q-grade"}
]

function Shop() {
  const dispatch = useDispatch();
  const {coffeeItems, isLoaded, currentFilterCategory, currentSortBy} = useSelector((state) => {
    return {
      coffeeItems: state.coffee.items,
      isLoaded: state.coffee.isLoaded,
      currentFilterCategory: state.filters.category,
      currentSortBy: state.filters.sortBy
    }
  })
  
  React.useEffect(() => {
    dispatch(fetchCoffee(currentFilterCategory, currentSortBy))
  } , [currentFilterCategory, currentSortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index))
  }, [])

  const onSelectSortBy = React.useCallback((sortName) => {
    dispatch(setSortBy(sortName))
  }, [])

  return (
  <div className="content">
    <nav className="filters">
      <Categories
        activeCategory={currentFilterCategory}
        onClickCategory={onSelectCategory}
        items={categoryNames}
      />
      <FiltersSorting
        activeSortBy={currentSortBy}
        onClickSortBy={onSelectSortBy}
        sortingOptions={sortItems}
      />
    </nav>
    <div className="cards-wrapper">
      {  isLoaded
          ? coffeeItems.map((item, i) => { return (<CoffeeCard key={item.id} {...item}/>)})
          : Array(12).fill(0).map((_, index) => <CoffeeLoadingCard key={index} />)
      }
    </div>
  </div>
  );
}

export default Shop;
