import React, { useContext, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Media from "react-media";
import ThemeContext from "../../context/ThemeContext";
import css from "./style.module.css";

const Navbar = (props) => {
  const themeContext = useContext(ThemeContext);
  const [active, setActive] = useState(false);
  const [theme, setTheme] = useState("light");
  const { ref: myRef, inView: myRefIsVisible } = useInView();

  useEffect(() => {
    setTheme(themeContext.theme);
    return () => {
      setTheme("light");
    };
  }, [themeContext.theme]);

  useEffect(() => {
    setActive(themeContext.active);
  }, [themeContext.active]);

  return (
    <section ref={myRef} className={theme === "light" ? css.light : css.dark}>
      <ul className={css.hideOnModile}>
        <div className={`${myRefIsVisible ? css.fadeUp : ""}`}>
          <li>
            <a href="/" className={css.wrap}>
              {themeContext.t("Menu.1")}
            </a>
          </li>
        </div>
        <div className={`${myRefIsVisible ? css.fadeUp : ""}`}>
          <li>
            <a href="/question" className={css.wrap}>
              {themeContext.t("Menu.2")}
            </a>
          </li>
        </div>
        <div className={`${myRefIsVisible ? css.fadeUp : ""}`}>
          <li>
            <a href="/broker" className={css.wrap}>
              {themeContext.t("Menu.3")}
            </a>
          </li>
        </div>
      </ul>
      <div className={css.hamburgerIcon} onClick={themeContext.handleActive}>
        <div className={`${css.icon1} ${active && css.a}`}></div>
        <div className={`${css.icon2} ${active && css.b}`}></div>
        <div className={`${css.icon3} ${active && css.c}`}></div>
        <div className={css.clear}></div>
      </div>
    </section>
  );
};

export default Navbar;
