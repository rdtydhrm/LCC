import React, { useState } from "react";
import Container from "./Container.jsx";
import LoginModal from "./LoginModal.jsx";

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#fafafa] p-3 shadow z-50">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="src/assets/icons/LogoSatuTempat1.png" alt="Logo" className="w-[74px] h-[74px] mr-[15px]" />
            <span className="text-[32px] text-[#255d60] font-bold">SatuTempat</span>
          </div>
          <div className="flex items-center gap-6">
            <ul className="flex gap-[37px]">
              <li><a href="#" className="text-[22px] font-bold text-[#255d60]">Home</a></li>
              <li><a href="#" className="text-[22px] font-bold text-[#255d60]">Agama</a></li>
              <li><a href="#" className="text-[22px] font-bold text-[#255d60]">Berita</a></li>
              <li><a href="#" className="text-[22px] font-bold text-[#255d60]">Tentang</a></li>
            </ul>
            <img src="/src/assets/icons/search.png" alt="Search" className="w-[31px] h-[31px] ml-[65px]" />
            <button
              onClick={() => setShowLogin(true)}
              className="text-[22px] font-bold text-[#ffffff] bg-[#255d60] rounded-[32px] w-[94px] h-[42px] flex items-center justify-center focus:outline-none"
            >
              Login
            </button>
          </div>
        </div>
      </Container>
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </nav>
  );
}
