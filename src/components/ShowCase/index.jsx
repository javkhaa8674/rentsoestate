import React from "react";
import css from "./style.module.css";

const ShowCase = (props) => {
  return (
    <header id={css.showcase}>
      <div className={css.showcaseContent}>
        <h1 className={css.lHeading}>{props.t("ShowCaseText.h1")}</h1>
        <p className={css.lead}>{props.t("ShowCaseText.p")}</p>
        <a href="#what" className={css.btn}>
          {props.t("ShowCaseText.a")}
        </a>
      </div>
    </header>
  );
};

export default ShowCase;
