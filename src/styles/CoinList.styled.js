import styled from "styled-components/macro";
import ReactPaginate from "react-paginate";

export const TableContainerStyled = styled.div`
  width: 100%;
  padding: 1em;
  border-radius: 25px;
  width: auto;
  background-color: #fff;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;

  @media (max-width: 425px) {
    padding: 0.25em;
  }
`;

export const CoinTableStyled = styled.table`
  border-collapse: collapse;
  width: 100%;
  strong {
    font-size: clamp(15px, 2.5vw, 20px);
  }

  p {
    font-size: clamp(12px, 2.5vw, 15px);
  }

  th,
  td {
    padding: 0em 0.5em;
    width: 100%;
  }

  th {
    padding-bottom: 1em;
    border-bottom: solid 2px #dfe6e9;
    text-align: right;
  }

  td {
    text-align: right;
  }

  tr {
    width: auto;
    display: flex;
    align-items: center;
    padding: 1.5em;
  }

  tbody > tr {
    &:hover {
      background-color: #ecf0f1;
    }
  }

  tfoot {
    display: grid;
    place-items: center;
    padding: 1.5em;
  }

  .coin-info {
    text-align: left;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5em;

    img {
      width: 30px;
      height: auto;
      border-radius: 25px;
    }

    .coin-name {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.5em;
    }

    @media (max-width: 768px) {
      .coin-name {
        flex-direction: column;
        align-items: flex-start;
        gap: 0em;
      }
    }
  }

  .percentage {
    width: 50%;
  }

  .bold {
    font-weight: bolder;
  }

  .coin-percent {
    color: #6ab04c;
  }

  .red {
    color: #eb4d4b;
  }

  @media (max-width: 425px) {
    tr {
      padding: 1em;
    }
    th {
      text-align: center;
    }
  }

  @media (max-width: 600px) {
    th {
      justify-content: flex-start;
    }
    .visible {
      display: none;
    }

    .hide-mobile {
      display: none;
    }

    .hide-fs {
      display: block;
    }
  }
`;

export const PageNumberStyled = styled(ReactPaginate)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  a {
    margin: 0 0.5em;
    &:active {
      color: #f7a528;
    }
  }
`;
