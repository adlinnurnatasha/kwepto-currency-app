import styled from "styled-components/macro";

export const DropDownContainer = styled.div`
  .dropdown-container {
    padding: 0.5em 1.5em;
    text-align: center;
    background-color: #484848;
    color: #ffff;
    border-radius: 25px;
    :hover {
      cursor: pointer;
    }
  }
  .is-open {
    background-color: #fff;
    color: #484848;
    display: grid;
    place-content: center;
    .Dropdown-option {
      font-size: 25px;
      margin: 0.5em 0em;
      width: 100%;
      :hover {
        background-color: #f7a528;
      }
    }
  }
`;
