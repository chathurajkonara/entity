import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";

import EntityHeader from "./EntityHeader";
import HeadBanner from "./HeadBanner";
import NavBar from "./Navbar";
import ProductsList from "./ProductsList";
import ServicesList from "./ServicesList";
import ContatEntity from "./ContatEntity";
import EntityName from "./EntityName";

const RouteComponents = () => {
  const [entity, setEntity] = useState({});

  useEffect(() => {
    setEntity({ name: "Game Kade", ratings: 4.5, ratingsCount: 124 });
  }, []);

  return (
    <Router base="/">
      <div className="mx-auto px-4">
        <HeadBanner />
        <div className="sticky top-0 sm:hidden z-20 bg-gray-200 bg-opacity-80">
          <EntityName name={entity.name} />
        </div>
        {entity.ratings && (
          <EntityHeader
            ratings={entity.ratings}
            ratingsCount={entity.ratingsCount}
            name={entity.name}
          />
        )}

        <NavBar />
        <div>
          <Switch>
            <Route exact path="/">
              {" "}
              <ProductsList />{" "}
            </Route>
            <Route path="/services">
              {" "}
              <ServicesList />{" "}
            </Route>
            <Route path="/contact">
              {" "}
              <ContatEntity />{" "}
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default RouteComponents;
