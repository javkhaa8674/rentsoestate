import React from "react";
import css from "./style.module.css";

const Spinner = () => {
  return (
    <div className={css.loading}>
      <div className={css.loader}></div>
    </div>
  );
};

export default Spinner;
