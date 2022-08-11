import React, { useContext } from "react";
import ThemeContext from "./../../context/ThemeContext";
import Logo from "./../../assets/logo.png";
import css from "./style.module.css";

const SideBar = (props) => {
  const themeContext = useContext(ThemeContext);
  return themeContext.active ? (
    <>
      <div className={css.Shadow}>
        <nav className={css.SideBar}>
          <h1 className={css.logoContent}>
            <img src={Logo} alt="logo" className={css.logo} />
            <span>{themeContext.t("CompanyName.2")}</span>
            {themeContext.t("CompanyName.3")}
          </h1>
          <ul>
            <li>
              <a href="/">{themeContext.t("Menu.1")}</a>
            </li>
            <li>
              <a href="/question">{themeContext.t("Menu.2")}</a>
            </li>
            <li>
              <a href="/broker">{themeContext.t("Menu.3")}</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={css.hamburgerIcon} onClick={themeContext.handleActive}>
        <div className={`${css.icon1} ${themeContext.active && css.a}`}></div>
        <div className={`${css.icon2} ${themeContext.active && css.b}`}></div>
        <div className={`${css.icon3} ${themeContext.active && css.c}`}></div>
        <div className={css.clear}></div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default SideBar;
