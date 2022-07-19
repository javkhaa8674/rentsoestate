import React from "react";
import css from "./style.module.css";

const ShowCase = () => {
  return (
    <header id={css.showcase}>
      <div className={css.showcaseContent}>
        <h1 className={css.lHeading}>Бидний боломжид хязгаар үгүй</h1>
        <p className={css.lead}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
          veniam adipisci soluta! Exercitationem, soluta. Accusamus voluptatem
          perspiciatis unde eaque consectetur!
        </p>
        <a href="#what" className={css.btn}>
          Дэлгэрэнгүй
        </a>
      </div>
    </header>
  );
};

export default ShowCase;
