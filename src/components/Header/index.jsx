import React, { useState } from "react";
import {
  useTheme,
  Box,
  IconButton,
  AppBar,
  Typography,
  Toolbar,
  Menu,
  MenuItem,
  Avatar,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Grid,
} from "@mui/material";
import BrightnessLowIcon from "@mui/icons-material/BrightnessLow";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import MenuIcon from "@mui/icons-material/Menu";

import Logo from "./../../assets/logo.png";
import { Container } from "@mui/system";

const Header = (props) => {
  const [langBtn, setLangBtn] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [colorMode, setColorMode] = useState(false);

  const handleClick = () => {
    setLangBtn(!langBtn);
    langBtn ? props.handleClick("en") : props.handleClick("mn");
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleColorMode = () => {
    props.handleMode();
    setColorMode(!colorMode);
  };

  return (
    <AppBar color="inherit">
      <Toolbar disableGutters sx={{ height: "100px" }}>
        <Box display="flex" alignItems="center">
          <Avatar
            src={Logo}
            alt="RentsoEstate Logo"
            sx={{
              width: 60,
              height: 60,
            }}
          />
          <Typography
            variant="h6"
            noWrap
            color="text.primary"
            sx={{
              marginRight: "0.5rem",
              textDecoration: "none",
            }}
          >
            {props.t("CompanyName.2")}
          </Typography>
          <Typography
            variant="h6"
            noWrap
            sx={{
              color: "text.primary",
              textDecoration: "none",
            }}
          >
            {props.t("CompanyName.3")}
          </Typography>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", md: "none" },
            justifyContent: "flex-end",
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{props.t("Menu.1")}</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{props.t("Menu.2")}</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{props.t("Menu.3")}</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography onClick={handleColorMode}>
                {colorMode ? "Light Mode" : "Dark Mode"}
              </Typography>
            </MenuItem>
          </Menu>
        </Box>
        <Grid
          container
          justifyContent="flex-end"
          alignItems="center"
          sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
        >
          <Typography primary={props.t("Menu.1")} sx={{ marginRight: "1rem" }}>
            {props.t("Menu.1")}
          </Typography>
          <Typography primary={props.t("Menu.2")} sx={{ marginRight: "1rem" }}>
            {props.t("Menu.2")}
          </Typography>
          <Typography primary={props.t("Menu.3")} sx={{ marginRight: "1rem" }}>
            {props.t("Menu.3")}
          </Typography>
          {langBtn ? (
            <Typography onClick={handleClick}>English</Typography>
          ) : (
            <Typography onClick={handleClick}>Монгол</Typography>
          )}
          <IconButton onClick={props.handleMode}>
            {props.mode === "light" ? (
              <Brightness3Icon />
            ) : (
              <BrightnessLowIcon />
            )}
          </IconButton>
          {/* <ListItem>
            <ListItemButton>
              <ListItemText primary={props.t("Menu.2")} />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemText primary={props.t("Menu.3")} />
            </ListItemButton>
          </ListItem>
          <ListItem>
            {langBtn ? (
              <ListItemText onClick={handleClick} primary="English" />
            ) : (
              <ListItemText onClick={handleClick} primary="Монгол" />
            )}
          </ListItem>
          <ListItem>
            <IconButton onClick={props.handleMode}>
              {props.mode === "light" ? (
                <Brightness3Icon />
              ) : (
                <BrightnessLowIcon />
              )}
            </IconButton>
          </ListItem> */}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
