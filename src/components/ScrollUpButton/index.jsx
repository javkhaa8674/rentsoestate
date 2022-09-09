import React, { useState } from "react";
import KeyboardControlKeyIcon from "@mui/icons-material/KeyboardControlKey";
import css from "./style.module.css";

const ScrollUpButton = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  const handleButton = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  };

  return (
    <div className={css.showTopBtn} onClick={handleButton}>
      <KeyboardControlKeyIcon
        className={showTopBtn ? css.iconStyle : css.iconStyle}
      />
    </div>
  );
};

export default ScrollUpButton;
