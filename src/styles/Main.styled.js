import styled from "styled-components/macro";

// Base Style for App
export const AppStyled = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

// Base Style for NavBar
export const NavStyled = styled.nav`
  grid-row-start: 1;
`;

// Base style for MainSection
export const BodyStyled = styled.div`
  grid-row-start: 2;
  width: 100%;
  @media (max-width: 425px) {
    overflow-x: hidden;
  }
`;

// Base style for Footer
export const FooterStyled = styled.footer`
  grid-row-start: 3;
  margin-top: 2em;
`;

// For headers and big text
export const HeaderStyled = styled.div`
  text-align: center;
  margin-bottom: 1.5em;
  line-height: 1.2;
  h1 {
    font-size: clamp(35px, 5.5vw, 50px);
    font-weight: 800;
  }
  p {
    font-size: clamp(18px, 2.5vw, 25px);
    font-weight: 400;
  }

  @media (max-width: 375px) {
    text-align: center;
  }
`;

// Loading Screen Style
export const LoadingScreenStyled = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;

  h1 {
    font-size: 3rem;
  }
`;

// To give center text and items within a component
export const SectionStyled = styled.section`
  margin-inline: auto;
  max-width: 1280px;
  margin-top: 2em;
`;

export const WrapperStyled = styled.div`
  padding: 3em 0em;
`;

// Center Everyhthing
export const CenterEverythingStyled = styled.div`
  display: grid;
  place-items: center;
`;
