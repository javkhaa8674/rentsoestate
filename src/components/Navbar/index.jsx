import React, { useContext, useState, useEffect } from "react";
import Media from "react-media";
import { useInView } from "react-intersection-observer";
import ThemeContext from "./../../context/ThemeContext";
//import HamburgerMenu from "./../HamburgerMenu";
import css from "./style.module.css";

const Navbar = (props) => {
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
    <div>
      <Media
        queries={{
          small: "(max-width:899px)",
          large: "(min-width:900px)",
        }}
      >
        {(matches) => (
          <>
            {matches.small && <p>fdfadsdf</p>}
            {matches.large && (
              <nav
                ref={myRef}
                className={theme === "light" ? css.light : css.dark}
              >
                <ul>
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
              </nav>
            )}
          </>
        )}
      </Media>
    </div>
  );
};

export default Navbar;
