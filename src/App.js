import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  About,
  AuthWrapper,
  Cart,
  Checkout,
  Error,
  Home,
  PrivateRoute,
  Products,
  SingleProduct,
} from "./pages";

function App() {
  return (
    <Router>
       <Switch>
        <Route exact path='/'>
            <Home/>
        </Route>
        <Route exact path='/about'>
            <About/>
        </Route>
        <Route exact path='/cart'>
            <Cart/>
        </Route>
        <Route exact path='/products'>
            <Products/>
        </Route>
        <Route exact path='/products/:id' children={<SingleProduct/>}>
            <SingleProduct/>
        </Route>
        <Route exact path='/checkout'>
            <Checkout/>
        </Route>
        <Route exact path="*">
            <Error/>
        </Route>
       </Switch>
    </Router>
  );
}

export default App;
