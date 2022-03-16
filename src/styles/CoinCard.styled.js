import styled from "styled-components/macro";

export const CryptoSearhStyled = styled.form`
  margin: 2.5em 0.5em;

  textarea,
  input {
    outline: none;
  }
  input {
    width: 280px;
    padding: 1em;
    border: 1px solid #dedede;
    border-radius: 15px;
    size: 20px;

    :focus {
      border: 1px solid #f7a528;
      box-shadow: 0 4px 30px #f7a528;
    }
  }

  @media (max-width: 1279px) {
    text-align: center;
  }
`;

export const CurrencyContainerStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, auto));
  column-gap: 2.5em;
  row-gap: 1.5em;
  align-items: flex-start;
  justify-content: flex-start;
  min-height: 50vh;

  @media (max-width: 1279px) {
    justify-content: center;
  }
`;

export const CardCointainerStyled = styled.div`
  background-color: #fff;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  border-radius: 25px;
  padding: 2em;
  width: 255px;
  height: 285px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .graph-row {
    width: 100%;
    height: 50%;
  }
  &:hover {
    box-shadow: 0 4px 30px #f7a528;
  }
`;

export const CoinRowStyled = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 45%;

  p {
    font-size: clamp(10px, 2.5em, 12px);
  }
  .coin-col {
    display: flex;
    flex-direction: column;
    text-align: left;

    img {
      width: 45px;
      border-radius: 50%;
      margin-bottom: 0.2em;
    }

    strong {
      font-size: clamp(12px, 2.5em, 15px);
    }
  }

  .price-col {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.5em;
    strong {
      font-size: clamp(18px, 2.5em, 20px);
    }
    p {
      color: #1a8917;
      text-align: center;
      font-weight: 450;
    }

    .percent {
      padding: 0.5em 1em;
      border-radius: 25px;
      border: 1.5px solid #1a8917;
    }

    .red {
      color: #ff0000;
      border: 1.5px solid #ff0000;
    }
  }
`;

export const CurrencyPageStyled = styled.div`
  margin: 2rem 0 0 0;

  .paginate-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    li {
      margin: 0 2%;
    }
    a {
      font-size: clamp(10px, 2.5vw, 18px);
    }
  }
  .paginate-prev {
  }
  .paginate-next {
  }
  .paginate-disable {
  }
  .paginate-active {
    padding: 0.25% 1.75%;
    background-color: #f7a528;
    border-radius: 25px;
    a {
      color: #fff;
      font-weight: 500;
    }
  }
`;
