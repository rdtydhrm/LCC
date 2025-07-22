import React from "react";
import Container from "./Container.jsx";

export default function Footer() {
  return (
    <footer className="w-full bg-[#fafafa] p-4 pt-[40px]">
      <Container>
        <div className="flex flex-row items-start pt-[30px]">
          <div className="flex flex-col items-start">
            <div className="flex items-center">
              <img src="/assets/icons/LogoSatuTempat1.png" alt="Logo" className="w-[74px] h-[74px] mr-[15px]" />
              <span className="text-[40px] text-[#255d60] font-bold">SatuTempat</span>
            </div>
            <p className="mt-[10px] w-[600px] text-[#214b4e] text-base">
              <span>SatuTempat hadir untuk setiap langkah ibadah.</span>
              <br />
              <span>Temukan arah, temukan kedamaian.</span>
            </p>
          </div>
          <div className="flex flex-col ml-[145px] mt-[10px]">
            <span className="text-[22px] font-bold text-[#255d60]">Pages</span>
            <ul className="mt-[30px] space-y-2">
              <li><a href="/" className="text-gray-600 hover:text-[#255d60] transition">Home</a></li>
              <li><a href="/agama/islam" className="text-gray-600 hover:text-[#255d60] transition">Agama</a></li>
              <li><a href="/berita" className="text-gray-600 hover:text-[#255d60] transition">Berita</a></li>
              <li><a href="/tentang" className="text-gray-600 hover:text-[#255d60] transition">Tentang</a></li>
            </ul>
          </div>
          <div className="flex flex-col ml-[230px] mt-[10px]">
            <span className="text-[22px] font-bold text-[#255d60]">Kontak</span>
            <ul className="mt-[30px] space-y-2">
              <li className="text-gray-600">+62 828-763-017</li>
              <li className="text-gray-600">satutempat@gmail.com</li>
            </ul>
          </div>
        </div>
      </Container>
      <hr className="border-t border-[#379395] mt-8 mx-[130px]" />
      <div className="text-center text-[20px] text-[#214b4e] font-medium mt-4 mb-2">Copyright 2025. SatuTempat. All Right Reserved.</div>
    </footer>
  );
}
