import React, { useMemo, useState, useContext } from "react";
import {
  useTheme,
  ThemeProvider,
  createTheme,
  Box,
  IconButton,
  Grid,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { Switch, Route, Redirect } from "react-router-dom";
import BrightnessLowIcon from "@mui/icons-material/BrightnessLow";
import Brightness3Icon from "@mui/icons-material/Brightness3";

import HomePageLayouts from "./layouts/HomePageLayouts";
import MainLayouts from "./layouts/MainLayouts";
import BoxShowCase from "./components/BoxShowCase";
import MenuShowCases from "./components/MenuShowCases";
import OurJob from "./components/OurJob";
import Page404 from "./pages/404";
import Contacts from "./pages/Contacts";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const MyApp = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
        p: 3,
      }}
    >
      {theme.palette.mode}
      <IconButton
        //sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        //color="inherit"
      >
        {theme.palette.mode === "light" ? (
          <BrightnessLowIcon />
        ) : (
          <Brightness3Icon />
        )}
      </IconButton>
    </Box>
  );
};

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

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
        primary: {
          light: "#80bdd9",
          main: "#007ab3",
          dark: "#302a2a",
          contrastText: "#fff",
        },
        secondary: {
          light: "#000",
          main: "#000",
          dark: "#000",
          contrastText: "#000",
        },
        typography: {
          allVariants: {
            fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
            textTransform: "none",
          },

          button: {
            textTransform: "none",
          },
        },
      }),
    [mode]
  );

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
                  <MyApp />
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
