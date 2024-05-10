import { useState } from "react";

import "./App.css";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Boys from "./pages/Boys";
import Girls from "./pages/Girls";
import Details from "./Subpages/Details";

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [uid, setUid] = useState(null);

  return (
    <>
      <Header isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login setIsLoggedin={setIsLoggedin} setUid={setUid} />}
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/cart"
          element={<Cart uid={uid} isLoggedin={isLoggedin} />}
        />
        <Route path="/boys" element={<Boys />} />
        <Route path="/girls" element={<Girls />} />

        <Route path="/Details"  element={<Details/>}/>
      </Routes>
     
      <Footer />
    </>
  );
}

export default App;
