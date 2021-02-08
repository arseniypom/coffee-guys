import React from 'react'
import { Route} from "react-router-dom"

import { Header, CartFull } from "../components";

function Cart() {
    return (
        <div className="container">
            <Header />
            <Route exact path="/cart" component={CartFull} />
        </div>
    )
}

export default Cart
