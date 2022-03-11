import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import CoinCard from "../components/CoinCard";
import { SectionStyled, HeaderStyled } from "../styles/Main.styled";
import {
  CryptoSearhStyled,
  CurrencyContainerStyled,
  CurrencyPageStyled,
} from "../styles/CoinCard.styled";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const CurrencyPage = ({ coins, formatCurrency }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const coinsPerPage = 24;
  const pagesVisited = pageNumber * coinsPerPage;
  const pageCount = Math.ceil(coins.length / coinsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const [search, setSearch] = useState("");
  let filterCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <SectionStyled>
        <HeaderStyled>
          <h1>CRYPTOCURRENCIES</h1>
          <p>Today's Cryptocurrency Prices by Market Cap</p>
        </HeaderStyled>
      </SectionStyled>
      <SectionStyled>
        <CryptoSearhStyled>
          <input type="text" onChange={handleChange} />
        </CryptoSearhStyled>
        <CurrencyContainerStyled>
          {filterCoins
            .slice(pagesVisited, pagesVisited + coinsPerPage)
            .map((coin) => (
              <Link to={`/${coin.id}`}>
                <CoinCard
                  coin={coin}
                  key={coin.symbol}
                  formatCurrency={formatCurrency}
                />
              </Link>
            ))}
        </CurrencyContainerStyled>
        <CurrencyPageStyled>
          <ReactPaginate
            previousLabel={<RiArrowLeftSFill />}
            nextLabel={<RiArrowRightSFill />}
            pageCount={pageCount}
            onPageChange={changePage}
            pageRangeDisplayed="11"
            containerClassName={"paginate-container"}
            previousLinkClassName={"paginate-prev"}
            nextLinkClassName={"paginate-next"}
            disabledClassName={"paginate-disable"}
            activeClassName={"paginate-active"}
          />
        </CurrencyPageStyled>
      </SectionStyled>
    </>
  );
};

export default CurrencyPage;
