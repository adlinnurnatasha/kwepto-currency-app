import React from "react";
import { CoinTableStyled } from "../styles/CoinList.styled";

const CoinList = ({ coin, formatCurrency }) => {
  return (
    <CoinTableStyled>
      <tbody>
        <tr>
          <td className="coin-info">
            <img src={coin.image} alt={coin.name} />
            <div className="coin-name">
              <strong>{coin.name}</strong>
              <p>{coin.symbol.toUpperCase()}</p>
            </div>
          </td>
          <td>
            <p>{formatCurrency(coin.current_price)}</p>
          </td>
          <td className="percentage">
            {coin.price_change_percentage_24h_in_currency < 0 ? (
              <p className="coin-percent bold red ">
                {coin.price_change_percentage_24h_in_currency.toFixed(2)}%
              </p>
            ) : (
              <p className="coin-percent bold ">
                +{coin.price_change_percentage_24h_in_currency.toFixed(2)}%
              </p>
            )}
          </td>
          <td className="visible">
            <p>{formatCurrency(coin.market_cap)}</p>
          </td>
        </tr>
      </tbody>
    </CoinTableStyled>
  );
};

export default CoinList;
