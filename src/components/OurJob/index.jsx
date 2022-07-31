import React from "react";
//import css from "./style.module.css";
import { green, pink, blue } from "@mui/material/colors";
import { Avatar, Box, Typography, useTheme } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";

const OurJob = (props) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor:
          theme.palette.mode === "light" ? theme.palette.primary : "#303030",
      }}
    >
      <Box>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "2rem",
            margin: "1.5rem",
            lineHeight: "1.1",
          }}
        >
          Бид юу хийдэг вэ?
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Avatar
            sx={{
              width: 56,
              height: 56,
              padding: "1rem",
              bgcolor: pink[500],
              marginBottom: "1rem",
            }}
          >
            <AccountBalanceIcon sx={{ width: 50, height: 50 }} />
          </Avatar>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "2rem",
              marginBottom: "0.75rem",
              lineHeight: "1.1",
            }}
          >
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
            justifyContent: "center",
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
              marginBottom: "1rem",
            }}
          >
            <LocalAtmIcon
              sx={{
                width: 50,
                height: 50,
              }}
            />
          </Avatar>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontSize: "2rem",
              marginBottom: "0.75rem",
              lineHeight: "1.1",
            }}
          >
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
            justifyContent: "center",
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
              marginBottom: "1rem",
            }}
          >
            <HistoryEduIcon
              sx={{
                width: 50,
                height: 50,
              }}
            />
          </Avatar>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontSize: "2rem",
              marginBottom: "0.75rem",
              lineHeight: "1.1",
            }}
          >
            Үл хөдлөх худалдах
          </Typography>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta,
            vitae?
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default OurJob;
