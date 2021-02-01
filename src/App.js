import React from "react";

import Header from "./components/Header";
import Categories from "./components/Categories";

function App() {
  return (
  <div className="container">
      <Header />
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
              <div className="filters-sorting">
                  <img className="filters-sorting-triangle" src="images/triangle.svg" alt="" />
                  <p className="filters-sorting-label">Sorted by: </p>
                  <p className="filters-sorting-method">popularity</p>
                  <div className="filters-sorting-menu">
                      <div className="filters-sorting-menu-item filters-sorting-menu-item-active"><p>popularity</p></div>
                      <div className="filters-sorting-menu-item"><p>price</p></div>
                      <div className="filters-sorting-menu-item"><p>q-grade</p></div>
                  </div>
              </div>
          </nav>
          <div className="products">
              <div className="product-card">
                  <img src="images/uganda-sipi-falls-organic-025.png" alt="" className="product-card-img" />
                  <h3 className="product-card-name">Uganda Sipi Falls</h3>
                  <div className="product-card-options">
                      <ul className="product-card-options-grind">
                          <li className="active">in grains</li>
                          <li className="">pre-ground</li>
                      </ul>
                      <ul className="product-card-options-size">
                          <li className="active">200g</li>
                          <li className="">500g</li>
                          <li className="">1kg</li>
                      </ul>
                  </div>
                  <div className="product-card-bottom">
                      <h3 className="product-card-price">545 rub</h3>
                      <button className="product-card-button"><strong>+</strong> Add <div className="added_amount active">3</div></button>
                  </div>
              </div>
              <div className="product-card">
                  <img src="images/uganda-sipi-falls-organic-025.png" alt="" className="product-card-img" />
                  <h3 className="product-card-name">Uganda Sipi Falls</h3>
                  <div className="product-card-options">
                      <ul className="product-card-options-grind">
                          <li className="active">in grains</li>
                          <li className="">pre-ground</li>
                      </ul>
                      <ul className="product-card-options-size">
                          <li className="active">200g</li>
                          <li className="">500g</li>
                          <li className="">1kg</li>
                      </ul>
                  </div>
                  <div className="product-card-bottom">
                      <h3 className="product-card-price">545 rub</h3>
                      <button className="product-card-button"><strong>+</strong> Add <div className="added_amount active">3</div></button>
                  </div>
              </div>
              <div className="product-card">
                  <img src="images/uganda-sipi-falls-organic-025.png" alt="" className="product-card-img" />
                  <h3 className="product-card-name">Uganda Sipi Falls</h3>
                  <div className="product-card-options">
                      <ul className="product-card-options-grind">
                          <li className="active">in grains</li>
                          <li className="">pre-ground</li>
                      </ul>
                      <ul className="product-card-options-size">
                          <li className="active">200g</li>
                          <li className="">500g</li>
                          <li className="">1kg</li>
                      </ul>
                  </div>
                  <div className="product-card-bottom">
                      <h3 className="product-card-price">545 rub</h3>
                      <button className="product-card-button"><strong>+</strong> Add <div className="added_amount active">3</div></button>
                  </div>
              </div>
              <div className="product-card">
                  <img src="images/uganda-sipi-falls-organic-025.png" alt="" className="product-card-img" />
                  <h3 className="product-card-name">Uganda Sipi Falls</h3>
                  <div className="product-card-options">
                      <ul className="product-card-options-grind">
                          <li className="active">in grains</li>
                          <li className="">pre-ground</li>
                      </ul>
                      <ul className="product-card-options-size">
                          <li className="active">200g</li>
                          <li className="">500g</li>
                          <li className="">1kg</li>
                      </ul>
                  </div>
                  <div className="product-card-bottom">
                      <h3 className="product-card-price">545 rub</h3>
                      <button className="product-card-button"><strong>+</strong> Add <div className="added_amount active">3</div></button>
                  </div>
              </div>
              <div className="product-card">
                  <img src="images/uganda-sipi-falls-organic-025.png" alt="" className="product-card-img" />
                  <h3 className="product-card-name">Uganda Sipi Falls</h3>
                  <div className="product-card-options">
                      <ul className="product-card-options-grind">
                          <li className="active">in grains</li>
                          <li className="">pre-ground</li>
                      </ul>
                      <ul className="product-card-options-size">
                          <li className="active">200g</li>
                          <li className="">500g</li>
                          <li className="">1kg</li>
                      </ul>
                  </div>
                  <div className="product-card-bottom">
                      <h3 className="product-card-price">545 rub</h3>
                      <button className="product-card-button"><strong>+</strong> Add <div className="added_amount active">3</div></button>
                  </div>
              </div>
              <div className="product-card">
                  <img src="images/uganda-sipi-falls-organic-025.png" alt="" className="product-card-img" />
                  <h3 className="product-card-name">Uganda Sipi Falls</h3>
                  <div className="product-card-options">
                      <ul className="product-card-options-grind">
                          <li className="active">in grains</li>
                          <li className="">pre-ground</li>
                      </ul>
                      <ul className="product-card-options-size">
                          <li className="active">200g</li>
                          <li className="">500g</li>
                          <li className="">1kg</li>
                      </ul>
                  </div>
                  <div className="product-card-bottom">
                      <h3 className="product-card-price">545 rub</h3>
                      <button className="product-card-button"><strong>+</strong> Add <div className="added_amount active">3</div></button>
                  </div>
              </div>
          </div>
      </div>
  </div>
  );
}

export default App;
