import styled from "styled-components/macro";

export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  margin-bottom: 2em;

  .banner-img {
    max-width: 18vw;
    min-width: 325px;

    img {
      height: 100%;
      width: 100%;
    }
  }

  .banner-txt {
    width: 45%;
    line-height: 1;
    h1 {
      font-size: clamp(75px, 6vw, 125px);
      font-weight: 850;
    }
    p {
      font-size: clamp(20px, 2.5vw, 30px);
      font-weight: 500;
    }
  }

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;

    .banner-txt {
      text-align: center;
      width: 100%;
    }
  }
`;
