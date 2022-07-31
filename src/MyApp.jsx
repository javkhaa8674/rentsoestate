import React, { useState, useEffect, useContext } from "react";
import { ThemeProvider, createTheme, Grid, Paper } from "@mui/material";
import { indigo, grey } from "@mui/material/colors";
import { useTranslation } from "react-i18next";
import { Switch, Route, Redirect } from "react-router-dom";
import ShowCase from "./components/ShowCase";
import MenuShowCases from "./components/MenuShowCases";
import OurJob from "./components/OurJob";
import Page404 from "./pages/404";
import Contacts from "./pages/Contacts";
import HomepageLayouts from "./layouts/HomePageLayouts";
import ThemeContext from "./context/ThemeContext";
import "./MyApp.css";

const MyApp = (props) => {
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
              <OurJob />
            </HomepageLayouts>
          )}
        />
        <Route
          path="/contacts"
          render={() => (
            <HomepageLayouts>
              <div>
                <Contacts />
              </div>
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

export default MyApp;
