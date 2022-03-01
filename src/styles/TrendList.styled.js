import styled from "styled-components";

export const CardCointainerCenterStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CardContainerStyled = styled.div`
  display: flex;
  padding: 1em 0;
  flex-flow: nowrap;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  width: 100%;
`;

export const CardStyled = styled.div`
  width: 15rem;
  padding: 2em 3em;
  background: #ffffff;
  border: 2.5px solid #484848;
  border-radius: 25px;
  margin-left: 2em;
  display: flex;
  align-items: center;
  flex-flow: wrap;
  justify-content: flex-start;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;

  img {
    margin-right: 0.5em;
    width: 25px;
    height: auto;
    border-radius: 25px;
  }

  p {
    padding-left: 0.5em;
  }
`;

export const RowStyled = styled.div`
  justify-content: center;
  padding-top: 10px;
  align-items: center;
  font-size: 1.2rem;
  place-items: center;
`;
