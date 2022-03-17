import React from "react";
import { MarketListStyled } from "../styles/MarketList.styled";

const MarketList = ({ market }) => {
  return (
    <>
      <MarketListStyled>
        <div className="market-name">{market?.market.name}</div>
        {/* <div className="market-pair">
          {market?.base}/{market?.target}
        </div> */}
        <div className="market-volume">
          {market?.volume.toLocaleString(undefined, {
            maximumFractionDigits: 2,
          })}
        </div>
        {market?.trust_score === "green" ? (
          <div className="market-score">
            <div className="green-dot"></div>
            <div>High</div>
          </div>
        ) : (
          ""
        )}
        <div className="trade-button">
          <a href={market?.trade_url}>TRADE</a>
        </div>
      </MarketListStyled>
    </>
  );
};

export default MarketList;
