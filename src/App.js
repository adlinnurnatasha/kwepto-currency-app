import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import {
  AppStyled,
  NavStyled,
  BodyStyled,
  FooterStyled,
} from "./styles/Main.styled";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import PriceTracker from "./pages/PriceTracker";
import CurrencyPage from "./pages/CurrencyPage";
import CoinPage from "./pages/CoinPage";
import Exchange from "./pages/Exchange";
import LiveGraphPage from "./pages/LiveGraphPage";
import News from "./pages/News";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [data, setData] = useState({});
  const [currency, setCurrency] = useState("myr");
  const [loading, setLoading] = useState(false);

  // Get Data
  useEffect(() => {
    setLoading(true);
    // Get Coin Data
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=250&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      )
      .then((res) => {
        setCoins(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });

    // Get Crypto Market Data
    axios
      .get(`https://api.coingecko.com/api/v3/global`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currency]);

  // Format Currency
  const formatCurrency = (price) => {
    let newPrice = 0;
    if (price < 0.99 && price > -1) {
      newPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currency.toUpperCase(),
        maximumFractionDigits: 8,
      }).format(price);
    } else {
      newPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currency.toUpperCase(),
      }).format(price);
    }
    return newPrice;
  };

  return (
    <AppStyled>
      <NavStyled>
        <NavBar data={data} currency={currency} setCurrency={setCurrency} />
      </NavStyled>
      <BodyStyled>
        <Routes>
          <Route
            path="/"
            element={
              <PriceTracker
                loading={loading}
                coins={coins}
                currency={currency}
                setCurrency={setCurrency}
                formatCurrency={formatCurrency}
              />
            }
          />
          <Route
            path="/currencies"
            element={
              <CurrencyPage coins={coins} formatCurrency={formatCurrency} />
            }
          />
          <Route path=":coinid" element={<CoinPage />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/live" element={<LiveGraphPage />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </BodyStyled>
      <FooterStyled>
        <Footer />
      </FooterStyled>
    </AppStyled>
  );
};

export default App;
