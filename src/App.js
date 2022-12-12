import React, {useState} from 'react';
import GlobalStyle from "./components/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Connect from "./components/Connect";
import Transfer from "./components/Transfer";
import Market from "./components/Market";
import Aposent from "./components/Aposentar";
import Web3Context from "./contexts/Web3Context";

function App() {
  
  const [signer, setSigner] = useState(null);
  const[provider, setProvider] = useState(null);
  const [address, setAddress] = useState("");

  const context = {
    signer,
    provider,
    address,
    setSigner,
    setProvider,
    setAddress
  }
  return (
    <Web3Context.Provider value={context}>
      <BrowserRouter>
        <GlobalStyle/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/connect" exact element={<Connect/>} />
          <Route path="/transfer" exact element={<Transfer/>} />
          <Route path="/market" exact element={<Market/>} />
          <Route path="/aposent" exact element={<Aposent/>} />
        </Routes>
      </BrowserRouter>
    </Web3Context.Provider>
    
  );
}

export default App;