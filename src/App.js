import React, { useState, useEffect, useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ShowCase from "./components/ShowCase";
import MenuShowCases from "./components/MenuShowCases";
import Page404 from "./pages/404";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Management from "./pages/Management";
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";
import Sale from "./pages/Sale";
//import TestPage from "./pages/TestPage";
import HomepageLayouts from "./layouts/HomePageLayouts";
import ThemeContext from "./context/ThemeContext";
import RentsoEstate from "./pages/RentsoEstate";
import DevOrganisation from "./pages/DevOrganisation";
import Mongoloju from "./pages/Mongoloju";
import Oronsuuts from "./pages/Oronsuuts";
import Study from "./pages/Study";
import Agent from "./pages/Agent";
import FutureCustomer from "./pages/FutureCustomer";
import "./App.css";

const App = (props) => {
  const themeContext = useContext(ThemeContext);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setTheme(themeContext.theme);
    return () => {
      setTheme("light");
    };
  }, [themeContext.theme]);

  return (
    <div className={theme}>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomepageLayouts>
              <ShowCase />
              <MenuShowCases />
            </HomepageLayouts>
          )}
        />
        <Route
          path="/about"
          render={() => (
            <HomepageLayouts>
              <div>
                <About />
              </div>
            </HomepageLayouts>
          )}
        />
        <Route
          path="/buy"
          render={() => (
            <HomepageLayouts>
              <div>
                <Buy />
              </div>
            </HomepageLayouts>
          )}
        />
        <Route
          path="/contacts"
          render={() => (
            <HomepageLayouts>
              <div>
                <Contact />
              </div>
            </HomepageLayouts>
          )}
        />
        <Route
          path="/management"
          render={() => (
            <HomepageLayouts>
              <div>
                <Management />
              </div>
            </HomepageLayouts>
          )}
        />
        <Route
          path="/sale"
          render={() => (
            <HomepageLayouts>
              <div>
                <Sale />
              </div>
            </HomepageLayouts>
          )}
        />
        <Route
          path="/sell"
          render={() => (
            <HomepageLayouts>
              <div>
                <Sell />
              </div>
            </HomepageLayouts>
          )}
        />
        <Route
          exact
          path="/rentsoestate"
          render={() => (
            <HomepageLayouts>
              <RentsoEstate />
            </HomepageLayouts>
          )}
        />
        <Route
          exact
          path="/organization"
          render={() => (
            <HomepageLayouts>
              <DevOrganisation />
            </HomepageLayouts>
          )}
        />
        <Route
          exact
          path="/mongoloju"
          render={() => (
            <HomepageLayouts>
              <Mongoloju />
            </HomepageLayouts>
          )}
        />
        <Route
          exact
          path="/study"
          render={() => (
            <HomepageLayouts>
              <Study />
            </HomepageLayouts>
          )}
        />
        <Route
          exact
          path="/oronsuuts"
          render={() => (
            <HomepageLayouts>
              <Oronsuuts />
            </HomepageLayouts>
          )}
        />
        <Route
          exact
          path="/agent"
          render={() => (
            <HomepageLayouts>
              <Agent />
            </HomepageLayouts>
          )}
        />
        <Route
          exact
          path="/futurecustomer"
          render={() => (
            <HomepageLayouts>
              <FutureCustomer />
            </HomepageLayouts>
          )}
        />
        <Route
          exact
          path="/404"
          render={() => (
            <HomepageLayouts>
              <Page404 />
            </HomepageLayouts>
          )}
        />

        <Redirect to="/404" />
      </Switch>
    </div>
  );
};

export default App;
