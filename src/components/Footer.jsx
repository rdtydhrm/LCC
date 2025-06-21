import React from "react";
import Container from "./Container.jsx";

export default function Footer() {
  return (
    <footer className="w-full bg-[#fafafa] p-4 pt-[40px]">
      <Container>
        <div className="flex flex-row items-start pt-[30px]">
          <div className="flex flex-col items-start">
            <div className="flex items-center">
              <img src="src\assets\icons\LogoSatuTempat1.png" alt="Logo" className="w-[74px] h-[74px] mr-[15px]" />
              <span className="text-[32px] text-[#255d60] font-bold">SatuTempat</span>
            </div>
            <p className="mt-[10px] w-[600px] text-gray-500 text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid impedit, beatae neque error, obcaecati ullam adipisci harum unde similique, consequuntur iure voluptatem facilis debitis nisi! Ipsa eius accusamus pariatur cumque in, est alias et repudiandae incidunt blanditiis sint maiores nostrum quas obcaecati exercitationem.</p>
          </div>
          <div className="flex flex-col ml-[145px] mt-[10px]">
            <span className="text-[22px] font-bold text-[#255d60]">Pages</span>
            <ul className="mt-[30px] space-y-2">
              <li className="text-gray-600">Home</li>
              <li className="text-gray-600">Agama</li>
              <li className="text-gray-600">Berita</li>
              <li className="text-gray-600">Tentang</li>
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
    </footer>
  );
}
