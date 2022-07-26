import React from "react";
import css from "./style.module.css";
import { green, pink, blue } from "@mui/material/colors";
import { Avatar, Box, Typography } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";

const OurJob = (props) => {
  return (
    <div className={css.container + " " + css.py1}>
      <h2 className={css.mHeading}>
        Бид
        <span className={css.TextPrimary}> юу</span>хийдэг вэ?
      </h2>
      <div className={css.items}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
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
          <Typography variant="h3" sx={{ padding: "1rem" }}>
            Үл хөдлөх худалдах
          </Typography>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta,
            vitae?
          </Typography>
        </Box>
        <div className={css.item}>
          <Avatar sx={{ bgcolor: blue[500], width: 56, height: 56 }}>
            <LocalAtmIcon />
          </Avatar>
          <h3>Үл хөдлөх худалдан авах</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta,
            vitae?
          </p>
        </div>
        <div className={css.item}>
          <Avatar sx={{ bgcolor: green[500], width: 56, height: 56 }}>
            <HistoryEduIcon />
          </Avatar>
          <h3>Үл хөдлөх хөрөнгийн сургалт</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta,
            vitae?
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurJob;
