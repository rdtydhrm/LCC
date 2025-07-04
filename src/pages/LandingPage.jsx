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


          {/* Section Berita & Upcoming Events */}
          <div className="w-full flex flex-col items-center mt-16">
            <div className="w-full bg-[#214b4e] rounded-t-[60px] rounded-b-[40px] py-12 px-8 shadow-lg relative overflow-visible">
              {/* Berita Header */}
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-white text-[48px] font-bold">Berita</h2>
                <a href="#" className="text-white text-[18px] font-medium underline hover:text-[#2a7477]">Lihat lebih banyak</a>
              </div>
              {/* Berita Cards */}
              <div className="flex gap-8 flex-nowrap justify-between mb-10 w-full">
                {/* Card 1 */}
                <div className="bg-white rounded-[20px] flex-1 flex flex-col shadow-md overflow-hidden border-[10px] border-white min-w-0">
                  <img src="src\assets\images\1.jpg" alt="Berita 1" className="h-[140px] w-full object-cover" />
                  <div className="p-4 flex-1 flex flex-col">
                    <div className="font-semibold text-[#214b4e] text-center text-[18px] mb-1 leading-tight">Kementerian Agama Sediakan 5 Pos Bantuan Jemaah Haji di Masjid Nabawi</div>
                    <div className="text-gray-500 text-[14px] mb-4 text-center flex-1 leading-snug">Kementerian Agama menyediakan lima titik pos bantuan jemaah haji di kawasan Masjid Nabawi. Kepala Seksi Media Center Haji (MCH) ....</div>
                    <button className="mt-auto bg-[#2a7477] text-white rounded-full py-2 px-4 font-semibold text-[15px]">Baca selengkapnya &gt;</button>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="bg-white rounded-[20px] flex-1 flex flex-col shadow-md overflow-hidden border-[10px] border-white min-w-0">
                  <img src="src\assets\images\2.jpeg" alt="Berita 2" className="h-[140px] w-full object-cover" />
                  <div className="p-4 flex-1 flex flex-col">
                    <div className="font-semibold text-[#214b4e] text-center text-[18px] mb-1 leading-tight">Berbagai Kondisi yang Menyebabkan Masyarakat Hindu Bali 'Cuntaka'</div>
                    <div className="text-gray-500 text-[14px] text-center mb-4 flex-1 leading-snug">Cuntaka atau sebel adalah kondisi seseorang dianggap tidak suci menurut pandangan agama Hindu. Istilah ini juga memiliki arti cemer ....</div>
                    <button className="mt-auto bg-[#2a7477] text-white rounded-full py-2 px-4 font-semibold text-[15px]">Baca selengkapnya &gt;</button>
                  </div>
                </div>
                {/* Card 3 */}
                <div className="bg-white rounded-[20px] flex-1 flex flex-col shadow-md overflow-hidden border-[10px] border-white min-w-0">
                  <img src="src\assets\images\3.jpeg" alt="Berita 3" className="h-[140px] w-full object-cover" />
                  <div className="p-4 flex-1 flex flex-col">
                    <div className="font-semibold text-[#214b4e] text-center text-[18px] mb-1 leading-tight">Jumat Agung 2025: Jadwal, Warna Liturgi, hingga Rangkaian Ibadahnya</div>
                    <div className="text-gray-500 text-[14px] text-center mb-4 flex-1 leading-snug">Jumat Agung merupakan hari peringatan wafatnya Yesus Kristus. Peringatan ini merupakan momen untuk merefleksikan makna pengorbanan ....</div>
                    <button className="mt-auto bg-[#2a7477] text-white rounded-full py-2 px-4 font-semibold text-[15px]">Baca selengkapnya &gt;</button>
                  </div>
                </div>
              </div>
              {/* Event utama & Upcoming Events */}
              <div className="flex flex-wrap gap-0 mt-2 justify-center items-stretch">
                {/* Gabungan Event utama & Upcoming Events */}
                <div className="bg-white rounded-[20px] h-[230px] flex flex-row w-full  shadow-md border-4 border-white overflow-hidden">
                  {/* Event utama */}
                  <div className="bg-[#2a7477] rounded-[20px] flex items-center px-8 py-6 min-w-[340px] max-w-[580px] border-[6px] border-white">
                    <div className="flex flex-col ml-3 items-center justify-center mr-6">
                      <div className="text-white text-[100px] font-bold leading-none">29</div>
                      <div className="text-white text-[50px] font-bold -mt-2">MEI</div>
                    </div>
                    {/* Garis vertikal */}
                    <div className="border-l-2 border-white h-[100px] mx-1"></div>
                    <div className="text-white text-[48px] ml-5 font-bold">Hari Kenaikan Isa Al Masih</div>
                  </div>
                  {/* Upcoming Events */}
                  <div className="flex-1 px-8 py-6 flex flex-col gap-3">
                    <div className="text-[#214b4e] text-[22px] font-bold mb-2">Upcoming Events</div>
                    <div className="grid grid-cols-2 gap-3">
                      {/* Event 1 */}
                      <div className="border-2 border-[#2a7477] rounded-[12px] px-4 py-2 flex items-center gap-3">
                        <div className="flex flex-col items-center min-w-[50px]">
                          <span className="text-[#379395] mb-[5px] text-[20px] font-bold leading-none">06</span>
                          <span className="text-[#379395] text-[13px] font-bold leading-none -mt-1">JUN</span>
                        </div>
                        <div className="border-l-2 border-[#379395] h-[30px] mx-1"></div>
                        <div className="text-[#379395] font-bold text-[16px] text-left">Hari Idul Adha</div>
                      </div>
                      {/* Event 2 */}
                      <div className="border-2 border-[#2a7477] rounded-[12px] px-4 py-2 flex items-center gap-3">
                        <div className="flex flex-col items-center min-w-[50px]">
                          <span className="text-[#379395] mb-[5px] text-[20px] font-bold leading-none">05</span>
                          <span className="text-[#379395] text-[13px] font-bold leading-none -mt-1">SEPT</span>
                        </div>
                        <div className="border-l-2 border-[#379395] h-[30px] mx-1"></div>
                        <div className="text-[#379395] font-bold text-[16px] text-left">Maulid Nabi Muhammad SAW</div>
                      </div>
                      {/* Event 3 */}
                      <div className="border-2 border-[#2a7477] rounded-[12px] px-4 py-2 flex items-center gap-3">
                        <div className="flex flex-col items-center min-w-[50px]">
                          <span className="text-[#379395] mb-[5px] text-[20px] font-bold leading-none">27</span>
                          <span className="text-[#379395] text-[13px] font-bold leading-none -mt-1">JUN</span>
                        </div>
                        <div className="border-l-2 border-[#379395] h-[30px] mx-1"></div>
                        <div className="text-[#379395] font-bold text-[16px] text-left">Tahun Baru Islam</div>
                      </div>
                      {/* Event 4 */}
                      <div className="border-2 border-[#2a7477] rounded-[12px] px-4 py-2 flex items-center gap-3">
                        <div className="flex flex-col items-center min-w-[50px]">
                          <span className="text-[#379395] mb-[5px] text-[20px] font-bold leading-none">25</span>
                          <span className="text-[#379395] text-[13px] font-bold leading-none -mt-1">DES</span>
                        </div>
                        <div className="border-l-2 border-[#379395] h-[30px] mx-1"></div>
                        <div className="text-[#379395] font-bold text-[16px] text-left">Hari Raya Natal</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
