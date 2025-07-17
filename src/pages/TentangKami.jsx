import React from "react";
import Navbar from "../components/Navbar.jsx";
import FooterIslam from "../components/FooterIslam.jsx";
import waveFooter from "../assets/images/waveFooter.svg";
import Container from "../components/Container.jsx";

export default function TentangKami() {
  return (
    <div className="flex flex-col bg-gray-100 min-h-screen">
      <Navbar />
      <main className="flex-1 w-full">
        {/* Hero Section dengan Parallax */}
        <section
          className="w-full h-[720px] flex items-center justify-center relative overflow-hidden"
          style={{
            backgroundImage: 'url("/src/assets/images/TentangKami.jpg")',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-white/40 z-0"></div>
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
            <h1 className="font-bold text-[56px] text-[#214b4e] text-center drop-shadow-lg">Tentang Kami</h1>
          </div>
        </section>
        {/* Konten lain bisa ditambahkan di sini */}
        <section className="pt-16 pb-8 ">
          <Container>
            <h2 className="text-[50px] font-bold text-[#214b4e] mb-4">Misi Kami</h2>
            <p className="text-[22px] text-[#214b4e] text-justify">
              Kami hadir untuk menciptakan ruang digital yang terbuka, ramah, dan mudah diakses oleh siapa pun. Dengan menyediakan informasi terpercaya seputar agama, peta interaktif, rekomendasi tujuan, dan  berita terkini seputar agama, kami berupaya mendukung kebebasan serta kenyamanan beribadah, memperkuat toleransi, serta menjembatani keberagaman di sekitar kita.
            </p>
          </Container>
        </section>
        {/* Tim SatuTim Section */}
        <section className="py-16">
          <Container>
            <div className="flex flex-col items-center mb-10">
              <span className="px-7 py-2 rounded-full bg-[#255d60] text-white text-[28px] font-semibold mb-3 shadow-md">Intip di Balik Layar</span>
              <h2 className="text-[42px] font-bold text-[#379395] mb-1">Teman <span className="text-[#214b4e]">SatuTim</span></h2>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-[100px]">
              {/* Card 1 */}
              <div className="flex flex-col items-center">
                <div className="w-[300px] h-[410px] bg-[#214b4e] rounded-b-[20px] rounded-t-[180px] flex items-end justify-center shadow-2xl overflow-hidden mb-6 relative" style={{boxShadow: 'inset 0 8px 32px 0 rgba(0,0,0,0.25)'}}>
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[210px] h-[210px] bg-white/20 rounded-full z-0 blur-[48px]" style={{filter:'blur(48px)'}}></div>
                  <img src="/src/assets/images/anggota/ign.png" alt="Ngurah Ananta" className="object-cover w-[280px] mt-6 relative z-10" />
                </div>
                <div className="flex flex-col items-center gap-3">
                  <span className="px-10 py-3 rounded-full bg-[#255d60] text-white text-2xl font-bold shadow">Ngurah Ananta</span>
                  <span className="px-8 py-2 rounded-full bg-[#255d60] text-white text-lg font-semibold shadow">FILKOM UB</span>
                </div>
              </div>
              {/* Card 2 */}
              <div className="flex flex-col items-center">
                <div className="w-[300px] h-[410px] bg-[#214b4e] rounded-b-[20px] rounded-t-[180px] flex items-end justify-center shadow-2xl overflow-hidden mb-6 relative" style={{boxShadow: 'inset 0 8px 32px 0 rgba(0,0,0,0.25)'}}>
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[210px] h-[210px] bg-white/20 rounded-full z-0 blur-[48px]" style={{filter:'blur(48px)'}}></div>
                  <img src="/src/assets/images/anggota/rd.png" alt="Raditya Dharma" className="object-cover w-[270px] mt-6 relative z-10" />
                </div>
                <div className="flex flex-col items-center gap-3">
                  <span className="px-10 py-3 rounded-full bg-[#255d60] text-white text-2xl font-bold shadow">Raditya Dharma</span>
                  <span className="px-8 py-2 rounded-full bg-[#255d60] text-white text-lg font-semibold shadow">FILKOM UB</span>
                </div>
              </div>
              {/* Card 3 */}
              <div className="flex flex-col items-center">
                <div className="w-[300px] h-[410px] bg-[#214b4e] rounded-b-[20px] rounded-t-[180px] flex items-end justify-center shadow-2xl overflow-hidden mb-6 relative" style={{boxShadow: 'inset 0 8px 32px 0 rgba(0,0,0,0.25)'}}>
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[210px] h-[210px] bg-white/20 rounded-full z-0 blur-[48px]" style={{filter:'blur(48px)'}}></div>
                  <img src="/src/assets/images/anggota/dp.png" alt="Diandra Prisha" className="object-cover w-[250px] mt-6 relative z-10" />
                </div>
                <div className="flex flex-col items-center gap-3">
                  <span className="px-10 py-3 rounded-full bg-[#255d60] text-white text-2xl font-bold shadow">Diandra Prisha</span>
                  <span className="px-8 py-2 rounded-full bg-[#255d60] text-white text-lg font-semibold shadow">FTP UB</span>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <img src={waveFooter} alt="Wave Footer" className="w-full h-auto block -mt-[620px] -mb-[70px]" />
      <FooterIslam />
    </div>
  );
}
