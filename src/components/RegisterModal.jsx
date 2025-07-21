import React from "react";

export default function RegisterModal({ onClose, onSwitchToLogin, onNext, onSuccess }) {
  function handleSubmit(e) {
    e.preventDefault();
    if (onNext) onNext();
    
    if (!onNext && onSuccess) onSuccess();
  }
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
        <h2 className="text-center text-[28px] font-bold text-[#214b4e] mb-6">Selamat Datang, Ayo Buat Akun!</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-[#214b4e] font-semibold mb-1">Nama Lengkap</label>
            <input type="text" placeholder="Masukkan nama lengkap anda" className="w-full border border-gray-400 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-[#2a7477]" />
          </div>
          <div>
            <label className="block text-[#214b4e] font-semibold mb-1">Alamat Email</label>
            <input type="email" placeholder="Masukkan email anda" className="w-full border border-gray-400 rounded-lg px-4 py-3 text-base focus:outline-none focus:border-[#2a7477]" />
          </div>
          <button type="submit" className="w-full bg-[#215d60] text-white rounded-lg py-3 font-semibold text-lg mt-2 hover:bg-[#2a7477] transition">Daftar</button>
        </form>
        <div className="text-center text-[#214b4e] mt-4 mb-2">Atau daftar dengan:</div>
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
          Sudah punya akun? <button type="button" onClick={onSwitchToLogin} className="text-[#2a7477] font-semibold underline">Masuk</button>
        </div>
      </div>
    </div>
  );
}
