import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import "./App.css";
import ShopPage from "./pages/shop/shop.component";

const App = () => (
  <Switch>
    <Route path="/" component={Homepage} exact></Route>
    <Route path="/shop" component={ShopPage}></Route>
  </Switch>
);

export default App;
