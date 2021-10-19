import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProductsList from "./components/ProductsList";
import ServicesList from "./components/ServicesList";
import ContatEntity from "./components/ContatEntity";
import EntityHeader from "./components/EntityHeader";
import HeadBanner from "./components/HeadBanner";

function App() {
  return (
    <Router>
      <div className="mx-auto px-4">
        <HeadBanner />
        <EntityHeader />
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/">
              {" "}
              <ProductsList />{" "}
            </Route>
            <Route exact path="/create">
              {" "}
              <ServicesList />{" "}
            </Route>
            <Route path="/user">
              {" "}
              <ContatEntity />{" "}
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
