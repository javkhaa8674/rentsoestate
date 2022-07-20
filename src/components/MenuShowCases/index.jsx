import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import css from "./style.module.css";

const MenuShowCases = (props) => {
  return (
    <section className={css.container}>
      <div className={css.home}>
        <div className={css.Showcase}>
          <h2 className={css.lHeading}>
            <a href="/">
              {props.t("MenuShowCases.home.h2")} <ArrowForwardIosIcon />
            </a>
          </h2>
          <a href="/" className={css.btn}>
            {props.t("MenuShowCases.home.p")}
          </a>
        </div>
      </div>
      <div className={css.question}>
        <div className={css.Showcase}>
          <h2 className={css.lHeading}>
            <a href="/question">
              Асуулт байна уу <ArrowForwardIosIcon />
            </a>
          </h2>

          <a href="/question" className={css.btn}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            eum?
          </a>
        </div>
      </div>
      <div className={css.broker}>
        <div className={css.Showcase}>
          <h2 className={css.lHeading}>
            <a href="/broker">
              {" "}
              Брокер <ArrowForwardIosIcon />
            </a>
          </h2>
          <a href="/broker" className={css.btn}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            eum?
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuShowCases;
