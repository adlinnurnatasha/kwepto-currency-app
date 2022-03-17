import styled from "styled-components/macro";

export const MarketInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .market-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 1;

    h1 {
      font-size: clamp(40px, 3.5vw, 65px);
      font-weight: 700;
    }
    p {
      font-size: clamp(20px, 2.5vw, 30px);
      font-weight: 500;
      color: #8f8f8f;
      margin: 1.5em 0em;
    }
    @media (max-width: 450px) {
      .market-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .info-card-container {
    width: 100%;
    align-items: center;
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(auto-fit, 295px);
    column-gap: 1.5em;
    row-gap: 1.5em;
    align-items: center;
    justify-content: center;

    .info-card {
      background-color: #fff;
      box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
        rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
      border-radius: 25px;
      width: 295px;
      height: 302px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;

      .circle {
        margin-bottom: 1em;
        width: 86px;
        height: 86px;
        border-radius: 50%;
        background-color: #fff6ea;
        display: flex;
        align-items: center;
        justify-content: center;

        .larger {
          width: 75px;
        }
        img {
          width: 56px;
        }
      }
    }

    p {
      font-size: 14px;
      font-weight: 800;
    }
    strong {
      font-size: 36px;
      font-weight: 900;
      color: #f7a528;
    }
  }
  .info-text {
    text-align: center;
  }
`;

export const MarketContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  .market-txt {
    width: 50%;
    line-height: 1.3;
    h1 {
      font-size: clamp(40px, 3.5vw, 60px);
      font-weight: 700;
    }
    p {
      font-size: clamp(20px, 2.5vw, 30px);
      font-weight: 500;
      color: #8f8f8f;
      margin: 1em 0em;
    }
    button {
      color: #fff;
      font-size: 30px;
      font-weight: 600;
      padding: 0.5em 2em;
      border-radius: 25px;
      background-color: #f8a122;
      animation: pulse infinite;
      animation-duration: 1s;
    }
  }
  .market-coin {
    display: grid;
    grid-template-columns: repeat(auto-fit, 250px);
    align-items: center;
    justify-content: center;
    column-gap: 1em;
    row-gap: 1em;
    width: 50%;
  }

  @media (max-width: 425px) {
    .market-txt {
      width: 80%;
    }
  }
  @media (max-width: 1030px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    .market-coin {
      width: 100%;
    }
    .market-txt {
      width: 100%;
      text-align: center;
      button {
        font-size: 25px;
        margin-bottom: 1.75em;
      }
    }
  }
`;

export const MarketCardStyled = styled.div`
  background-color: #fff;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  border-radius: 25px;
  width: 250px;
  height: 250px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;

  img {
    width: 67px;
    border-radius: 25px;
  }
  strong {
    font-size: 18px;
  }
  p {
    font-size: 20px;
    font-weight: 400;
    color: #8a8a8a;
  }

  .coin-percent {
    color: #1a8917;
    font-size: 24px;
  }

  .red {
    color: #ff0000;
  }
`;
