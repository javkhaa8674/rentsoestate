import React, { useContext } from "react";
import { useInView } from "react-intersection-observer";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ThemeContext from "./../../context/ThemeContext";
//import Media from "react-media";
import css from "./style.module.css";

const MenuShowCases = (props) => {
  const themeContext = useContext(ThemeContext);
  const { ref: myRef, inView: myRefIsVisible } = useInView();
  return (
    <div ref={myRef} className={css.container}>
      <div className={`${myRefIsVisible ? css.fadeUp : ""}`}>
        <div className={css.home}>
          <div className={css.Showcase}>
            <h1>
              {themeContext.t("MenuShowCases.home.h2")}
              <ArrowForwardIosIcon />
            </h1>
            <p>{themeContext.t("MenuShowCases.home.p")}</p>
          </div>
        </div>
      </div>
      <div className={`${myRefIsVisible ? css.fadeUp : ""}`}>
        <div className={css.question}>
          <div className={css.Showcase}>
            <h1>
              {themeContext.t("MenuShowCases.question.h2")}
              <ArrowForwardIosIcon />
            </h1>
            <p>{themeContext.t("MenuShowCases.question.p")}</p>
          </div>
        </div>
      </div>
      <div className={`${myRefIsVisible ? css.fadeUp : ""}`}>
        <div className={css.broker}>
          <div className={css.Showcase}>
            <h1>
              {themeContext.t("MenuShowCases.broker.h2")}
              <ArrowForwardIosIcon />
            </h1>
            <p>{themeContext.t("MenuShowCases.broker.p")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuShowCases;
