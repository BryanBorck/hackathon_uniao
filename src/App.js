import GlobalStyle from "./components/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Connect from "./components/Connect";
import Transfer from "./components/Transfer";
import Market from "./components/Market";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/connect" exact element={<Connect/>} />
        <Route path="/transfer" exact element={<Transfer/>} />
        <Route path="/market" exact element={<Market/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;