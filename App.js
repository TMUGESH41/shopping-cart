import "./img.css";
// import Layout from "./Layout";
import Nav from "./nav";
import Home from "./Home";
// import Blogs from "./Blogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cardview from "./cardview";
import ADDCARD from "./addcard";
import BUYCARD from "./buycard";

function App() {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="Home" exact element={<Home />} />
          <Route path="cardview" exact element={<Cardview />} />
          <Route path="addcard" exact element={<ADDCARD />} />
          <Route path="buycard" exact element={<BUYCARD />} >
          </Route >
        </Routes >
      </BrowserRouter >

    </>
  )
}

export default App;
