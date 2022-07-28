import React, { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  Typography,
  Box,
  Button,
  Grid,
  Paper,
} from "@mui/material";
import { indigo, grey } from "@mui/material/colors";
import { useTranslation } from "react-i18next";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePageLayouts from "./layouts/HomePageLayouts";
import MainLayouts from "./layouts/MainLayouts";
import BoxShowCase from "./components/BoxShowCase";
import MenuShowCases from "./components/MenuShowCases";
import OurJob from "./components/OurJob";
import Page404 from "./pages/404";
import Contacts from "./pages/Contacts";
import HomepageLayouts from "./layouts/HomePageLayouts";
import MediaCard from "./components/Card";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      ...grey,
      ...(mode === "dark" && {
        main: indigo[900],
      }),
    },
    ...(mode === "dark" && {
      background: {
        default: grey[100],
        paper: grey[900],
      },
    }),
    text: {
      ...(mode === "light"
        ? {
            primary: indigo[500],
            secondary: grey[50],
          }
        : {
            primary: "#fff",
            secondary: grey[500],
          }),
    },
  },
});

const MyApp = (props) => {
  const [mode, setMode] = useState("light");
  const { t, i18n } = useTranslation();

  const handleMode = () => {
    mode === "dark" ? setMode("light") : setMode("dark");
  };

  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  };
  const theme = createTheme(getDesignTokens(mode));

  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomepageLayouts
              handleClick={handleClick}
              handleMode={handleMode}
              t={t}
              mode={mode}
            >
              <Paper
                maxWidth="xl"
                sx={{
                  bgcolor: "background.default",
                  color: "text.primary",
                }}
                handleClick={handleClick}
                handleMode={handleMode}
                t={t}
              >
                <Grid maxWidth="xl" display="flex" direction="column">
                  <BoxShowCase t={t} />
                  <MenuShowCases t={t} />
                  <OurJob t={t} />
                </Grid>
              </Paper>
            </HomepageLayouts>
          )}
        />
      </Switch>
    </ThemeProvider>
  );
};

export default MyApp;
