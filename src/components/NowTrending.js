import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  CenterEverythingStyled,
  HeaderStyled,
  WhiteBgStyled,
} from "../styles/Main.styled";
import TrendList from "./TrendList";
import { CardContainerStyled } from "../styles/TrendList.styled";

const NowTrending = () => {
  const [trend, setTrend] = useState([]);

  // Get Trending Coins
  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/search/trending`)
      .then((res) => {
        setTrend(res.data.coins);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <WhiteBgStyled>
      <HeaderStyled>
        <h1>TRENDING COINS</h1>
        <p>Trending coins that people are searching for</p>
      </HeaderStyled>
      <CenterEverythingStyled>
        <CardContainerStyled>
          {trend.map((trends) => (
            <TrendList key={trends.coin_id} trends={trends} />
          ))}
        </CardContainerStyled>
      </CenterEverythingStyled>
    </WhiteBgStyled>
  );
};

export default NowTrending;
