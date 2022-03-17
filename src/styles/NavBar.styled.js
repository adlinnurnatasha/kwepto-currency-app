import styled from "styled-components/macro";

export const NavContainerStyled = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;

  li {
    font-size: clamp(12px, 5vw, 18px);
  }
`;

export const NavLinksStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #fff;
  padding: 1em 2em;

  .logo {
    max-width: 5.5vw;
    min-width: 100px;
    margin-right: 1em;
  }

  img {
    height: 100%;
    width: 100%;
  }

  .links {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
  }

  .end {
    justify-content: flex-end;
  }

  .responsive {
    display: none;
  }

  ul {
    gap: 1.5em;
  }

  li {
    font-size: 1.2em;
    font-weight: 500;

    :hover {
      color: #f7a528;
    }
  }

  @media (max-width: 800px) {
    padding: 0;
    align-items: center;
    justify-content: space-evenly;
    .logo {
      margin: 2rem;
    }
    .links {
      display: none;
    }
    .responsive {
      display: block;
      margin: 2rem;
      z-index: 1;

      .burger {
        font-size: 45px;
        color: #484848;
      }

      ul {
        margin: 0;
        position: absolute;
        top: 120px;
        height: 100vh;
        right: 0%;
        width: 100vw;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
      li {
        color: #484848;
        font-size: 1.25rem;
        font-weight: 800;
        padding: 0 2em;

        &:hover {
          color: #f7a528;
        }
      }
    }
  }
`;

export const CrytoMarketStyled = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: #fff;
  background-color: #f7a528;
  padding: 1em;

  span {
    color: #fff;
    font-weight: bolder;
  }

  p {
    font-size: clamp(12px, 2vw, 15px);
  }
  @media (max-width: 800px) {
    display: none;
  }
`;
