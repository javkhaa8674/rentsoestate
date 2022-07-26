import React, { useContext, useState, useMemo } from "react";
import {
  IconButton,
  Box,
  useTheme,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4Icon";
import Brightness7Icon from "@mui/icons-material/Brightness7Icon";
import App from "./App";

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
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  );
};

const DarkMode = () => {
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
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <MyApp />
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
export default DarkMode;
