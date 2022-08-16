import React, { useContext, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import Logo from "./../../assets/logo.png";
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
    <nav ref={myRef} className={theme === "light" ? css.light : css.dark}>
      <div className={css.hideOnModile}>
        <div className={`${myRefIsVisible ? css.fadeUp : ""}`}>
          <h1 className={css.logoContent}>
            <img src={Logo} alt="logo" className={css.logo} />
            <span>{themeContext.t("CompanyName.2")}</span>
            {themeContext.t("CompanyName.3")}
          </h1>
        </div>
      </div>
      <div className={css.hamburgerIcon} onClick={themeContext.handleActive}>
        <div
          className={active ? `${css.icon1}${" "}${css.a}` : css.icon1}
        ></div>
        <div
          className={active ? `${css.icon2}${" "}${css.b}` : css.icon2}
        ></div>
        <div
          className={active ? `${css.icon3}${" "}${css.c}` : css.icon3}
        ></div>
        <div className={css.clear}></div>
      </div>
      <ul className={css.hideOnModile}>
        <div className={`${myRefIsVisible ? css.fadeUp : ""}`}>
          <li>
            <a href="/" className={css.wrap}>
              <HomeIcon sx={{ marginRight: 1 }} />
              {themeContext.t("Menu.1")}
            </a>
          </li>
        </div>
        <div className={`${myRefIsVisible ? css.fadeUp : ""}`}>
          <li>
            <a href="tel:8665562570" className={css.wrap}>
              <CallIcon sx={{ marginRight: 1 }} />
              {themeContext.t("Menu.2")}
            </a>
          </li>
        </div>
        <div className={`${myRefIsVisible ? css.fadeUp : ""}`}>
          <li>
            <a
              href="mailto:broker@rentsoestate.mn?subject=your title&body=TThe message"
              className={css.wrap}
            >
              <MailIcon sx={{ marginRight: 1 }} />
              {themeContext.t("Menu.3")}
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
