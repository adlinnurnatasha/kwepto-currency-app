import React, { useState, useEffect } from "react";
import {
  HeaderStyled,
  LoadingScreenStyled,
  SectionStyled,
} from "../styles/Main.styled";
import {
  ListHeaderStyled,
  ExchangeInfoStyled,
  PageNumberStyled,
  ExchangeBannerStyled,
  CardStyled,
} from "../styles/ExchangeList.styled";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";
import ExchangeList from "../components/ExchangeList";
import ExchangeBanner from "../assets/ExchangeBanner.svg";

function Exchange({ loading, exchanges }) {
  const [pageNumber, setPageNumber] = useState(0);
  const exchangesPerPage = 10;
  const pagesVisited = pageNumber * exchangesPerPage;
  const pageCount = Math.ceil(exchanges?.length / exchangesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  if (loading) {
    return (
      <LoadingScreenStyled>
        <h1>Loading...</h1>
      </LoadingScreenStyled>
    );
  }

  return (
    <>
      <SectionStyled>
        <HeaderStyled>
          <ExchangeBannerStyled>
            <img src={ExchangeBanner} alt="Exchange Banner" />
          </ExchangeBannerStyled>
          <h1>EXCHANGES</h1>
          <p>Top Exchanges ranked by trading volume</p>
        </HeaderStyled>
        <CardStyled>
          <ListHeaderStyled>
            <strong className="center">#</strong>
            <ExchangeInfoStyled>
              <strong>Exchange</strong>
            </ExchangeInfoStyled>
            <strong>Trust Score</strong>
            <strong>24hr Volume</strong>
            <strong>24hr Volume Normalized</strong>
            <strong>Website</strong>
          </ListHeaderStyled>
          {exchanges
            ?.slice(pagesVisited, pagesVisited + exchangesPerPage)
            ?.map((exchange) => {
              return <ExchangeList key={exchange?.id} exchange={exchange} />;
            })}
        </CardStyled>
        <SectionStyled>
          <PageNumberStyled
            previousLabel={<RiArrowLeftSFill />}
            nextLabel={<RiArrowRightSFill />}
            pageCount={pageCount}
            onPageChange={changePage}
            pageRangeDisplayed="10"
          />
        </SectionStyled>
      </SectionStyled>
    </>
  );
}

export default Exchange;
