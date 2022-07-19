import React from "react";
import MyLogo from "./../../assets/logo.png";
import css from "./style.module.css";

const Logo = () => {
  return (
    <h1 className={css.Logo}>
      <span className={css.Logo}>
        <img src={MyLogo} alt="MyLogo" />
        <div className={css.TextPrimary}>Рэнц'О</div>Эстэйт
      </span>
    </h1>
  );
};

export default Logo;
