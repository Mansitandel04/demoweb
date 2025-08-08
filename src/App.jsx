import React from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Home />} path="/dashboard" />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
