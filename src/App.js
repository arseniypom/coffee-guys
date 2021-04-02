import React from "react";
import { Route } from "react-router-dom";
// import axios from 'axios';
// import { useDispatch } from 'react-redux'

import { Header } from "./components";
import { Shop, CartFull } from "./pages";

import decorativeImg1 from './images/decorative1.jpg';
import decorativeImg2 from './images/decorative2.jpg';
import decorativeImg3 from './images/decorative3.jpg';
import decorativeImg4 from './images/decorative4.jpg';
import coffeeBeans1 from './images/coffee_bean1.png';
import coffeeBeans2 from './images/coffee_bean2.png';
import coffeeBeans3 from './images/coffee_bean3.png';
import coffeeBeans4 from './images/coffee_bean4.png';
import coffeeBeans5 from './images/coffee_bean5.png';


function App() {
    // const dispatch = useDispatch();

    // React.useEffect(() => {
    //     dispatch(fetchCoffee())
    // }, []);

    return (
        <div className="background">
            <div className="container-wrapper">
                <div className="container">
                    <Header />
                    <Route exact path="/" component={Shop} />
                    <Route exact path="/cart" component={CartFull} />
                </div>
                <img src={decorativeImg2} className="container-wrapper-decorative-img container-wrapper-decorative-img-2" />
                <img src={decorativeImg3} className="container-wrapper-decorative-img container-wrapper-decorative-img-3" />
            </div>
            <img src={decorativeImg1} className="background-decorative-img background-decorative-img-1" />
            <img src={decorativeImg4} className="background-decorative-img background-decorative-img-4" />
        </div>
    )
}

export default App;
