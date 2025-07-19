import React, { useState } from "react";
import RegisterModal from "./RegisterModal.jsx";
import RegisterPasswordModal from "./RegisterPasswordModal.jsx";

export default function LoginModal({ onClose, onSuccess }) {
  const [showRegister, setShowRegister] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);

  if (showRegisterPassword) {
    return <RegisterPasswordModal onClose={onClose} onSwitchToLogin={() => { setShowRegister(false); setShowRegisterPassword(false); }} onSuccess={onSuccess} />;
  }

  if (showRegister) {
    return <RegisterModal onClose={onClose} onSwitchToLogin={() => setShowRegister(false)} onNext={() => setShowRegisterPassword(true)} onSuccess={onSuccess} />;
  }

  // Handler untuk submit login
  const handleSubmit = (e) => {
    e.preventDefault();
    // ...validasi login di sini (atau API call)...
    if (onSuccess) onSuccess(); // Panggil onSuccess jika login sukses
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-white shadow-2xl p-8 w-[540px] max-w-full relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold"
          aria-label="Tutup"
        >
          ×
        </button>
        <h2 className="text-center text-[28px] font-bold text-[#214b4e] mb-6">Selamat Datang Kembali!</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-[#214b4e] font-semibold mb-1">Alamat Email</label>
            <input type="email" placeholder="Masukkan email anda" className="w-full border border-gray-400 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-[#2a7477]" />
          </div>
          <div>
            <label className="block text-[#214b4e] font-semibold mb-1">Kata sandi</label>
            <div className="relative">
              <input type="password" placeholder="Masukkan kata sandi anda" className="w-full border border-gray-400 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-[#2a7477] pr-10" />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="#214b4e" strokeWidth="2" d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12Z"/><circle cx="12" cy="12" r="3" stroke="#214b4e" strokeWidth="2"/></svg>
              </span>
            </div>
          </div>
          <button type="submit" className="w-full bg-[#215d60] text-white rounded-lg py-3 font-semibold text-lg mt-2 hover:bg-[#2a7477] transition">Masuk</button>
        </form>
        <div className="text-center text-[#214b4e] mt-4 mb-2">Atau masuk dengan:</div>
        <div className="flex gap-4 mb-4">
          <button className="flex-1 border border-[#214b4e] rounded-lg py-2 flex items-center justify-center gap-2 text-[#214b4e] font-medium bg-white hover:bg-gray-50 transition">
            <img src="src\assets\icons\google-svgrepo-com.svg" alt="Google" className="w-5 h-5" />
            Google
          </button>
          <button className="flex-1 border border-[#214b4e] rounded-lg py-2 flex items-center justify-center gap-2 text-[#214b4e] font-medium bg-white hover:bg-gray-50 transition">
            <img src="src\assets\icons\facebook-svgrepo-com.svg" alt="Facebook" className="w-5 h-5" />
            Facebook
          </button>
        </div>
        <div className="text-center text-[#214b4e] mt-2">
          Belum punya akun? <button type="button" onClick={() => setShowRegister(true)} className="text-[#2a7477] font-semibold underline">Daftar</button>
        </div>
      </div>
    </div>
  );
}
