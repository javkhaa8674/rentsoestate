/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useContext } from "react";
import { useInView } from "react-intersection-observer";
import { Avatar } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import ScrollUpButton from "../ScrollUpButton";
import ThemeContext from "../../context/ThemeContext";
import Logo from "./../../assets/logo.png";
import css from "./style.module.css";

const Footer = (p) => {
  const themeContext = useContext(ThemeContext);
  const [theme, setTheme] = useState("light");
  const { ref: myRef, inView: myRefIsVisible } = useInView();

  useEffect(() => {
    setTheme(themeContext.theme);
    return () => {
      setTheme("light");
    };
  }, [themeContext.theme]);

  return (
    <div ref={myRef} className={theme === "light" ? css.light : css.dark}>
      <div className={css.container}>
        <div className={css.menuItems}>
          <div className={css.item}>
            <h1 className={`${myRefIsVisible ? css.fadeUp : css.invisible}`}>
              {themeContext.t("ShowCaseText.h2")}
            </h1>
            <ul>
              <li className={`${myRefIsVisible ? css.fadeUp : css.invisible}`}>
                <a href="/organization">
                  <span className={css.textPrimary}>
                    {themeContext.t("ShowCaseText.p3")}
                  </span>
                </a>
              </li>
              <li className={`${myRefIsVisible ? css.fadeUp : css.invisible}`}>
                <a href="/rentsoestate">
                  <span className={css.textPrimary}>
                    {themeContext.t("ShowCaseText.p1")}
                  </span>
                </a>
              </li>
              <li className={`${myRefIsVisible ? css.fadeUp : css.invisible}`}>
                <a href="/mongoloju">
                  <span className={css.textPrimary}>
                    {themeContext.t("ShowCaseText.p2")}
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className={css.item}>
            <h1 className={`${myRefIsVisible ? css.fadeUp : css.invisible}`}>
              {themeContext.t("Footer.Menu2.0")}
            </h1>
            <ul>
              <li className={`${myRefIsVisible ? css.fadeUp : css.invisible}`}>
                <a href="/">{themeContext.t("Footer.Menu2.1")}</a>
              </li>
              <li className={`${myRefIsVisible ? css.fadeUp : css.invisible}`}>
                <a href="/">{themeContext.t("Footer.Menu2.2")}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={css.socialItems}>
          <div className={css.item}>
            <h1 className={`${myRefIsVisible ? css.fadeUp : css.invisible}`}>
              {themeContext.t("Footer.Menu2.3")}
            </h1>
            <ul>
              <li className={`${myRefIsVisible ? css.fadeUp : css.invisible}`}>
                <a href="/">
                  <Avatar
                    sx={{
                      bgcolor: "rgba(0,0,0,0)",
                      width: 50,
                      height: 50,
                      border: "#2375cc",
                      borderWidth: "2px",
                      borderStyle: "solid",
                    }}
                  >
                    <HomeIcon fontSize="large" sx={{ color: "#2375cc" }} />
                  </Avatar>
                </a>
              </li>
              <li className={`${myRefIsVisible ? css.fadeUp : css.invisible}`}>
                <a href="tel:8665562570">
                  <Avatar
                    sx={{
                      bgcolor: "rgba(0,0,0,0)",
                      width: 50,
                      height: 50,
                      border: "#2375cc",
                      borderWidth: "2px",
                      borderStyle: "solid",
                    }}
                  >
                    <CallIcon fontSize="large" sx={{ color: "#2375cc" }} />
                  </Avatar>
                </a>
              </li>
              <li className={`${myRefIsVisible ? css.fadeUp : css.invisible}`}>
                <a href="mailto:broker@rentsoestate.mn?subject=your title&body=TThe message">
                  <Avatar
                    sx={{
                      bgcolor: "rgba(0,0,0,0)",
                      width: 50,
                      height: 50,
                      border: "#2375cc",
                      borderWidth: "2px",
                      borderStyle: "solid",
                    }}
                  >
                    <MailIcon fontSize="large" sx={{ color: "#2375cc" }} />
                  </Avatar>
                </a>
              </li>
              <li className={`${myRefIsVisible ? css.fadeUp : css.invisible}`}>
                <a href="https://facebook.com">
                  <Avatar
                    sx={{
                      bgcolor: "rgba(0,0,0,0)",
                      width: 50,
                      height: 50,
                      border: "#2375cc",
                      borderWidth: "2px",
                      borderStyle: "solid",
                    }}
                  >
                    <FacebookIcon fontSize="large" sx={{ color: "#2375cc" }} />
                  </Avatar>
                </a>
              </li>
              <li className={`${myRefIsVisible ? css.fadeUp : css.invisible}`}>
                <a href="https://twitter.com">
                  <Avatar
                    sx={{
                      bgcolor: "rgba(0,0,0,0)",
                      width: 50,
                      height: 50,
                      border: "#2375cc",
                      borderWidth: "2px",
                      borderStyle: "solid",
                    }}
                  >
                    <TwitterIcon fontSize="large" sx={{ color: "#2375cc" }} />
                  </Avatar>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={css.logoContent}>
          <span className={`${myRefIsVisible ? css.fadeUp : css.invisible}`}>
            <img src={Logo} alt="logo" className={css.logo} />
          </span>
          <h1 className={`${myRefIsVisible ? css.fadeUp : css.invisible}`}>
            {themeContext.t("CompanyName.1")}
          </h1>
          <p className={`${myRefIsVisible ? css.fadeUp : css.invisible}`}>
            {themeContext.t("Address.1")}
          </p>
          <p className={`${myRefIsVisible ? css.fadeUp : css.invisible}`}>
            {themeContext.t("Address.2")}
          </p>
        </div>
      </div>
      <div className={css.copylight}>
        <div className={css.scrollItems}>
          <a
            href="#"
            className={`${myRefIsVisible ? css.fadeUp : css.invisible}`}
          >
            <ScrollUpButton />
          </a>
          <h1 className={`${myRefIsVisible ? css.fadeUp : css.invisible}`}>
            TOP
          </h1>
        </div>
        <div className={css.line} />
        <h1 className={`${myRefIsVisible ? css.fadeUp : css.invisible}`}>
          {themeContext.t("Copyright.p")}
        </h1>
      </div>
    </div>
  );
};

export default Footer;
