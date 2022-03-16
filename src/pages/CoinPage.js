import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

const CoinPage = () => {
  const [coin, setCoin] = useState({});
  const { coinid } = useParams();
  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${coinid}`)
      .then((res) => {
        setCoin(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>This is a coin page</h1>
      <p>{coinid}</p>
      <h1>{coin.id}</h1>
    </div>
  );
};

export default CoinPage;
