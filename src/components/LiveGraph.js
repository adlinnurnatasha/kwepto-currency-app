import React from "react";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
// import { createChart } from "lightweight-charts";
//import io from "socket.io-client;";
// import { io } from "socket.io-client";

function StockPrice() {
  // useEffect(() => {
  //   let ws = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");
  //   let stockPriceElement = document.getElementById("stock-price");
  //   let lastPrice = null;

  //   ws.onmessage = (evt) => {
  //     let stockObject = JSON.parse(evt.data);
  //     console.log(stockObject);
  //     let price = parseFloat(stockObject.p).toFixed(4);
  //     stockPriceElement.innerText = price;
  //     stockPriceElement.style.color =
  //       !lastPrice || lastPrice === price
  //         ? "black"
  //         : price > lastPrice
  //         ? "green"
  //         : "red";
  //     lastPrice = price;
  //   };
  // }, []); // run this onload

  // useEffect(() => {
  //   const log = console.log;

  //   const chartProperties = {
  //     width: 1500,
  //     height: 600,
  //     timeScale: {
  //       timeVisible: true,
  //       secondsVisible: false,
  //     },
  //   };

  //   const domElement = document.getElementById("tvchart");
  //   const chart = createChart(domElement, chartProperties);
  //   const candleSeries = chart.addCandlestickSeries();

  //   let symbol = "BTCUSDT";
  //   let interval = "1m";

  //   // switch (new symbol().getsymbol()) {
  //   //   case 0:
  //   //     symbol = "BTCUSDT";
  //   //     break;
  //   //   case 1:
  //   //     symbol = "ETHUSDT";
  //   //     break;
  //   //   case 2:
  //   //     symbol = "XRPUSDT";
  //   //     break;
  //   //   case 3:
  //   //     symbol = "LUNAUSDT";
  //   // }

  //   fetch(
  //     `http://127.0.0.1:9665/fetchAPI?endpoint=https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=1000`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const cdata = data.map((d) => {
  //         return {
  //           time: d[0] / 1000,
  //           open: parseFloat(d[1]),
  //           high: parseFloat(d[2]),
  //           low: parseFloat(d[3]),
  //           close: parseFloat(d[4]),
  //         };
  //       });
  //       candleSeries.setData(cdata);
  //     })
  //     .catch((err) => log(err));

  //   //const socket = io.connect("http://127.0.0.1:4000/");

  //   const socket = io("http://127.0.0.1:4000/", {
  //     transports: ["websocket", "polling"],
  //   });

  //   socket.on("KLINE", (pl) => {
  //     log(pl);
  //     candleSeries.update(pl);
  //   });
  // }, []);

  const [price, setPrice] = useState([]);
  const [time, setTime] = useState([]);

  const data = {
    labels: time,
    datasets: [
      {
        label: "Bitcoin",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: price,
      },
    ],
  };

  function EpochToDate(epoch) {
    if (epoch < 10000000000) epoch *= 1000; // convert to milliseconds (Epoch is usually expressed in seconds, but Javascript uses Milliseconds)
    var epoch = epoch + new Date().getTimezoneOffset() * -1; //for timeZone
    return new Date(epoch);
  }

  useEffect(() => {
    var ws = new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=1089");

    ws.onopen = (evt) => {
      ws.send(
        JSON.stringify({
          ticks: "cryBTCUSD",
        })
      );
    };

    ws.onmessage = (evt) => {
      var data = JSON.parse(evt.data);

      if (data.tick != null) {
        var tickInfo = data.tick;
        var date = EpochToDate(tickInfo.epoch);
        var price = tickInfo.quote;
        setTime((currentTime) => [...currentTime, date]);
        setPrice((currentPrice) => [...currentPrice, price]);
        // console.log("Ticks update: %o", date);
        // console.log(tickInfo.quote);
      }
    };
    return () => ws.close();
  }, []);

  return (
    <div>
      {/* <h1 id="stock-price">---</h1> */}
      {/* <h2 id="tvchart" /> */}
      {/* <script src="rest_api.js"></script> */}
      <Line data={data}></Line>
    </div>
  );
}

export default StockPrice;
