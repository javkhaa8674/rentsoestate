import React from "react";
//mport css from "./style.module.css";
import { green, pink, blue } from "@mui/material/colors";
import { Avatar, Box, Typography, Paper } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";

const OurJob = (props) => {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        Бид юу хийдэг вэ?
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Avatar
            sx={{
              bgcolor: pink[500],
              width: 56,
              height: 56,
              padding: "1rem",
            }}
          >
            <AccountBalanceIcon />
          </Avatar>
          <Typography variant="h4" sx={{ padding: "1rem" }}>
            Үл хөдлөх худалдах
          </Typography>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta,
            vitae?
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Avatar
            sx={{
              bgcolor: green[500],
              width: 56,
              height: 56,
              padding: "1rem",
            }}
          >
            <LocalAtmIcon />
          </Avatar>
          <Typography variant="h4" sx={{ padding: "1rem" }}>
            Үл хөдлөх худалдах
          </Typography>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta,
            vitae?
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Avatar
            sx={{
              bgcolor: blue[500],
              width: 56,
              height: 56,
              padding: "1rem",
            }}
          >
            <HistoryEduIcon />
          </Avatar>
          <Typography variant="h4" sx={{ padding: "1rem" }}>
            Үл хөдлөх худалдах
          </Typography>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta,
            vitae?
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default OurJob;
