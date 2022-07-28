import React, { useMemo, useState } from "react";
import { ThemeProvider, createTheme, useTheme, Grid } from "@mui/material";
import { amber, deepOrange, grey } from "@mui/material/colors";
import { useTranslation } from "react-i18next";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePageLayouts from "./layouts/HomePageLayouts";
import MainLayouts from "./layouts/MainLayouts";
import BoxShowCase from "./components/BoxShowCase";
import MenuShowCases from "./components/MenuShowCases";
import OurJob from "./components/OurJob";
import Page404 from "./pages/404";
import Contacts from "./pages/Contacts";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      ...amber,
      ...(mode === "dark" && {
        main: amber[300],
      }),
    },
    ...(mode === "dark" && {
      background: {
        default: deepOrange[900],
        paper: deepOrange[900],
      },
    }),
    text: {
      ...(mode === "light"
        ? {
            primary: grey[900],
            secondary: grey[800],
          }
        : {
            primary: "#fff",
            secondary: grey[500],
          }),
    },
  },
});

const App = () => {
  const { t, i18n } = useTranslation();
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = getDesignTokens(mode);

  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme} className="Container">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <HomePageLayouts
                handleClick={handleClick}
                t={t}
                colorMode={colorMode}
              >
                <Grid maxWidth="xl" display="flex" direction="column">
                  <BoxShowCase t={t} />
                  <MenuShowCases t={t} />
                  <OurJob t={t} />
                </Grid>
              </HomePageLayouts>
            )}
          />
          <Route
            path="/contacts"
            render={() => (
              <HomePageLayouts handleClick={handleClick} t={t}>
                <Contacts />
              </HomePageLayouts>
            )}
          />
          <Route
            exact
            path="/404"
            render={() => (
              <MainLayouts handleClick={handleClick} t={t}>
                <Page404 />
              </MainLayouts>
            )}
          />
          <Redirect to="/404" />
        </Switch>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
export default App;
