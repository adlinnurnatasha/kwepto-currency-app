import React, { useState } from "react";
import BannerImg from "../assets/BannerImg.svg";
import {
  BannerContainer,
  Button,
  ArrowForward,
  ArrowRight,
  HomeContainer,
} from "../styles/Banner.styled";
import { Link } from "react-router-dom";
import "animate.css";

const Banner = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HomeContainer>
      <BannerContainer>
        <div
          data-aos="fade-right"
          data-aos-duration="500"
          className="banner-txt"
        >
          <h1>KWEPTO</h1>
          <p>ALL YOUR COINS UNDER ONE ROOF</p>
          <div className="home-btn">
            <Button onMouseEnter={onHover} onMouseLeave={onHover}>
              <Link to="/currencies">
                <p>View More {hover ? <ArrowForward /> : <ArrowRight />}</p>
              </Link>
            </Button>
          </div>
        </div>

        <div data-aos="zoom-in" data-aos-duration="500" className="banner-img">
          <img src={BannerImg} alt="banner" />
        </div>
      </BannerContainer>
    </HomeContainer>
  );
};

export default Banner;
