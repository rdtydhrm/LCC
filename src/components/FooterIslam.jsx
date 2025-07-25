import React from "react";
import Container from "./Container.jsx";
import logoSatuTempat from "../assets/icons/LogoSatuTempat2.png";

export default function FooterIslam() {
  return (
    <footer className="w-full bg-[#214b4e] p-4 pt-[1px]">
      <Container>
        <div className="flex flex-row items-start pt-[1px]">
          <div className="flex flex-col items-start">
            <div className="flex items-center">
              <img src={logoSatuTempat} alt="Logo" className="w-[74px] h-[74px] mr-[15px]" />
              <span className="text-[32px] text-[#fafafa] font-bold">SatuTempat</span>
            </div>
             <p className="mt-[10px] w-[600px] text-[#fafafa] text-base">
              <span>SatuTempat hadir untuk setiap langkah ibadah.</span>
              <br />
              <span>Temukan arah, temukan kedamaian.</span>
            </p>
          </div>
          <div className="flex flex-col ml-[145px] mt-[10px]">
            <span className="text-[22px] font-bold text-[#fafafa]">Pages</span>
            <ul className="mt-[30px] space-y-2">
              <li><a href="/" className="text-[#fafafa] hover:text-[#21b0b6] hover:underline transition">Home</a></li>
              <li><a href="/agama/islam" className="text-[#fafafa] hover:text-[#21b0b6] hover:underline transition">Agama</a></li>
              <li><a href="/berita" className="text-[#fafafa] hover:text-[#21b0b6] hover:underline transition">Berita</a></li>
              <li><a href="/tentang" className="text-[#fafafa] hover:text-[#21b0b6] hover:underline transition">Tentang</a></li>
            </ul>
          </div>
          <div className="flex flex-col ml-[230px] mt-[10px]">
            <span className="text-[22px] font-bold text-[#fafafa]">Kontak</span>
            <ul className="mt-[30px] space-y-2">
              <li className="text-[#fafafa]">+62 828-763-017</li>
              <li className="text-[#fafafa]">satutempat@gmail.com</li>
            </ul>
          </div>
        </div>
      </Container>
      <hr className="border-t border-[#fafafa] opacity-75 mt-8 mx-[130px]" />
      <div className="text-center text-[20px] text-[#fafafa] font-medium mt-4 mb-2">Copyright 2025. SatuTempat. All Right Reserved.</div>
    </footer>
  );
}
