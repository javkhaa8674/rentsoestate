import React, { useState } from "react";
import css from "./style.module.css";
import Logo from "./../Logo";

const navItems = ["Үндсэн цэс", "Асуулт байна уу?", "broker@rentsoestate.mn"];

const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className={css.Toolbar}>
      <Logo />
      <ul>
        <li>
          <a href="#home">Нүүр</a>
        </li>
        <li>
          <a href="#what">Үйлчилгээ</a>
        </li>
        <li>
          <a href="#who">Бид</a>
        </li>
        <li>
          <a href="#contact">Холбогдох</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
