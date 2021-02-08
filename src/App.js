import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import { Home, Cart } from "./pages";

function App() {
  return (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
    </Switch>
  )
}

export default App;
