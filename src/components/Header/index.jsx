import React, { useState, useEffect, useContext, useMemo } from "react";
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
} from "@mui/material";
import BrightnessLowIcon from "@mui/icons-material/BrightnessLow";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import MenuIcon from "@mui/icons-material/Menu";

import css from "./style.module.css";
import Logo from "./../../assets/logo.png";
import { Container } from "@mui/system";

const DarkButton = (props) => {
  const theme = useTheme();
  return (
    <Box>
      <IconButton onClick={props.colorMode.toggleColorMode} color="primary">
        {theme.palette.mode === "light" ? (
          <Brightness3Icon />
        ) : (
          <BrightnessLowIcon />
        )}
      </IconButton>
    </Box>
  );
};

const Header = (props) => {
  const [langBtn, setLangBtn] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [colorMode, setColorMode] = useState(false);

  const theme = useTheme();

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
    props.colorMode.toggleColorMode();
    setColorMode(!colorMode);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        display: "flex",
        bgcolor: "background.default",
        color: "text.primary",
        height: "100px",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
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
            sx={{
              color: theme.primary.main,
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
          <Box
            sx={{
              flexGrow: 1,
              alignItems: "flex-end",
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
              <MenuItem
                onClick={handleCloseNavMenu}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Typography textAlign="center">{props.t("Menu.1")}</Typography>
                <Typography textAlign="center">{props.t("Menu.2")}</Typography>
                <Typography textAlign="center">{props.t("Menu.3")}</Typography>
                <Typography onClick={handleColorMode}>
                  {colorMode ? "Light Mode" : "Dark Mode"}
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            <Button key={props.t("Menu.1")} onClick={handleCloseNavMenu}>
              {props.t("Menu.1")}
            </Button>
            <Button key={props.t("Menu.2")} onClick={handleCloseNavMenu}>
              {props.t("Menu.2")}
            </Button>
            <Button key={props.t("Menu.3")} onClick={handleCloseNavMenu}>
              {props.t("Menu.3")}
            </Button>
            {langBtn ? (
              <Button onClick={handleClick}>English</Button>
            ) : (
              <Button onClick={handleClick}>Монгол</Button>
            )}
            <DarkButton {...props} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
