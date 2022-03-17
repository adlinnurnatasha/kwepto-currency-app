import styled from "styled-components/macro";

export const CoinContainerStyled = styled.div`
  /* base styling */
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 2em;

  /* background-card */
  .coin-info-card {
    background-color: white;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 2em;

    @media (max-width: 768px) {
      .coin-info-card {
        width: 100%;
      }
    }
  }
  /* card-content */
  .coin-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2em;
    width: 100%;
    /* coin-name - 1st row*/
    .coin-name {
      display: flex;
      flex-direction: row;
      align-items: center;
      .coin-symbol-name {
        margin-left: 1em;
        display: flex;
        flex-direction: column;
        text-transform: uppercase;
        justify-content: flex-start;
        line-height: 1;
        p {
          font-weight: 400;
          font-size: clamp(30px, 2.5vw, 45px);
        }
        strong {
          font-weight: 800;
          font-size: clamp(20px, 2.5vw, 30px);
        }
      }
      img {
        width: 150px;
        height: auto;
      }
      @media (max-width: 768px) {
        .coin-symbol-name {
          line-height: 1.2;
        }
        img {
          width: 100px;
          height: auto;
        }
      }
    }
    /* coin-rank - 2nd row */
    .coin-rank-categories {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      gap: 1em;

      @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
      }
      .coin-rank {
        background-color: #d3d3d3;
        padding: 1em 2em;
        border-radius: 50px;
      }
      .coin-categories {
        background-color: #d3d3d3;
        padding: 15px;
        border-radius: 50px;
      }
    }
    /* coin-website - 3nd row */
    .coin-website-score {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      p {
        font-weight: 400;
        font-size: clamp(12px, 1.5vw, 15px);
        padding-bottom: 0.5em;
      }
      @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
    .coin-website {
      padding: 0.5em 1em;
      border-radius: 10px;
      background-color: #484848;
    }
    a {
      color: white;
    }
    span {
      color: white;
      font-weight: 400;
      text-align: center;
      font-size: clamp(12px, 1.25vw, 15px);
    }
    .coin-score-main {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .coin-score {
      background-color: #d4f5c8;
      color: #287e00;
      font-size: clamp(20px, 2vw, 30px);
      font-weight: bold;
      padding: 20px;
      border-radius: 20px;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2em;
  }
`;
export const CoinInfoDataStyled = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
export const CoinRightContainerStyled = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
export const CoinPriceStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, auto));
  align-items: flex-start;
  justify-content: flex-start;
  .coin-price {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    strong {
      font-size: clamp(50px, 4vw, 120px);
      font-weight: 800;
    }
  }
  .coin-price-change {
    width: 100px;
    margin-bottom: 10px;
  }
  .coin-market-main {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 1.5em;
  }
  .coin-price-red {
    background-color: #f5c8c8;
    color: #7e0000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 6rem;
    border-radius: 50px;
    font-size: 20px;
    font-weight: bold;
    column-gap: 3px;
  }
  .coin-price-green {
    background-color: #d4f5c8;
    color: #287e00;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 6rem;
    border-radius: 50px;
    font-size: 20px;
    font-weight: bold;
    column-gap: 3px;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;
export const CoinDataContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 1em;
  @media (max-width: 600px) {
    flex-direction: column;
    width: 90%;
  }
`;
export const CoinDataStyled = styled.div`
  background-color: #fff;
  border-radius: 25px;
  padding: 1em;
  width: 30vh;

  @media (max-width: 768px) {
    width: 100%;
  }
  .market-data {
    margin: 20px;
    box-sizing: border-box;
    p {
      font-size: clamp(12px, 1.5vw, 15px);
    }
  }
  .market-value {
    font-weight: 800;
    margin-top: 10px;
    box-sizing: border-box;
  }
`;

// Ends Here
export const CoinConverterStyled = styled.div`
  margin: 2em 0;
  display: flex;
  justify-content: center;
  width: 100%;
  color: #484848;
  .coin-converter {
    width: 100%;
    @media (max-width: 768px) {
      width: 90%;
    }
  }
  .converter-title {
    font-size: clamp(18px, 3vw, 25px);
    font-weight: 800;
    text-align: center;
    margin-bottom: 1em;
  }
  form {
    display: flex;
    justify-content: space-evenly;
    background-color: white;
    width: 100%;
    border-radius: 30px;
    box-sizing: border-box;
  }
  .coin-amount-value {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 20px;
    font-weight: bold;
    padding: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: space-evenly;
      text-align: center;
      input {
        text-align: center;
      }
    }
  }
  .header-title {
    display: flex;
    align-items: center;
    column-gap: 10px;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  img.coin-image {
    height: 50px;
    width: 50px;

    @media (max-width: 768px) {
      height: 40px;
      width: 40px;
    }
  }
  img.usd-image {
    height: 60px;
    width: 60px;

    @media (max-width: 768px) {
      height: 45px;
      width: 45px;
    }
  }
  .coin-symbol {
    font-size: clamp(8px, 1.5vw, 12px);
  }
  .coin-name {
    font-size: clamp(12px, 1.5vw, 20px);
  }
  input {
    border: 1px solid #d3d3d3;
    border-radius: 20px;
    padding: 10px;
    width: 100%;
    font-weight: bold;
    font-size: clamp(12px, 2vw, 20px);
    box-sizing: border-box;

    @media (max-width: 768px) {
      padding: 5px;
    }
  }
  .converter-symbol {
    color: #484848;
    display: flex;
    align-items: center;
  }
`;

export const CoinGraphStatsStyled = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  color: #484848;
  column-gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
  }
  .coin-graph {
    background-color: white;
    border-radius: 20px;
    padding: 50px;
    width: 60%;
    box-sizing: border-box;

    @media (max-width: 768px) {
      width: 90%;
      height: auto;
      padding: 10px;
    }
  }
  .coin-stats {
    background-color: white;
    border-radius: 20px;
    padding: 20px;
    box-sizing: border-box;
    width: 40%;

    @media (max-width: 768px) {
      width: 90%;
    }
  }
  .coin-stats-header {
    display: flex;
    justify-content: center;
    font-size: clamp(20px, 2vw, 30px);
    font-weight: bold;
    margin-bottom: 40px;
  }
  .coin-stats-list {
    display: flex;
    justify-content: space-between;
    margin: 30px;
    align-items: flex-start;
    @media (max-width: 425px) {
      flex-direction: column;
      align-items: center;
    }
  }
  .coin-stats-title {
  }
  .coin-stats-value {
    font-weight: bold;
    text-align: right;
  }
`;

export const CoinDescriptionStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2em 0;
  .desc-main {
    @media (max-width: 768px) {
      width: 90%;
      text-align: justify;
      text-justify: inter-word;
      margin: auto;
    }
  }
  .desc-title {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #484848;
  }
  .desc-content {
    color: #484848;
    line-height: 2;
  }
`;
