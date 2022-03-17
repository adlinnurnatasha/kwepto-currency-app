import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  NavContainerStyled,
  NavLinksStyled,
  CrytoMarketStyled,
} from "../styles/NavBar.styled";
import Logo from "../assets/LogoImg.svg";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import FilterCoinList from "./FilterCoinList";

const NavBar = ({ currency, setCurrency }) => {
  const [data, setData] = useState([]);
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  const closeNav = () => {
    setToggleMenu(false);
  };

  useEffect(() => {
    // Get Crypto Market Data
    axios
      .get(`https://api.coingecko.com/api/v3/global`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return () => {
      setData();
    };
  }, []);

  return (
    <NavContainerStyled>
      <NavLinksStyled>
        <Link to="/">
          <div className="logo" onClick={closeNav}>
            <img src={Logo} alt="kwepto" />
          </div>
        </Link>
        <ul className="links">
          <Link to="/currencies">
            <li>Currencies</li>
          </Link>
          <Link to="/exchanges">
            <li>Exchanges</li>
          </Link>
          <Link to="/news">
            <li>News</li>
          </Link>
          <Link to="/live">
            <li>Live Graph</li>
          </Link>
          <li>Watch List</li>
          <div className="end">
            <FilterCoinList currency={currency} setCurrency={setCurrency} />
          </div>
        </ul>
        <div className="end">
          <FilterCoinList currency={currency} setCurrency={setCurrency} />
        </div>
        <div className="responsive">
          <button className="responsie burger">
            <GiHamburgerMenu onClick={toggleNav} />
          </button>
          {toggleMenu && (
            <ul>
              <Link to="/currencies" onClick={toggleNav}>
                <li>Currencies</li>
              </Link>
              <Link to="/exchanges" onClick={toggleNav}>
                <li>Exchanges</li>
              </Link>
              <Link to="/news" onClick={toggleNav}>
                <li>News</li>
              </Link>
            </ul>
          )}
        </div>
      </NavLinksStyled>
      <CrytoMarketStyled>
        <li>
          <p>
            Cryptos : <span>{data.active_cryptocurrencies}</span>
          </p>
        </li>
        <li>
          <p>
            Markets : <span>{data.markets}</span>
          </p>
        </li>
        <li>
          <p>
            Market Cap: <span>$1,707,443,014,522</span>
          </p>
        </li>
        <li>
          <p>
            24h Vol: <span>$83,173,623,418</span>
          </p>
        </li>
      </CrytoMarketStyled>
    </NavContainerStyled>
  );
};

export default NavBar;
