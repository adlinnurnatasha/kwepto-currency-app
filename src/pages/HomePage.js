import React from "react";
import { LoadingScreenStyled } from "../styles/Main.styled";
import Trending from "../components/Trending";
import Banner from "../components/Banner";
import MarketData from "../components/MarketData";

const HomePage = ({ loading, coins, formatCurrency }) => {
  if (loading) {
    return (
      <LoadingScreenStyled>
        <h1>Loading...</h1>
      </LoadingScreenStyled>
    );
  }
  return (
    <>
      <Banner />
      <div data-aos="fade-up" data-aos-duration="1000" id="trend">
        {/* <Trending /> */}
        <div data-aos="fade-up" data-aos-duration="1000">
          <MarketData coins={coins} formatCurrency={formatCurrency} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
