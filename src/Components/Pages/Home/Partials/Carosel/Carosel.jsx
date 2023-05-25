import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carosel.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const MyCarousel = () => {

  const [data, setData] = useState([]);
  let { type } = useParams({ type: "items" });

  useEffect(() => {
    const getData = async () => {
      const endpoint = `https://api.mediehuset.net/bakeonline/news`;
      const result = await axios.get(endpoint);

      setData(result.data);
      console.log(result.data);
    };
    getData();
  }, [type]);

  return (
    <>
      <div className="parent">
        <Carousel className="div1">
          <div>
            <img src={require("../../../../../Image/Slider-images/slide1.jpg")} alt="Image1" />
          </div>
          <div>
            <img src={require("../../../../../Image/Slider-images/slide2.jpg")} alt="Image2" />
          </div>
          <div>
            <img src={require("../../../../../Image/Slider-images/slide3.jpg")} alt="Image3" />
          </div>
        </Carousel>
        <div className="div2">
        <nav className="nav-bar">
        <ul className="nav-list">
        <li><a href="/">Forside</a></li>
        <li><a href="/Products">Produkter</a></li>
        <h2 href="/">bageriet</h2>
        <li><a href="/Contact">Kontakt</a></li>
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