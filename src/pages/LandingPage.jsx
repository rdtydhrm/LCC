import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Container from "../components/Container.jsx";
import Carousel from "../components/Carousel.jsx";

export default function LandingPage() {
  return (
    <div
      className="h-[748px] flex flex-col bg-gray-100"
      style={{
        backgroundImage: 'url("/src/assets/images/BG1.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Navbar />
      <main className="flex-1 w-full">
        <Container>
          <section className="w-full h-full flex flex-col items-start justify-center py-16">
            <h1 className="font-bold mb-4 mt-[180px] text-[56px] text-[#214b4e] text-left">
              SatuTempat
            </h1>
            <p className="text-[25px] text-[#214b4e] text-left max-w-[1200px]">
              Mulailah perjalanan ibadah Anda dengan mudah dan aman di mana pun
              Anda berada. SatuTempat membantumu menemukan tempat ibadah yang aman dan ramah
              untuk semua. Jadilah bagian dari komunitas kami. Bagikan pengalaman dan
              rekomendasimu untuk membantu orang lain menemukan tempat ibadah
              terbaik.
            </p>
          </section>
          <div className="w-full max-w-[1180px] mx-auto flex justify-end relative">
            <span className="absolute left-[15px] top-[118px] text-[48px] font-bold z-10 select-none text-[#214b4e] ">Maps</span>
            <div className="mt-[200px] w-full h-[570px] rounded-[30px] bg-[#214b4e] shadow-lg"></div>
            <select className="w-[270px] h-[43px] px-4 rounded-[8px] text-[#214b4e] bg-white border border-gray-300 shadow focus:outline-none absolute right-[13px] top-[140px] z-10">
              <option>All</option>
              <option>Islam</option>
              <option>Hindu</option>
              <option>Protestan</option>
              <option>Katolik</option>
              <option>Buddha</option>
              <option>Konghuchu</option>
            </select>
          </div>
          <div className="mt-[46px] w-full flex justify-center">
            <h1 className="text-[48px] font-bold text-[#214b4e] text-center">Rekomendasi</h1>
          </div>
          <div className="mt-8 w-full flex justify-center">
            <Carousel />
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
