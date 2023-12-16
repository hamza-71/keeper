import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./components/auth/auth";
import Home from "./Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
