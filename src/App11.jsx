import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// layouts
import MainLayout from "./layouts/MainLayouts";
import HomepageLayouts from "./layouts/HomePageLayouts";
// pages
import Homepage from "./pages/HomePage/index";
import "./index.scss";

const App = (props) => {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomepageLayouts>
              <Homepage />
            </HomepageLayouts>
          )}
        />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
};

export default App;
