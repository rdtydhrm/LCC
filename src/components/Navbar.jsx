import React, { useState, useEffect } from "react";
import Container from "./Container.jsx";
import LoginModal from "./LoginModal.jsx";
import ProfileModal from "./ProfileModal.jsx";

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  // showDropdown: false | 'agama' | 'berita'
  const [showDropdown, setShowDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  // Login state
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });
  const [showProfile, setShowProfile] = useState(false);

  // Close dropdown saat klik di luar
  useEffect(() => {
    function handleClick(e) {
      if (!e.target.closest('.agama-dropdown-parent') && !e.target.closest('.berita-dropdown-parent') && !e.target.closest('.profile-dropdown-parent')) {
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
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fungsi simulasi login/logout (untuk demo, ganti sesuai backend auth Anda)
  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    setShowLogin(false);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
    setShowProfile(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full p-3 z-50 transition-colors duration-300 ${scrolled ? 'bg-[#fafafa] shadow' : 'bg-transparent'}`}>
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="/src/assets/icons/LogoSatuTempat1.png" alt="Logo" className="w-[74px] h-[74px] mr-[15px]" />
            <span className="text-[32px] text-[#255d60] font-bold">SatuTempat</span>
          </div>
          <div className="flex items-center gap-3">
            <ul className="flex gap-[37px]">
              <li>
                <a href="/" className="text-[22px] font-bold text-[#255d60] relative group px-2">
                  Home
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 group-hover:w-[65px] h-[2px] bg-[#255d60] rounded transition-all duration-300"></span>
                </a>
              </li>
              {/* ...existing code... */}
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
            {/* Animated Search Bar */}
            <div
              className={`relative flex items-center ml-[1px] mr-2 transition-all duration-300 ${searchActive ? 'w-[180px] md:w-[220px]' : 'w-[44px] md:w-[44px]'} bg-transparent rounded-full shadow border-[2px] border-[#255d60]`}
              style={{ boxShadow: '0 2px 8px 0 #e0e7ef80', minHeight: '44px', cursor: 'pointer' }}
              onMouseEnter={() => setSearchActive(true)}
              onMouseLeave={() => setSearchActive(false)}
            >
              <input
                type="text"
                placeholder="Cari tempat"
                className={`transition-all duration-300 bg-transparent outline-none text-[#7a9a9b] text-[15px] font-medium pl-4 pr-12 py-2 ${searchActive ? 'opacity-100 w-full' : 'opacity-0 w-0 pointer-events-none'}`}
                style={{ minWidth: searchActive ? '120px' : '0', zIndex: 1, background: 'transparent' }}
                onFocus={() => setSearchActive(true)}
                onBlur={() => setSearchActive(false)}
              />
              <img
                src="/src/assets/icons/search.png"
                alt="Search"
                className={`absolute top-1/2 w-7 h-7 opacity-90 transition-all duration-300 ${searchActive ? 'right-4 -translate-y-1/2 translate-x-0' : 'left-1/2 -translate-x-1/2 -translate-y-1/2'}`}
                style={{ zIndex: 2 }}
              />
            </div>
            {/* Login/Profile Button */}
            {isLoggedIn ? (
              <div className="relative group profile-dropdown-parent">
                <button
                  onClick={() => setShowDropdown((prev) => prev === 'profile' ? false : 'profile')}
                  className="w-[49px] h-[44px] flex items-center justify-center transition-colors focus:outline-none"
                  title="Profil Anda"
                >
                  <img
                    src="/src/assets/icons/iconProfile.png"
                    alt="Profile"
                    className="rounded-full object-cover"
                  />
                </button>
                {showDropdown === 'profile' && (
                  <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-lg z-50 animate-fadeIn border border-gray-100">
                    <button
                      onClick={() => { setShowProfile(true); setShowDropdown(false); }}
                      className="block w-full text-left px-4 py-2 text-[#255d60] font-semibold hover:bg-[#e6f2f2] rounded-t-lg"
                    >
                      Profil Saya
                    </button>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-red-500 font-semibold hover:bg-red-50 rounded-b-lg"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => setShowLogin(true)}
                className="text-[22px] font-bold text-[#ffffff] bg-[#255d60] rounded-[32px] w-[94px] h-[42px] flex items-center justify-center focus:outline-none transition-colors duration-200 hover:bg-[#0d2426] hover:text-opacity-70"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </Container>
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} onSuccess={handleLogin} />}
      {showProfile && isLoggedIn && <ProfileModal onClose={() => setShowProfile(false)} />}
    </nav>
  );
}
