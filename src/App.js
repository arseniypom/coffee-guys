import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import axios from 'axios';

import { Header } from "./components";
import { Shop, CartFull } from "./pages";


function App() {
    const [coffeeRange, setCoffeeRange] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/db.json")
            .then(({data}) => setCoffeeRange(data.coffee))
        // fetch("http://localhost:3000/db.json")
        //     .then((resp) => console.log(resp))
        //     .then((coffeeJson) => {
        //         setCoffeeRange(coffeeJson.coffee)
        //     });
    }, []);

    return (
        <div className="container">
            <Header />
            <Route exact path="/" render={() => <Shop items={coffeeRange} />} />
            <Route exact path="/cart" component={CartFull} />
        </div>
    )
}

export default App;
