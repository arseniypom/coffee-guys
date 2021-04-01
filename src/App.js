import React from "react";
import { Route } from "react-router-dom";
// import axios from 'axios';
// import { useDispatch } from 'react-redux'

import { Header } from "./components";
import { Shop, CartFull } from "./pages";


function App() {
    // const dispatch = useDispatch();

    // React.useEffect(() => {
    //     dispatch(fetchCoffee())
    // }, []);

    return (
        <div className="background">
            <div className="container">
                <Header />
                <Route exact path="/" component={Shop} />
                <Route exact path="/cart" component={CartFull} />
            </div>
        </div>
    )
}

export default App;
