import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carosel.scss";

const MyCarousel = () => {
  return (
    <>
      <div className="parent">
        <Carousel className="div1">
          <div>
            <img src={require("../../../../Image/Slider-images/slide1.jpg")} alt="image1" />
          </div>
          <div>
            <img src={require("../../../../Image/Slider-images/slide2.jpg")} alt="Image2" />
          </div>
          <div>
            <img src={require("../../../../Image/Slider-images/slide3.jpg")} alt="Image3" />
          </div>
        </Carousel>
        <div className="div2">
        <nav className="nav-bar">
        <ul className="nav-list">
        <li><a href="/">Forside</a></li>
        <li><a href="/produkter">Produkter</a></li>
        <h2 href="/">bageriet</h2>
        <li><a href="/kontakt">Kontakt</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
        </div>
        <div className="div3">
          <h1>vi elsker at lave brød</h1>
        </div>
      </div>
    </>
  );
};

export default MyCarousel;