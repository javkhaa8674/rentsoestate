import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import Header from "./components/Header";
import ShowCase from "./components/ShowCase";
import MenuShowCases from "./components/MenuShowCases";

const languages = [
  { code: "en", name: "English" },
  { code: "rus", name: "Русский" },
  { code: "deu", name: "Deutsch" },
];

const Menu = [
  { title: "Home", url: "/aboutRealEstate" },
  { title: "Асуулт байна уу?", url: "#" },
  { title: "broker@rentsoestate.mn", url: "#" },
];

const MainShowCase = [
  { title: "Үл хөдлөх хөрөнгийн тухай", url: "/aboutRealEstate" },
  { title: "Хэрэв та худалдах бол", url: "#" },
  { title: "Хэрэв та худалдан авах бол", url: "#" },
  { title: "Үл хөдлөх хөрөнгийн борлуулалт", url: "#" },
  { title: "Үл хөдлөх эзэмшлийн удирдлага", url: "#" },
];

const FeaturedShowCases = [
  { title: "Үл хөдлөх хөрөнгийн тухай", url: "/aboutRealEstate" },
  { title: "Хэрэв та худалдах бол", url: "#" },
  { title: "Хэрэв та худалдан авах бол", url: "#" },
  { title: "Үл хөдлөх хөрөнгийн борлуулалт", url: "#" },
  { title: "Үл хөдлөх эзэмшлийн удирдлага", url: "#" },
];

const App = () => {
  const { t, i18n } = useTranslation();

  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="Container">
      <section>
        <Header title="Рэнц'O Эстэйт" handleClick={handleClick} t={t} />
      </section>
      <section>
        <ShowCase t={t} />
      </section>
      <section>
        <MenuShowCases t={t} />
      </section>
    </div>
  );
};
export default App;
