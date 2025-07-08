import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import LandingPage from "./pages/LandingPage";
import Islam from "./pages/Islam.jsx";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/agama/islam" element={<Islam />} />
        {/* Tambahkan route lain jika perlu */}
      </Routes>
    </Router>
  );
}
