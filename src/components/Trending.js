import React, { useState, useEffect } from "react";
import axios from "axios";
import TrendingImg from "../assets/TrendingImg.svg";
import { HeaderStyled, SectionStyled } from "../styles/Main.styled";
import TrendList from "./TrendList";
import {
  TrendingCointainerStyled,
  CardContainerStyled,
} from "../styles/TrendList.styled";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Trending = ({ currency }) => {
  const [trend, setTrend] = useState([]);

  // Get trending coins
  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/search/trending`)
      .then((res) => {
        setTrend(res.data.coins);
      })
      .catch((error) => {
        console.log(error);
      });

    return () => {
      setTrend();
    };
  }, []);

  return (
    <TrendingCointainerStyled>
      <SectionStyled>
        <div className="flex">
          <div
            className="trending-img"
            data-aos="fade-up-right"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <img src={TrendingImg} alt="Trending Mascot" />
          </div>
          <div className="trending-content" data-aos="fade-in">
            <HeaderStyled>
              <h1>TRENDING COINS</h1>
              <p>Trending coins that people are searching for</p>
            </HeaderStyled>
            <Marquee
              speed={50}
              style={{ width: "100%", height: "25vh" }}
              reverse={true}
              pauseOnHover={true}
              className="marquee"
            >
              <CardContainerStyled>
                {trend.map((trends, i) => (
                  <Link to={`/currencies/${trends.item.id}`} key={i}>
                    <TrendList
                      key={trends.item.coin_id}
                      trends={trends}
                      currency={currency}
                    />
                  </Link>
                ))}
              </CardContainerStyled>
            </Marquee>
          </div>
        </div>
      </SectionStyled>
    </TrendingCointainerStyled>
  );
};

export default Trending;
