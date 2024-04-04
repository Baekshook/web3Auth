import Web3Auths from "../src/components/Web3Auths";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { NftPage } from "../src/components/Nftpage";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Web3Auths />} />
        <Route path="/nft" element={<NftPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
