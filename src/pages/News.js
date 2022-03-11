import React, { useState } from "react";
import "../styles/News.css";

import { useGetCryptosQuery } from "../services/cryptoApi";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { SectionStyled } from "../styles/Main.styled";
import {
  NewsHeaderContainer,
  NewsContainerGridStyled,
  LoadMoreContainer,
} from "../styles/News.styled";
import NewsLogo from "../assets/NewsLogo.svg";
import NewsCard from "../components/NewsCard";

const News = ({ simplified }) => {
  //categorize in cryptocurrency
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data } = useGetCryptosQuery(100);
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 50,
  });
  const [visible, setVisible] = useState(6);
  const showMoreItems = () => {
    setVisible((preValue) => preValue + 3);
  };

  if (!cryptoNews?.value) return <h1>Loading..</h1>;

  return (
    <>
      <SectionStyled>
        <NewsHeaderContainer>
          <div className="news-img">
            <img src={NewsLogo} alt="news-logo" />
          </div>
          <div className="news-txt">
            <h1>CRYPTO NEWS</h1>
            <p>It is always important to be in tune with the latest news.</p>
          </div>
        </NewsHeaderContainer>
      </SectionStyled>
      <SectionStyled>
        <NewsContainerGridStyled>
          {cryptoNews.value.slice(0, visible).map((news) => (
            <NewsCard news={news} />
          ))}
        </NewsContainerGridStyled>
      </SectionStyled>
      <LoadMoreContainer>
        <button onClick={showMoreItems} className="loadBtn">
          Load More
        </button>
      </LoadMoreContainer>
    </>
  );
};

export default News;
