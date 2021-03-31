import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import { Categories, FiltersSorting, CoffeeCard } from "../components";
import { fetchCoffee } from '../redux/actions/coffee';
import { setCategory } from '../redux/actions/filters'
import filters from "../redux/reducers/filters";

const categoryNames = [
  "All",
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
  const {coffeeItems, currentFilterCategory, currentSortBy} = useSelector((state) => {
    return {
      coffeeItems: state.coffee.items,
      currentFilterCategory: state.filters.category,
      currentSortBy: state.filters.sortBy
    }
  })
  
  React.useEffect(() => {

    dispatch(fetchCoffee())
  } , []);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index))
  }, [])

  return (
  <div className="content">
    <nav className="filters">
      <Categories
        handleClick={onSelectCategory}
        items={categoryNames}
      />
      <FiltersSorting
        sortingOptions={sortItems}
      />
    </nav>
    {  coffeeItems && coffeeItems.map((item, i) => {
        return (
          <CoffeeCard
            key={item.id}
            {...item}
          />
        )
      })
    }
  </div>
  );
}

export default Shop;
