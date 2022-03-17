import styled from "styled-components/macro";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HomeContainer = styled.div`
  position: relative;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%);
  }
  @media (max-width: 425px) {
    overflow-x: hidden;
  }
`;

export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* margin-bottom: 10em;
  height: 80vh;
  padding: 0em 25em; */
  height: 80vh;

  .banner-img {
    width: clamp(250px, 18vw, 20vw);

    img {
      height: 100%;
      width: 100%;
    }
  }

  .banner-txt {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 2rem;
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

  .home-btn {
    padding: 2em 0em;
    animation: bounceIn;
    animation-duration: 2s;
  }

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;

    .banner-txt {
      align-items: center;
    }
  }
`;

export const Button = styled.button`
  border-radius: 25px;
  background: #f7a528;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: #fff;
  font-size: 20px;
  transition: all 0.2s ease-in-out;

  p {
    font-size: 20px;
    font-weight: 500;
    color: #fff;
  }

  &:hover {
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
