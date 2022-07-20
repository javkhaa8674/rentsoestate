import React, { useState } from "react";
import css from "./style.module.css";
import Logo from "./../Logo";

const Header = (props) => {
  const [langBtn, setLangBtn] = useState(false);

  const handleClick = () => {
    setLangBtn(!langBtn);
    langBtn ? props.handleClick("en") : props.handleClick("mn");
  };

  return (
    <header className={css.Toolbar}>
      <Logo {...props} />
      <ul>
        <li>
          <a href={props.t("MenuURL.1")}>{props.t("Menu.1")}</a>
        </li>
        <li>
          <a href={props.t("MenuURL.2")}>{props.t("Menu.2")}</a>
        </li>
        <li>
          <a href={props.t("MenuURL.3")}>{props.t("Menu.3")}</a>
        </li>
        <li>
          {langBtn ? (
            <a href="/#" onClick={handleClick}>
              English
            </a>
          ) : (
            <a href="/#" onClick={handleClick}>
              Монгол
            </a>
          )}
        </li>
      </ul>
    </header>
  );
};

export default Header;
