import React from "react";
import MyLogo from "./../../assets/logo.png";
import css from "./style.module.css";

const Logo = (props) => {
  return (
    <h1 className={css.Logo}>
      <span className={css.Logo}>
        <img src={MyLogo} alt="MyLogo" />
        <div className={css.TextPrimary}>{props.t("CompanyName.2")}</div>
        {props.t("CompanyName.3")}
      </span>
    </h1>
  );
};

export default Logo;
