import React from "react";
import { Route } from "react-router-dom";
// import axios from 'axios';
// import { useDispatch } from 'react-redux'

import { Header } from "./components";
import { Shop, Cart } from "./pages";

import decorativeImg1 from './images/decorative1.jpg';
import decorativeImg2 from './images/decorative2.jpg';
import decorativeImg3 from './images/decorative3.jpg';
import decorativeImg4 from './images/decorative4.jpg';


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
                    <Route exact path="/cart" component={Cart} />
                </div>
                <img src={decorativeImg2} className="container-wrapper-decorative-img container-wrapper-decorative-img-2" alt=" " />
                <img src={decorativeImg3} className="container-wrapper-decorative-img container-wrapper-decorative-img-3" alt=" " />
            </div>
            <img src={decorativeImg1} className="background-decorative-img background-decorative-img-1" alt=" " />
            <img src={decorativeImg4} className="background-decorative-img background-decorative-img-4" alt=" " />
        </div>
    )
}

export default App;
