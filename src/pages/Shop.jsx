import React from "react";

import { Categories, FiltersSorting, CoffeeCard } from "../components";

function Shop({items}) {
  return (
    <div className="content">
        <nav className="filters">
            <Categories
                handleClick={(item) => console.log(item)}
                items={[
                    "All",
                    "Filter",
                    "Espresso",
                    "Capsules",
                    "Drip bags"
                ]}
            />
            <FiltersSorting
                sortingOptions={[
                    {name: "popularity"},
                    {name: "price"},
                    {name: "q-grade"}
                ]}
            />
        </nav>
        {items.map((item, i) => {
            return (
                <CoffeeCard
                    key={item.id}
                    {...item}
                />
            )
        })}
    </div>
  );
}

export default Shop;
