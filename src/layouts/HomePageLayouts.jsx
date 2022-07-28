import React from "react";
import Header from "../components/Header";
import Footer from "./../components/Footer";

const HomepageLayouts = (props) => {
  return (
    <>
      <Header {...props} />
      {props.children}
      {/* <Footer {...props} /> */}
    </>
  );
};

export default HomepageLayouts;
