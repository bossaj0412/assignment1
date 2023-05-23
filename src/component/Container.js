import React from "react";
import "./container.css";
const Container = ({ main, para, link, img }) => {
  return (
    <div className="container" data-aos="fade-up">
      <div className="text-box">
        <div className="main-text m">
          <h1>{main}</h1>
        </div>
        <div className="para-text m">
          <p>{para}</p>
        </div>
        <div className="link-text">
          <a href="google.com"> {link} 🔗 </a>
        </div>
      </div>
      <div
        className=" image-box m"
        style={{
          minWidth: "450px",
          height: "250px",
          backgroundImage: `url(${img})`,
          backgroundSize:'cover'
        }}
      ></div>
    </div>
  );
};

export default Container;
