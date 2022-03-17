import React from "react";
import {
  ExchangeListStyled,
  ExchangeInfoStyled,
} from "../styles/ExchangeList.styled";

const ExchangeList = ({ exchange }) => {
  return (
    <ExchangeListStyled>
      <p className="center">{exchange?.trust_score_rank}</p>
      <ExchangeInfoStyled>
        <img src={exchange?.image} alt={exchange?.name} />
        <div>
          <strong>{exchange?.name}</strong>
          <p>Centralized</p>
        </div>
      </ExchangeInfoStyled>
      <div className="trust-main">
        <div className="rank-bar">
          {exchange?.trust_score === 10 ? (
            <div className="main-bar">
              <div className="green-bar-10"></div>
            </div>
          ) : exchange?.trust_score === 9 ? (
            <div className="main-bar">
              <div className="green-bar-9"></div>
            </div>
          ) : exchange?.trust_score === 8 ? (
            <div className="main-bar">
              <div className="green-bar-8"></div>
            </div>
          ) : exchange?.trust_score === 7 ? (
            <div className="main-bar">
              <div className="green-bar-7"></div>
            </div>
          ) : exchange?.trust_score === 6 ? (
            <div className="main-bar">
              <div className="green-bar-6"></div>
            </div>
          ) : exchange?.trust_score === 5 ? (
            <div className="main-bar">
              <div className="green-bar-5"></div>
            </div>
          ) : exchange?.trust_score === 4 ? (
            <div className="main-bar">
              <div className="green-bar-4"></div>
            </div>
          ) : (
            ""
          )}
        </div>
        <p>{exchange?.trust_score}</p>
      </div>
      <p>{exchange?.trade_volume_24h_btc_normalized.toLocaleString()}</p>
      <p>{exchange?.trade_volume_24h_btc.toLocaleString()}</p>
      <div className="website-url">
        <a href={exchange?.url}>Visit</a>
      </div>
    </ExchangeListStyled>
  );
};

export default ExchangeList;
