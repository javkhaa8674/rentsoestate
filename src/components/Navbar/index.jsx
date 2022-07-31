import React, { useContext, useState, useEffect } from "react";
import ThemeContext from "./../../context/ThemeContext";
import css from "./style.module.css";
const Toolbar = (props) => {
  const themeContext = useContext(ThemeContext);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setTheme(themeContext.theme);
    return () => {
      setTheme("light");
    };
  }, [themeContext.theme]);
  return (
    <nav className={theme === "light" ? css.light : css.dark}>
      <ul>
        <li>
          <a href="#" className={css.wrap}>
            {themeContext.t("Menu.1")}
          </a>
        </li>
        <li>
          <a href="#" className={css.wrap}>
            {themeContext.t("Menu.2")}
          </a>
        </li>
        <li>
          <a href="#" className={css.wrap}>
            {themeContext.t("Menu.3")}
          </a>
        </li>
        <li>
          <a href="#" className={css.wrap}>
            {themeContext.t("Menu.2")}
          </a>
        </li>
        <li>
          <a href="#" className={css.wrap}>
            {themeContext.t("Menu.3")}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Toolbar;
