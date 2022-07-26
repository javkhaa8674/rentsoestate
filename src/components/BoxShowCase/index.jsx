import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import Image from "./../../assets/contracosta.png";

const sectionStyle = {
  height: "100vh",
  backgroundImage: `url(${Image})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const BoxShowCase = (props) => {
  return (
    <Grid
      container
      maxWidth="fixed"
      style={sectionStyle}
      direction="column"
      sx={{
        textAlign: "center",
        padding: "0px",
      }}
    >
      <Grid
        xs={12}
        sx={{
          background:
            "linear-gradient( to bottom, rgba(0, 122, 179, 0) 60%, rgba(0, 122, 179, 1))",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          textAlign: "center",
        }}
      >
        <Grid item xs={6} md={6}>
          <Grid item xs={12} sx={{ color: "#fff" }}>
            <Typography
              sx={{
                fontFamily: "Tahoma",
                color: "#fff",
                fontSize: "5rem",
                lineHeight: "1.1",
              }}
            >
              {props.t("ShowCaseText.h1")}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Tahoma",
                fontSize: "1.3rem",
              }}
            >
              {props.t("ShowCaseText.p")}
            </Typography>
            <Button
              sx={{
                display: "inline-block",
                fontFamily: "Tahoma",
                color: "#fff",
                background: "#007ab3",
                padding: "0.5rem 2rem",
                border: " #007ab3",
                borderRadius: "1px",
                borderStyle: "solid",
                borderWidth: "0.3rem",
                fontSize: "1.5rem",
                textTransform: "capitalize",
                marginBottom: "1rem",
                "&.MuiButtonBase-root:hover": {
                  background: "rgba(33, 36, 179, 0)",
                  border: "#007ab3",
                  borderStyle: "solid",
                  borderWidth: "0.3rem",
                },
              }}
            >
              Дэлгэрэнгүй
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default BoxShowCase;
