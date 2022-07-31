import React, { useState } from "react";
import {
  Paper,
  Avatar,
  Typography,
  useTheme,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Grid,
  Button,
  TabScrollButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import YoutubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import BrightnessLowIcon from "@mui/icons-material/BrightnessLow";
import Brightness3Icon from "@mui/icons-material/Brightness3";

import css from "./style.module.css";

import Logo from "./../../assets/logo.png";
import { Container } from "@mui/system";

const Footer = (props) => {
  const [langBtn, setLangBtn] = useState(false);
  const [colorMode, setColorMode] = useState(false);

  const handleClick = () => {
    setLangBtn(!langBtn);
    langBtn ? props.handleClick("en") : props.handleClick("mn");
  };

  const handleColorMode = () => {
    props.handleMode();
    setColorMode(!colorMode);
  };

  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        color: "#fff",
        height: "auto",
      }}
    >
      <Grid
        container
        display="flex"
        justifyContent="space-around"
        sx={{ bgcolor: "#053e79" }}
      >
        <Grid item xs={2} display="flex" direction="column">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar src={Logo} alt="RentsoEstate Logo" />
            <Typography variant="h6" noWrap>
              {props.t("CompanyName.1")}
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              odio fugiat sequi illo id! Molestias eius porro asperiores
              dignissimos ab.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <List sx={{ display: "flex" }}>
            <ListItem>
              <ListItemButton>
                <Typography noWrap>{props.t("Menu.1")}</Typography>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <Typography noWrap>{props.t("Menu.2")}</Typography>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <Typography noWrap>{props.t("Menu.3")}</Typography>
              </ListItemButton>
            </ListItem>
            {langBtn ? (
              <ListItem>
                <ListItemButton onClick={handleClick}>
                  <Typography noWrap>English</Typography>
                </ListItemButton>
              </ListItem>
            ) : (
              <ListItem>
                <ListItemButton onClick={handleClick}>
                  <Typography noWrap>Монгол</Typography>
                </ListItemButton>
              </ListItem>
            )}
            <ListItem sx={{ padding: "0px" }}>
              <ListItemButton>
                <Avatar
                  onClick={props.handleMode}
                  sx={{
                    bgcolor: "#053e79",
                    border: "#fff",
                    borderWidth: "0.1rem",
                    borderRadius: "50%",
                    borderStyle: "solid",
                  }}
                >
                  {props.mode === "light" ? (
                    <Brightness3Icon
                      sx={{ color: "#fff", width: 30, height: 30 }}
                    />
                  ) : (
                    <BrightnessLowIcon
                      sx={{ color: "#fff", width: 30, height: 30 }}
                    />
                  )}
                </Avatar>
              </ListItemButton>
            </ListItem>
          </List>
        </Grid>
        <Grid item display="flex" xs={12} justifyContent="center">
          <List sx={{ display: "flex", maxWidth: 360 }}>
            <ListItem>
              <ListItemText>
                <Typography noWrap>Get Social</Typography>
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: "0px" }}>
              <ListItemButton>
                <Avatar
                  sx={{
                    bgcolor: "#053e79",
                    border: "#299ace",
                    borderWidth: "0.1rem",
                    borderRadius: "50%",
                    borderStyle: "solid",
                  }}
                >
                  <FacebookIcon
                    sx={{ color: "#299ace", width: 30, height: 30 }}
                  />
                </Avatar>
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ padding: "0px" }}>
              <ListItemButton>
                <Avatar
                  sx={{
                    bgcolor: "#053e79",
                    border: "#299ace",
                    borderWidth: "0.1rem",
                    borderRadius: "50%",
                    borderStyle: "solid",
                  }}
                >
                  <YoutubeIcon
                    sx={{ color: "#299ace", width: 30, height: 30 }}
                  />
                </Avatar>
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ padding: "0px" }}>
              <ListItemButton>
                <Avatar
                  sx={{
                    bgcolor: "#053e79",
                    border: "#299ace",
                    borderWidth: "0.1rem",
                    borderRadius: "50%",
                    borderStyle: "solid",
                  }}
                >
                  <TwitterIcon
                    sx={{ color: "#299ace", width: 30, height: 30 }}
                  />
                </Avatar>
              </ListItemButton>
            </ListItem>
          </List>
        </Grid>
        <Grid item>
          <TabScrollButton
            orientation="vertical"
            direction="left"
            size="large"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
