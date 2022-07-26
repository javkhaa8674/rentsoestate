import React from "react";
import { Button, Container, Grid, Typography, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import css from "./style.module.css";
import { Box } from "@mui/system";

const MenuShowCases = (props) => {
  return (
    <Container
      sx={{ display: "flex", height: "400px", marginTop: "0.5rem" }}
      className={css.container}
    >
      <Box className={css.home}>
        <Box className={css.Showcase}>
          <Button
            variant="text"
            sx={{
              fontSize: "3rem",
              lineHeight: 1,
              color: "#fff",
              paddingBottom: "0.5rem",
            }}
            endIcon={<ArrowForwardIosIcon />}
          >
            {props.t("MenuShowCases.home.h2")}
          </Button>
          <Typography>{props.t("MenuShowCases.home.p")}</Typography>
        </Box>
      </Box>
      <Box className={css.question}>
        <Grid className={css.Showcase}>
          <Button
            variant="text"
            sx={{
              fontSize: "3rem",
              lineHeight: 1,
              color: "#fff",
              paddingBottom: "0.5rem",
            }}
            endIcon={<ArrowForwardIosIcon />}
          >
            {props.t("MenuShowCases.question.h2")}
          </Button>
          <Typography>{props.t("MenuShowCases.question.p")}</Typography>
        </Grid>
      </Box>
      <Box className={css.broker}>
        <Box className={css.Showcase}>
          <Button
            variant="text"
            sx={{
              fontSize: "3rem",
              lineHeight: 1,
              color: "#fff",
              paddingBottom: "0.5rem",
            }}
            endIcon={<ArrowForwardIosIcon />}
          >
            {props.t("MenuShowCases.broker.h2")}
          </Button>
          <Typography>{props.t("MenuShowCases.broker.p")}</Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default MenuShowCases;
