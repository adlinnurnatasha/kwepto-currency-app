import React from "react";
import { HeaderStyled, SectionStyled } from "../styles/Main.styled";
import {
  TableContainerStyled,
  CoinTableStyled,
} from "../styles/CoinList.styled";
import Trending from "../components/Trending";
import CoinList from "../components/CoinList";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import MarketData from "../components/MarketData";

const HomePage = ({ coins, formatCurrency }) => {
  return (
    <>
      <Banner />
      <Trending />
      <MarketData coins={coins} formatCurrency={formatCurrency} />
      {/* <SectionStyled>
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
                <Link to={`/currencies/${coin.id}`}>
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
      </SectionStyled> */}
    </>
  );
};

export default HomePage;
