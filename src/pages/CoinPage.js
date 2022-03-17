import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  CoinInfoDataStyled,
  CoinPriceStyled,
  CoinRightContainerStyled,
  CoinDataContainerStyled,
  CoinDataStyled,
  CoinConverterStyled,
  CoinGraphStatsStyled,
  CoinDescriptionStyled,
  CoinContainerStyled,
} from "../styles/CoinPage.styled";
import {
  FaLink,
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
} from "react-icons/fa";
import { CgArrowsExchange } from "react-icons/cg";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import DOMPurify from "dompurify";
import MarketList from "../components/MarketList";
import { CardStyled, MarketHeaderStyled } from "../styles/MarketList.styled";
import { SectionStyled } from "../styles/Main.styled";

const CoinPage = () => {
  const [coin, setCoin] = useState({});
  const [historicalData, setHistoricalData] = useState([]);
  const [days, setDays] = useState(1);
  const params = useParams();
  const [coinValue, setCoinValue] = useState(1);
  const [usdValue, setUsdValue] = useState(
    coin.market_data?.current_price.usd.toLocaleString()
  );

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${params.coinid}`)
      .then((res) => {
        let {
          market_data: {
            current_price: { usd },
          },
        } = res.data;
        setCoin(res.data);
        // console.table(coin.tickers);
        setUsdValue(usd);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.coinid]);

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${params.coinid}/market_chart?vs_currency=usd&days=1`
      )
      .then((res) => {
        setHistoricalData(res.data.prices);
        // console.log(historicalData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    // const floatValue = parseFloat(coinValue) || 0;
    setUsdValue(coinValue * coin.market_data?.current_price.usd);
  }, [coinValue]);

  useEffect(() => {
    // const floatValue = parseFloat(usdValue) || 0;
    setCoinValue(usdValue / coin.market_data?.current_price.usd);
  }, [usdValue]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SectionStyled>
        <CoinContainerStyled>
          <CoinInfoDataStyled>
            {/* Left */}
            <div className="coin-info-card">
              <div className="coin-content">
                <div className="coin-name">
                  <div className="coin-image">
                    <img src={coin.image?.["large"]} alt={coin.name} />
                  </div>
                  <div className="coin-symbol-name">
                    <strong className="coin-symbol">{coin.symbol}</strong>
                    <p>{coin.name}</p>
                  </div>
                </div>

                <div className="coin-rank-categories">
                  <div className="coin-rank">Rank #{coin.coingecko_rank}</div>
                  {coin.categories?.[0] ? (
                    <div className="coin-categories">
                      {coin.categories?.[0]}
                    </div>
                  ) : (
                    <div className="coin-categories">
                      {coin.categories?.[1]}
                    </div>
                  )}
                </div>

                <div className="coin-website-score">
                  <div className="coin-website-main">
                    <p>Website</p>
                    <div className="coin-website">
                      <a href={coin.links?.homepage[0]} target="_blank">
                        <span>
                          <FaLink /> Visit Homepage
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="coin-score-main">
                    <p>Score</p>
                    <div className="coin-score">
                      {coin.coingecko_score?.toFixed(1)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CoinInfoDataStyled>
          {/* Rigth */}
          <CoinRightContainerStyled>
            <CoinPriceStyled>
              <div className="coin-price-change">
                {coin.market_data?.price_change_percentage_24h_in_currency.usd <
                0 ? (
                  <div className="coin-price-red">
                    <div>
                      <FaRegArrowAltCircleDown />
                    </div>
                    <div>
                      {coin.market_data?.price_change_percentage_24h_in_currency.usd.toFixed(
                        2
                      )}
                      %
                    </div>
                  </div>
                ) : (
                  <div className="coin-price-green">
                    <FaRegArrowAltCircleUp />
                    {coin.market_data?.price_change_percentage_24h_in_currency.usd.toFixed(
                      2
                    )}
                    %
                  </div>
                )}
              </div>
              <div className="coin-price">
                <strong>
                  $ {coin.market_data?.current_price.usd.toLocaleString()}
                </strong>
              </div>
            </CoinPriceStyled>
            <CoinDataContainerStyled>
              <CoinDataStyled>
                <div className="market-data">
                  <p>Market Cap</p>
                  {coin.market_data?.market_cap.usd ? (
                    <div className="market-value">
                      $ {coin.market_data?.market_cap.usd.toLocaleString()}
                    </div>
                  ) : (
                    <div className="market-value">Not available</div>
                  )}
                </div>
                <div className="market-data">
                  <p>24 hour Trading Volume</p>
                  {coin.market_data?.total_volume.usd ? (
                    <div className="market-value">
                      $ {coin.market_data?.total_volume.usd.toLocaleString()}
                    </div>
                  ) : (
                    <div className="market-value">Not available</div>
                  )}
                </div>
                <div className="market-data">
                  <p>Fully Diluted Valuation</p>
                  {coin.market_data?.fully_diluted_valuation.usd ? (
                    <div className="market-value">
                      {coin.market_data?.fully_diluted_valuation.usd.toLocaleString()}
                    </div>
                  ) : (
                    <div className="market-value">Not available</div>
                  )}
                </div>
              </CoinDataStyled>
              <CoinDataStyled>
                <div className="market-data">
                  <p>Circulating Supply</p>
                  {coin.market_data?.circulating_supply ? (
                    <div className="market-value">
                      {coin.market_data?.circulating_supply.toLocaleString()}
                    </div>
                  ) : (
                    <div className="market-value">Not available</div>
                  )}
                </div>
                <div className="market-data">
                  <p>Total Supply</p>
                  {coin.market_data?.total_supply ? (
                    <div className="market-value">
                      {coin.market_data?.total_supply.toLocaleString()}
                    </div>
                  ) : (
                    <div className="market-value">Not available</div>
                  )}
                </div>
                <div className="market-data">
                  <p>Max Supply</p>
                  {coin.market_data?.max_supply ? (
                    <div className="market-value">
                      {coin.market_data?.max_supply.toLocaleString()}
                    </div>
                  ) : (
                    <div className="market-value">Not available</div>
                  )}
                </div>
              </CoinDataStyled>
            </CoinDataContainerStyled>
          </CoinRightContainerStyled>
        </CoinContainerStyled>
        <CoinConverterStyled>
          <div className="coin-converter">
            <div className="converter-title">
              {coin.symbol?.toUpperCase()} to USD Converter
            </div>
            <form>
              <div className="coin-amount-value">
                <div className="header-title">
                  <div>
                    <img
                      className="coin-image"
                      src={coin.image?.["large"]}
                      alt={coin.name}
                    />
                  </div>
                  <div className="coin-symbol-name">
                    <div className="coin-symbol">
                      {coin.symbol?.toUpperCase()}
                    </div>
                    <div className="coin-name">{coin.name?.toUpperCase()}</div>
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    className="coin-amount"
                    value={coinValue}
                    onChange={(e) => setCoinValue(e.target.value)}
                  />
                </div>
              </div>
              <div className="converter-symbol">
                <CgArrowsExchange size="3rem" />
              </div>
              <div className="coin-amount-value">
                <div className="header-title">
                  <div>
                    <img
                      className="usd-image"
                      src={require("../assets/dollarsign.png")}
                      alt="usd-symbol"
                    />
                  </div>
                  <div>
                    <div className="coin-symbol">USD</div>
                    <div className="coin-name">United States Dollar</div>
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    className="coin-amount"
                    value={usdValue?.toLocaleString()}
                    onChange={(e) => setUsdValue(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </div>
        </CoinConverterStyled>
        <CoinGraphStatsStyled>
          <div className="coin-graph">
            <Line
              data={{
                labels: historicalData.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: historicalData.map((coin, i) => coin[1]),
                    label: "24hr Price in USD",
                    borderColor: "#F7A528",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
          </div>
          <div className="coin-stats">
            <div className="coin-stats-header">
              {coin.symbol?.toUpperCase()} Price Statistics
            </div>
            <div className="coin-stats-list-main">
              <div className="coin-stats-list">
                <div className="coin-stats-title">{coin.name} Price</div>
                <div className="coin-stats-value">
                  $ {coin.market_data?.current_price.usd.toLocaleString()}
                </div>
              </div>
              <div className="coin-stats-list">
                <div className="coin-stats-title">Market Cap</div>
                <div className="coin-stats-value">
                  {coin.market_data?.market_cap.usd ? (
                    <div className="market-value">
                      $ {coin.market_data?.market_cap.usd.toLocaleString()}
                    </div>
                  ) : (
                    <div className="market-value">Not available</div>
                  )}
                </div>
              </div>
              <div className="coin-stats-list">
                <div className="coin-stats-title">Trading Volume</div>
                <div className="coin-stats-value">
                  {coin.market_data?.total_volume.usd ? (
                    <div className="market-value">
                      $ {coin.market_data?.total_volume.usd.toLocaleString()}
                    </div>
                  ) : (
                    <div className="market-value">Not available</div>
                  )}
                </div>
              </div>
              <div className="coin-stats-list">
                <div className="coin-stats-title">24h Low/24h High</div>
                <div className="coin-stats-value">
                  $ {coin.market_data?.low_24h.usd.toLocaleString()} / ${" "}
                  {coin.market_data?.high_24h.usd.toLocaleString()}
                </div>
              </div>
              <div className="coin-stats-list">
                <div className="coin-stats-title">All time High</div>
                <div className="coin-stats-value">
                  $ {coin.market_data?.ath.usd.toLocaleString()}
                </div>
              </div>
              <div className="coin-stats-list">
                <div className="coin-stats-title">Market Cap Rank</div>
                <div className="coin-stats-value">#{coin?.market_cap_rank}</div>
              </div>
            </div>
          </div>
        </CoinGraphStatsStyled>
        <CoinDescriptionStyled>
          <div className="desc-main">
            <div className="desc-title">What is {coin.name?.toUpperCase()}</div>
            <div
              className="desc-content"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  coin.description?.en ? coin.description.en : ""
                ),
              }}
            ></div>
          </div>
        </CoinDescriptionStyled>

        {/* <CardStyled>
          <div className="market-title">{coin.name} Markets</div>
          <MarketHeaderStyled>
            <div className="source">
              <strong>Source</strong>
            </div>
            <div>
              <strong>24h Volume</strong>
            </div>
            <div>
              <strong>Trust</strong>
            </div>
            <div>
              <strong>Link</strong>
            </div>
          </MarketHeaderStyled>
          {coin.tickers?.slice(0, 6)?.map((market) => {
            return <MarketList key={market?.id} market={market} />;
          })}
        </CardStyled> */}
      </SectionStyled>
    </>
  );
};

export default CoinPage;
