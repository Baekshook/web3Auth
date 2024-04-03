import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import { NftPage } from "@components/Nftpage";

function App() {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #bf4f74;
  `;

  // Create a Wrapper component that'll render a <section> tag with some styles
  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `;

  return (
    <>
      <GlobalStyle />
      <NftPage />
    </>
  );
}

export default App;
