import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "./../../context/ThemeContext";
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import css from "./style.module.css";

const SideBar = (props) => {
  const themeContext = useContext(ThemeContext);
  const [theme, setTheme] = useState("light");
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(themeContext.active);
  }, [themeContext.active]);

  useEffect(() => {
    setTheme(themeContext.theme);
    return () => {
      setTheme("light");
    };
  }, [themeContext.theme]);

  return (
    <header className={active ? css.Shadow : ""}>
      <nav
        className={
          active && theme === "light"
            ? `${css.SideBar}${" "}${css.show}`
            : active && theme === "dark"
            ? `${css.SideBarDark}${" "}${css.show}`
            : css.Sidebar
        }
      >
        <ul className={!active && css.hideList}>
          <li>
            <a href="/" className={css.wrap}>
              <HomeIcon sx={{ marginRight: 1 }} />
              {themeContext.t("Menu.1")}
            </a>
          </li>
          <li>
            <a href="tel:8665562570" className={css.wrap}>
              <CallIcon sx={{ marginRight: 1 }} />
              {themeContext.t("Menu.2")}
            </a>
          </li>
          <li>
            <a
              href="mailto:broker@rentsoestate.mn?subject=your title&body=TThe message"
              className={css.wrap}
            >
              <MailIcon sx={{ marginRight: 1 }} />
              {themeContext.t("Menu.3")}
            </a>
          </li>
        </ul>
      </nav>
      <div
        className={
          active && theme === "light"
            ? `${css.darkBlue}${" "}${css.slide}`
            : active && theme === "dark"
            ? `${css.darkGray}${" "}${css.slide}`
            : css.darkBlue
        }
      ></div>
    </header>
  );
};

export default SideBar;
