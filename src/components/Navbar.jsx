import React, { useState } from "react";
import Container from "./Container.jsx";
import LoginModal from "./LoginModal.jsx";

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  // showDropdown: false | 'agama' | 'berita'
  const [showDropdown, setShowDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close dropdown saat klik di luar
  React.useEffect(() => {
    function handleClick(e) {
      if (!e.target.closest('.agama-dropdown-parent') && !e.target.closest('.berita-dropdown-parent')) {
        setShowDropdown(false);
      }
    }
    if (showDropdown) {
      document.addEventListener('mousedown', handleClick);
    } else {
      document.removeEventListener('mousedown', handleClick);
    }
    return () => document.removeEventListener('mousedown', handleClick);
  }, [showDropdown]);

  // Change navbar background on scroll
  React.useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full p-3 z-50 transition-colors duration-300 ${scrolled ? 'bg-[#fafafa] shadow' : 'bg-transparent'}`}>
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="/src/assets/icons/LogoSatuTempat1.png" alt="Logo" className="w-[74px] h-[74px] mr-[15px]" />
            <span className="text-[32px] text-[#255d60] font-bold">SatuTempat</span>
          </div>
          <div className="flex items-center gap-6">
            <ul className="flex gap-[37px]">
              <li>
                <a href="/" className="text-[22px] font-bold text-[#255d60] relative group px-2">
                  Home
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 group-hover:w-[65px] h-[2px] bg-[#255d60] rounded transition-all duration-300"></span>
                </a>
              </li>
              
              <li className="relative agama-dropdown-parent">
                <button
                  type="button"
                  className="text-[22px] font-bold text-[#255d60] relative group px-2 flex items-center focus:outline-none"
                  onClick={() => setShowDropdown((prev) => prev === 'agama' ? false : 'agama')}
                >
                  Agama
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 group-hover:w-[75px] h-[2px] bg-[#255d60] rounded transition-all duration-300"></span>
                </button>
                {showDropdown === 'agama' && (
                  <ul className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[130px] bg-white shadow-lg rounded-lg z-50 animate-fadeIn">
                    <li><a href="/agama/islam" className="block px-4 py-2 hover:bg-[#e6f2f2] text-[#255d60] font-bold ">Islam</a></li>
                    <li><a href="/agama/kristen" className="block px-4 py-2 hover:bg-[#e6f2f2] text-[#255d60] font-bold ">Kristen</a></li>
                    <li><a href="/agama/katolik" className="block px-4 py-2 hover:bg-[#e6f2f2] text-[#255d60] font-bold ">Katolik</a></li>
                    <li><a href="/agama/hindu" className="block px-4 py-2 hover:bg-[#e6f2f2] text-[#255d60] font-bold ">Hindu</a></li>
                    <li><a href="/agama/buddha" className="block px-4 py-2 hover:bg-[#e6f2f2] text-[#255d60] font-bold ">Buddha</a></li>
                    <li><a href="/agama/konghucu" className="block px-4 py-2 hover:bg-[#e6f2f2] text-[#255d60] font-bold ">Konghucu</a></li>
                  </ul>
                )}
              </li>
              <li className="relative berita-dropdown-parent">
                <button
                  type="button"
                  className="text-[22px] font-bold text-[#255d60] relative group px-2 flex items-center focus:outline-none"
                  onClick={() => setShowDropdown((prev) => prev === 'berita' ? false : 'berita')}
                >
                  Berita
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 group-hover:w-[67px] h-[2px] bg-[#255d60] rounded transition-all duration-300"></span>
                </button>
                {showDropdown === 'berita' && (
                  <ul className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[150px] bg-white shadow-lg rounded-lg z-50 animate-fadeIn">
                    <li><a href="/berita" className="block px-4 py-2 hover:bg-[#e6f2f2] text-[#255d60] font-bold ">Nasional</a></li>
                    <li><a href="/berita/internasional" className="block px-4 py-2 hover:bg-[#e6f2f2] text-[#255d60] font-bold ">Internasional</a></li>
                  </ul>
                )}
              </li>
              <li>
                <a href="/tentang" className="text-[22px] font-bold text-[#255d60] relative group px-2">
                  Tentang
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 group-hover:w-[83px] h-[2px] bg-[#255d60] rounded transition-all duration-300"></span>
                </a>
              </li>
            </ul>
            <img src="/src/assets/icons/search.png" alt="Search" className="w-[31px] h-[31px] ml-[65px]" />
            <button
              onClick={() => setShowLogin(true)}
              className="text-[22px] font-bold text-[#ffffff] bg-[#255d60] rounded-[32px] w-[94px] h-[42px] flex items-center justify-center focus:outline-none transition-colors duration-200 hover:bg-[#0d2426] hover:text-opacity-70"
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
