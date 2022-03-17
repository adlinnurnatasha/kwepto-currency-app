import styled from "styled-components";

export const CardStyled = styled.div`
  display: grid;
  place-items: center;
  padding: 1em;
  border-radius: 25px;
  width: 100%;
  background-color: white;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  margin-top: 20px;
  .market-title {
    font-size: clamp(20px, 2.5vw, 30px);
    font-weight: bold;
    margin-bottom: 20px;
    color: #484848;
  }
`;

export const MarketHeaderStyled = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  width: 50vw;
  border-bottom: solid 2px #dfe6e9;
  text-align: right;
  padding: 1em;
  .source {
    text-align: left;
  }
`;

export const MarketListStyled = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  text-align: right;
  align-items: center;
  padding: 10px;
  width: 50vw;
  .market-name {
    text-align: left;
    box-sizing: border-box;
  }
  .market-pair {
    font-weight: bold;
    box-sizing: border-box;
  }
  .market-score {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    background-color: #00c118;
    margin-left: 100px;
    border-radius: 20px;
    padding: 10px;
    color: white;
    font-weight: bold;
  }
  .green-dot {
    box-sizing: border-box;
    background-color: #007c0f;
    width: 20px;
    border-radius: 20px;
  }
`;
