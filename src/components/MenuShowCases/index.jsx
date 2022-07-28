import React from "react";
import { Button, Paper, Grid, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import css from "./style.module.css";
import { Box } from "@mui/system";

const MenuShowCases = (props) => {
  return (
    <Paper
      maxWidth="xl"
      sx={{
        display: "flex",
        height: "400px",
        paddingTop: "0.5rem",
      }}
      className={css.container}
    >
      <Box className={css.home}>
        <Box className={css.Showcase}>
          <Typography
            variant="h4"
            sx={{
              lineHeight: 1,
              color: "#fff",
              paddingBottom: "0.5rem",
            }}
          >
            {props.t("MenuShowCases.home.h2")}
            <ArrowForwardIosIcon />
          </Typography>
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
    </Paper>
  );
};

export default MenuShowCases;
