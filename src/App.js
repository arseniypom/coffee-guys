import React, {useEffect, useState} from "react";
import { Route } from "react-router-dom";
import axios from 'axios';
import { connect } from 'react-redux'

import { Header } from "./components";
import { Shop, CartFull } from "./pages";
// import store from './redux/store';
import { setCoffee } from './redux/actions/coffee';


function App() {
    const [coffeeRange, setCoffeeRange] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:3000/db.json")
            // .then(({data}) => store.dispatch(setCoffee(data.coffee)))
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

export default connect()(App);
