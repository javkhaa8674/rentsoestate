import React, { useContext } from "react";
import { Paper, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ThemeContext from "./../../context/ThemeContext";
//import Media from "react-media";
import css from "./style.module.css";

const MenuShowCases = (props) => {
  const themeContext = useContext(ThemeContext);
  return (
    <div maxWidth="xl" className={css.container}>
      <div className={css.home}>
        <div className={css.Showcase}>
          <h1>
            {themeContext.t("MenuShowCases.home.h2")}
            <ArrowForwardIosIcon />
          </h1>
          <h3>{themeContext.t("MenuShowCases.home.p")}</h3>
        </div>
      </div>
      <div className={css.question}>
        <div className={css.Showcase}>
          <h1>
            {themeContext.t("MenuShowCases.question.h2")}
            <ArrowForwardIosIcon />
          </h1>
          <h3>{themeContext.t("MenuShowCases.question.p")}</h3>
        </div>
      </div>
      <div className={css.broker}>
        <div className={css.Showcase}>
          <h1>
            {themeContext.t("MenuShowCases.broker.h2")}
            <ArrowForwardIosIcon />
          </h1>
          <h3>{themeContext.t("MenuShowCases.broker.p")}</h3>
        </div>
      </div>
    </div>
  );
};

export default MenuShowCases;
