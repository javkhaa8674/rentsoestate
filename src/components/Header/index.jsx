import React, { useState, useContext, useEffect } from "react";
import Media from "react-media";
import ReactSwitch from "react-switch";
import { Link, NavLink } from "react-router-dom";
import {
  Box,
  IconButton,
  AppBar,
  Typography,
  Toolbar,
  Menu,
  MenuItem,
  Avatar,
  Button,
  Grid,
} from "@mui/material";
import ExpandModeIcon from "@mui/icons-material/ExpandMore";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import MenuIcon from "@mui/icons-material/Menu";

import Logo from "./../../assets/logo.png";
import css from "./style.module.css";
import ThemeContext from "./../../context/ThemeContext";

const Header = (props) => {
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState(false);
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    setTheme(themeContext.theme);
    return () => {
      setTheme("light");
    };
  }, [themeContext.theme]);

  const handleLanguage = () => {
    setLang(!lang);
    lang
      ? themeContext.handleLanguage("en")
      : themeContext.handleLanguage("mn");
  };

  return (
    // <nav className={theme === "light" ? css.light : css.dark}>

    <nav className={theme === "light" ? css.light : css.dark}>
      <h1 className={css.logoContent}>
        <img src={Logo} alt="logo" className={css.logo} />
        <span className={css.primaryText}>
          {themeContext.t("CompanyName.2")}
        </span>
        {themeContext.t("CompanyName.3")}
      </h1>
      <ul>
        <li>
          <a href="#" className={css.wrap} onClick={handleLanguage}>
            {lang ? "English" : "Монгол"}
          </a>
        </li>
        <li>
          <a href="#" className={css.wrap} onClick={themeContext.toggleTheme}>
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </a>
        </li>
      </ul>
    </nav>

    // <AppBar color="inherit">
    //   <Container>
    //     <Toolbar disableGutters sx={{ height: "100px" }}>
    //       <Link to="/">
    //         <Box display="flex" alignItems="center">
    //           <Avatar
    //             src={Logo}
    //             alt="RentsoEstate Logo"
    //             sx={{
    //               width: 60,
    //               height: 60,
    //             }}
    //           />
    //           <Typography
    //             variant="h6"
    //             noWrap
    //             color="text.primary"
    //             sx={{
    //               marginRight: "0.5rem",
    //               textDecoration: "none",
    //             }}
    //           >
    //             {props.t("CompanyName.2")}
    //           </Typography>
    //           <Typography
    //             variant="h6"
    //             noWrap
    //             sx={{
    //               color: "text.primary",
    //               textDecoration: "none",
    //             }}
    //           >
    //             {props.t("CompanyName.3")}
    //           </Typography>
    //         </Box>
    //       </Link>
    //       <Box
    //         sx={{
    //           flexGrow: 1,
    //           display: { xs: "flex", md: "none" },
    //           justifyContent: "flex-end",
    //         }}
    //       >
    //         <IconButton
    //           size="large"
    //           aria-label="account of current user"
    //           aria-controls="menu-appbar"
    //           aria-haspopup="true"
    //           onClick={handleOpenNavMenu}
    //           color="inherit"
    //         >
    //           <MenuIcon />
    //         </IconButton>
    //         <Menu
    //           id="menu-appbar"
    //           anchorEl={anchorElNav}
    //           anchorOrigin={{
    //             vertical: "bottom",
    //             horizontal: "left",
    //           }}
    //           keepMounted
    //           transformOrigin={{
    //             vertical: "top",
    //             horizontal: "left",
    //           }}
    //           open={Boolean(anchorElNav)}
    //           onClose={handleCloseNavMenu}
    //           sx={{
    //             display: { xs: "block", md: "none" },
    //           }}
    //         >
    //           <Link to="/" className={css.LinkStyle}>
    //             <MenuItem onClick={handleCloseNavMenu}>
    //               <Typography textAlign="center">
    //                 {props.t("Menu.1")}
    //               </Typography>
    //             </MenuItem>
    //           </Link>
    //           <Link to="/question">
    //             <MenuItem onClick={handleCloseNavMenu}>
    //               <Typography textAlign="center">
    //                 {props.t("Menu.2")}
    //               </Typography>
    //             </MenuItem>
    //           </Link>
    //           <Link to="/broker">
    //             <MenuItem onClick={handleCloseNavMenu}>
    //               <Typography
    //                 textAlign="center"
    //                 sx={{ textDecoration: "none" }}
    //               >
    //                 {props.t("Menu.3")}
    //               </Typography>
    //             </MenuItem>
    //           </Link>
    //           <Link to="#">
    //             <MenuItem onClick={handleCloseNavMenu}>
    //               <Typography onClick={handleColorMode}>
    //                 {colorMode ? "Light Mode" : "Dark Mode"}
    //               </Typography>
    //             </MenuItem>
    //           </Link>
    //         </Menu>
    //       </Box>
    //       <Grid
    //         container
    //         justifyContent="flex-end"
    //         alignItems="center"
    //         sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
    //       >
    //         <Link to="/">
    //           <Button sx={{ color: "text.primary" }}>
    //             {props.t("Menu.1")}
    //           </Button>
    //         </Link>
    //         <Link to="/question">
    //           <Button sx={{ color: "text.primary" }}>
    //             {props.t("Menu.2")}
    //           </Button>
    //         </Link>
    //         <Link to="/broker">
    //           <Button sx={{ color: "text.primary" }}>
    //             {props.t("Menu.3")}
    //           </Button>{" "}
    //         </Link>
    //         {langBtn ? (
    //           <Link to="#">
    //             <Button onClick={handleClick} sx={{ color: "text.primary" }}>
    //               English
    //             </Button>
    //           </Link>
    //         ) : (
    //           <Link to="#">
    //             <Button onClick={handleClick} sx={{ color: "text.primary" }}>
    //               Монгол
    //             </Button>
    //           </Link>
    //         )}
    //         <IconButton onClick={props.handleMode}>
    //           {props.mode === "light" ? (
    //             <Brightness3Icon />
    //           ) : (
    //             <BrightnessLowIcon />
    //           )}
    //         </IconButton>
    //       </Grid>
    //     </Toolbar>
    //   </Container>
    // </AppBar>
  );
};

export default Header;
