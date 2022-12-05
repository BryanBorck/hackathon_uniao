import GlobalStyle from "./components/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Connect from "./components/Connect";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/connect" exact element={<Connect/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;