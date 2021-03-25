import React from "react";
import { Route } from "react-router-dom";
import axios from 'axios';
import { useDispatch } from 'react-redux'

import { Header } from "./components";
import { Shop, CartFull } from "./pages";
import { setCoffee } from './redux/actions/coffee';


function App() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        axios.get("http://localhost:3001/coffee").then(({data}) => {
            dispatch(setCoffee(data))
        })
    }, []);

    return (
        <div className="container">
            <Header />
            <Route exact path="/" component={Shop} />
            <Route exact path="/cart" component={CartFull} />
        </div>
    )
}

export default App;
