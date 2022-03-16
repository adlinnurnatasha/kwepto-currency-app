import styled from "styled-components/macro";

export const FooterContainerStyled = styled.footer`
  background-color: #484848;
  .footer-img {
    height: 100%;
    img {
      height: 100%;
      width: 100%;
    }
  }

  .footer-txt {
    padding: 2em;
    p {
      text-align: center;
      font-size: clamp(15px, 1.5vw, 20px);
      font-weight: 400;
      color: #fff;
    }
  }
`;
