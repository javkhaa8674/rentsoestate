import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import banner1 from "./../../assets/banner 1.png";
import banner2 from "./../../assets/banner 2.jpg";
import banner3 from "./../../assets/banner 3.jpg";

const Directory = (props) => {
  const fadeImages = [
    {
      url: banner1,
      caption: "First Slide",
    },
    {
      url: banner2,
      caption: "Second Slide",
    },
    {
      url: banner3,
      caption: "Third Slide",
    },
  ];

  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container">
              <img src={fadeImage.url} />
            </div>
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Directory;
