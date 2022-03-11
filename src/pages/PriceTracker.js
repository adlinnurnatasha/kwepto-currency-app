import React from "react";
import {
  HeaderStyled,
  LoadingScreenStyled,
  SectionStyled,
} from "../styles/Main.styled";
import {
  TableContainerStyled,
  CoinTableStyled,
} from "../styles/CoinList.styled";
import Trending from "../components/Trending";
import CoinList from "../components/CoinList";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const PriceTracker = ({ loading, coins, formatCurrency }) => {
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
      <Trending />
      <SectionStyled>
        <HeaderStyled>
          <h1>Market</h1>
        </HeaderStyled>
        <TableContainerStyled>
          <CoinTableStyled>
            <thead>
              <tr>
                <th style={{ textAlign: "center" }}>
                  <strong>Name</strong>
                </th>
                <th>
                  <strong>Price</strong>
                </th>
                <th className="percentage">
                  <strong>24hr</strong>
                </th>
                <th className="visible">
                  <strong>Mkt Cap</strong>
                </th>
              </tr>
            </thead>
            {coins.slice(0, 8).map((coin) => {
              return (
                <Link to={`/${coin.id}`}>
                  <CoinList
                    key={coin.market_cap_rank}
                    coin={coin}
                    formatCurrency={formatCurrency}
                  />
                </Link>
              );
            })}
            <tfoot>
              <button>
                <Link to="/currencies">
                  <p>View More</p>
                </Link>
              </button>
            </tfoot>
          </CoinTableStyled>
        </TableContainerStyled>
      </SectionStyled>
    </>
  );
};

export default PriceTracker;
