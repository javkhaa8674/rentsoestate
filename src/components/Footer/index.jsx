import React, { useState } from "react";
import {
  Paper,
  Avatar,
  Typography,
  useTheme,
  Box,
  Button,
} from "@mui/material";

import Logo from "./../../assets/logo.png";

const Footer = (props) => {
  const theme = useTheme();
  const [langBtn, setLangBtn] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleClick = () => {
    setLangBtn(!langBtn);
    langBtn ? props.handleClick("en") : props.handleClick("mn");
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <Paper
      className="Container"
      sx={{
        display: "flex",
        bgcolor: "background.default",
        color: "text.secondary",
        height: "100px",
      }}
    >
      <Box display="flex" justifyContent="flex-start" alignItems="center">
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
            color: theme.primary.contrastText,
            marginRight: "0.5rem",
            textDecoration: "none",
          }}
        >
          {props.t("CompanyName.1")}
        </Typography>
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
        </Box>
      </Box>
    </Paper>
  );
};

export default Footer;
