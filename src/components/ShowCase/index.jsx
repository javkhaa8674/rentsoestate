import React, { useContext } from "react";
import ThemeContext from "./../../context/ThemeContext";
import css from "./style.module.css";

const ShowCase = (props) => {
  const themeContext = useContext(ThemeContext);
  return (
    <section id={css.showcase}>
      <div className={css.showcaseGradient}>
        <div className={css.showcaseContent}>
          <div className={css.wrap}>
            <h1 className={css.lHeading}>
              {themeContext.t("ShowCaseText.h1")}
            </h1>
            <p className={css.lead}>{themeContext.t("ShowCaseText.p")}</p>
            <a href="#what" className={css.btn}>
              {themeContext.t("ShowCaseText.a")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
