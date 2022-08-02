import React, { useContext, useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import ThemeContext from "./../../context/ThemeContext";
import css from "./style.module.css";
import { Avatar } from "@mui/material";

const OurJob = (props) => {
  const themeContext = useContext(ThemeContext);
  const { ref: myRef, inView: myRefIsVisible } = useInView();

  return (
    <div
      ref={myRef}
      className={themeContext.theme === "light" ? css.light : css.dark}
    >
      <div className={css.mHeading}>
        <div className={`${myRefIsVisible ? css.fadeUp : ""}`}>
          <h1>Бид юу хийдэг вэ?</h1>
        </div>
      </div>
      <div className={css.items}>
        <div className={`${myRefIsVisible ? css.fadeUp : ""}`}>
          <div className={css.item}>
            <Avatar
              className={css.icon4}
              sx={{ bgcolor: "#58a2f0", width: 50, height: 50 }}
            >
              <AccountBalanceIcon fontSize="large" />
            </Avatar>
            <h1>Үл хөдлөх худалдах</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
              rem?
            </p>
          </div>
        </div>
        <div className={`${myRefIsVisible ? css.fadeUp : ""}`}>
          <div className={css.item}>
            <Avatar
              className={css.icon4}
              sx={{ bgcolor: "#58a2f0", width: 50, height: 50 }}
            >
              <HistoryEduIcon fontSize="large" />
            </Avatar>
            <h1>Үл хөдлөх худалдах</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
              rem?
            </p>
          </div>
        </div>
        <div className={`${myRefIsVisible ? css.fadeUp : ""}`}>
          <div className={css.item}>
            <Avatar
              className={css.icon4}
              sx={{ bgcolor: "#58a2f0", width: 50, height: 50 }}
            >
              <LocalAtmIcon fontSize="large" />
            </Avatar>
            <h1>Үл хөдлөх худалдах</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
              rem?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurJob;
