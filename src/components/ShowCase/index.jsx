import React, { useContext } from "react";
import { useInView } from "react-intersection-observer";
import ThemeContext from "./../../context/ThemeContext";
import css from "./style.module.css";

const ShowCase = (props) => {
  const themeContext = useContext(ThemeContext);
  const { ref: myRef, inView: myRefIsVisible } = useInView();
  return (
    <div className={`${myRefIsVisible ? css.fadeUp : ""}`}>
      <section ref={myRef} id={css.showcase}>
        <div className={css.showcaseGradient}>
          <div className={css.showcaseContent}>
            <div className={css.wrap}>
              <h1 className={`${myRefIsVisible ? css.fadeUp : ""}`}>
                {themeContext.t("ShowCaseText.h1")}
              </h1>
              <div className={css.wrap1}>
                <div className={`${myRefIsVisible ? css.fadeUp : ""}`}>
                  <a href="/rentsoestate" className={css.btn1}>
                    {themeContext.t("ShowCaseText.p1")}
                  </a>
                </div>
                <div className={`${myRefIsVisible ? css.fadeUp : ""}`}>
                  <a href="/organization" className={css.btn3}>
                    {themeContext.t("ShowCaseText.p3")}
                  </a>
                </div>
                <div className={`${myRefIsVisible ? css.fadeUp : ""}`}>
                  <a href="/mongoloju" className={css.btn2}>
                    {themeContext.t("ShowCaseText.p2")}
                  </a>
                </div>
                <div className={`${myRefIsVisible ? css.fadeUp : ""}`}>
                  <a href="/oronsuuts" className={css.btn2}>
                    {themeContext.t("ShowCaseText.p4")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShowCase;
