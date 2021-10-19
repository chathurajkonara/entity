import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

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
        <Route exact path="/" component={ProductsList} />
        <Route exact path="/create" component={ServicesList} />
        <Route path="/user" component={ContatEntity} />
      </div>
    </Router>
  );
}

export default App;
