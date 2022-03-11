import React from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { CardCointainerStyled, CoinRowStyled } from "../styles/CoinCard.styled";

const CoinCard = ({ coin, formatCurrency }) => {
  const sparkLine = coin.sparkline_in_7d.price
    .slice(157, 167)
    .map((data) => data);

  return (
    <CardCointainerStyled>
      <CoinRowStyled>
        <div className="coin-col">
          <img src={coin.image} alt={coin.name} />
          <strong>{coin.name}</strong>
          <p>{coin.symbol.toUpperCase()}</p>
        </div>
        <div className="price-col">
          <strong>{formatCurrency(coin.current_price)}</strong>
          {coin.price_change_percentage_24h_in_currency < 0 ? (
            <p className="percent bold red ">
              {coin.price_change_percentage_24h_in_currency.toFixed(2)}%
            </p>
          ) : (
            <p className="percent bold ">
              +{coin.price_change_percentage_24h_in_currency.toFixed(2)}%
            </p>
          )}
        </div>
      </CoinRowStyled>
      <div className="graph-row">
        {coin.price_change_percentage_24h_in_currency < 0 ? (
          <Sparklines data={sparkLine} width="100" height="60">
            <SparklinesLine color="red" />
          </Sparklines>
        ) : (
          <Sparklines data={sparkLine} width="100" height="60">
            <SparklinesLine color="green" />
          </Sparklines>
        )}
      </div>
    </CardCointainerStyled>
  );
};

export default CoinCard;
