import TentangKami from "./pages/TentangKami";
import Berita from "./pages/Berita";
import BeritaDetail from "./pages/BeritaDetail";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import LandingPage from "./pages/LandingPage";
import Islam from "./pages/Islam.jsx";
import DetailSalman from "./pages/DetailSalman.jsx";

// import Login from "./login.jsx"
// import TAB from "./tab.jsx"

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/agama/islam" element={<Islam />} />
        <Route path="/masjid/salman-al-farisi" element={<DetailSalman />} />
        {/* Tambahkan route lain jika perlu */}
        <Route path="/berita" element={<Berita />} />
        <Route path="/berita/2" element={<BeritaDetail />} />
        <Route path="/tentang" element={<TentangKami />} />
      </Routes>
    </Router>
  );
}
