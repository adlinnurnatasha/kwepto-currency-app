import React from "react";
import { Link } from "react-router-dom";
import { SectionStyled, WrapperStyled } from "../styles/Main.styled";
import {
  MarketInfoContainer,
  MarketContainerStyled,
  MarketCardStyled,
} from "../styles/MarketData.styled";
import MarketCapIcon from "../assets/DogChartIcon.svg";
import ActiveCryptoIcon from "../assets/DogCoinIcon.svg";
import TotalVolumeIcon from "../assets/CryptoIcon.svg";

const MarketData = ({ coins, formatCurrency }) => {
  return (
    <>
      <SectionStyled>
        <WrapperStyled>
          <MarketInfoContainer>
            <div
              className="market-text"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h1>Market Data</h1>
              <p>Latest and in-depth data from CoinGecko</p>
            </div>
            <div
              className="info-card-container"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div className="info-card">
                <div className="circle">
                  <img
                    className="larger"
                    src={MarketCapIcon}
                    alt="Market Cap Icon"
                  />
                </div>
                <div className="info-text">
                  <p>MARKET CAP:</p>
                  <strong>40.6%</strong>
                </div>
              </div>
              <div className="info-card" data-aos="zoom-in">
                <div className="circle">
                  <img src={ActiveCryptoIcon} alt="Active Crypto Icon" />
                </div>
                <div className="info-text">
                  <p>ACTIVE CRYPTOS:</p>
                  <strong>13076</strong>
                </div>
              </div>
              <div className="info-card" data-aos="zoom-in">
                <div className="circle">
                  <img src={TotalVolumeIcon} alt="Total Volume Icon" />
                </div>
                <div className="info-text">
                  <p>TOTAL VOLUME:</p>
                  <strong>46 MILLION</strong>
                </div>
              </div>
            </div>
          </MarketInfoContainer>
        </WrapperStyled>
      </SectionStyled>
      <SectionStyled>
        <WrapperStyled>
          <MarketContainerStyled>
            <div
              className="market-txt"
              data-aos="fade-right"
              data-aos-duration="500"
            >
              <h1>Explore prices of your favourite coins</h1>
              <p>See all Crypto assets</p>

              <Link to="/currencies">
                <button>View More</button>
              </Link>
            </div>
            <div
              className="market-coin"
              data-aos="zoom-in-left"
              data-aos-duration="500"
            >
              {coins.slice(0, 4).map((coin, i) => {
                return (
                  <Link to={`/currencies/${coin.id}`} key={i}>
                    <MarketCardStyled>
                      <img src={coin.image} alt={coin.name} />
                      <strong>{coin.name}</strong>
                      <p>{formatCurrency(coin.current_price)}</p>
                      {coin.price_change_percentage_24h_in_currency < 0 ? (
                        <strong className="coin-percent red ">
                          {coin.price_change_percentage_24h_in_currency.toFixed(
                            2
                          )}
                          %
                        </strong>
                      ) : (
                        <strong className="coin-percent">
                          +
                          {coin.price_change_percentage_24h_in_currency.toFixed(
                            2
                          )}
                          %
                        </strong>
                      )}
                    </MarketCardStyled>
                  </Link>
                );
              })}
            </div>
          </MarketContainerStyled>
        </WrapperStyled>
      </SectionStyled>
    </>
  );
};

export default MarketData;
