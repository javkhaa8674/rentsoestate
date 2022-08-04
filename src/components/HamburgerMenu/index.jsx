import React, { useState } from "react";
import css from "./style.module.css";

const HamburgerMenu = () => {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active);
  };
  console.log("active", active);
  return (
    <header>
      <div className="hamburger-icon" id="icon" onClick={handleActive}>
        <div className="icon-1" id="a"></div>
        <div className="icon-2" id="b"></div>
        <div className="icon-3" id="c"></div>
        <div className="clear"></div>
      </div>

      <nav id="nav">
        <ul>
          <li>HOme</li>
          <li>About</li>
          <li>Contact</li>
          <li>Help</li>
        </ul>
      </nav>

      <div className={`${css.darkBlue}${active && css.blue}`}></div>

      <section className="content">
        <h1>Hello We are animated!</h1>
        <p className="small">Lorem ipsum dolor sit amet</p>
      </section>
    </header>
  );
};

export default HamburgerMenu;
