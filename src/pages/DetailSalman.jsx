import React, { useState } from "react";
import Container from "../components/Container.jsx";
import waveFooter from "../assets/images/waveFooter.svg";
import FooterIslam from "../components/FooterIslam.jsx";
import masjidSalman from "../assets/images/agama/M_Salman.webp";
import masjid1 from "../assets/images/agama/IntSatu.webp";
import masjid2 from "../assets/images/agama/IntDua.webp";
import masjid3 from "../assets/images/agama/IntTiga.webp";
import masjid4 from "../assets/images/agama/IntEmpat.webp";

export default function DetailSalman() {
  const [previewImg, setPreviewImg] = useState(null);
  const [activeNav, setActiveNav] = useState('informasi');
  const handleOpenPreview = (imgSrc) => setPreviewImg(imgSrc);
  const handleClosePreview = () => setPreviewImg(null);
  const handleNavClick = (id) => {
    setActiveNav(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="min-h-screen bg-[#f6faf7] pt-24">
      <Container>
        <div className="rounded-xl overflow-hidden mt-8 mb-6">
          <img
            src={masjidSalman}
            alt="Masjid Salman Al Farisi"
            className="w-full h-[530px] object-cover"
          />
        </div>
        <div className="flex flex-row gap-8 text-[20px] border-b border-[#214b4e] mb-6">
          <button
            className={`py-3 px-2 text-[#214b4e] border-b-2 border-transparent relative group overflow-hidden transition font-medium group-hover:font-bold focus:font-bold ${activeNav === 'informasi' ? 'font-bold' : ''}`}
            onClick={() => handleNavClick('informasi')}
          >
            Informasi
            <span className={`absolute left-0 bottom-0 w-full ${activeNav === 'informasi' ? 'scale-x-100' : 'scale-x-0'} h-[3px] bg-[#214b4e] transition-transform origin-left duration-300 group-hover:scale-x-100 group-hover:h-[3px] ${activeNav === 'informasi' ? 'h-[3px]' : ''}`} />
          </button>
          <button
            className={`py-3 px-2 text-[#214b4e] border-b-2 border-transparent relative group overflow-hidden transition font-medium group-hover:font-bold focus:font-bold ${activeNav === 'foto' ? 'font-bold' : ''}`}
            onClick={() => handleNavClick('foto')}
          >
            Foto
            <span className={`absolute left-0 bottom-0 w-full ${activeNav === 'foto' ? 'scale-x-100' : 'scale-x-0'} h-[3px] bg-[#214b4e] transition-transform origin-left duration-300 group-hover:scale-x-100 group-hover:h-[3px] ${activeNav === 'foto' ? 'h-[3px]' : ''}`} />
          </button>
          <button
            className={`py-3 px-2 text-[#214b4e] border-b-2 border-transparent relative group overflow-hidden transition font-medium group-hover:font-bold focus:font-bold ${activeNav === 'lokasi' ? 'font-bold' : ''}`}
            onClick={() => handleNavClick('lokasi')}
          >
            Lokasi
            <span className={`absolute left-0 bottom-0 w-full ${activeNav === 'lokasi' ? 'scale-x-100' : 'scale-x-0'} h-[3px] bg-[#214b4e] transition-transform origin-left duration-300 group-hover:scale-x-100 group-hover:h-[3px] ${activeNav === 'lokasi' ? 'h-[3px]' : ''}`} />
          </button>
          <button
            className={`py-3 px-2 text-[#214b4e] border-b-2 border-transparent relative group overflow-hidden transition font-medium group-hover:font-bold focus:font-bold ${activeNav === 'fasilitas' ? 'font-bold' : ''}`}
            onClick={() => handleNavClick('fasilitas')}
          >
            Fasilitas
            <span className={`absolute left-0 bottom-0 w-full ${activeNav === 'fasilitas' ? 'scale-x-100' : 'scale-x-0'} h-[3px] bg-[#214b4e] transition-transform origin-left duration-300 group-hover:scale-x-100 group-hover:h-[3px] ${activeNav === 'fasilitas' ? 'h-[3px]' : ''}`} />
          </button>
          <button
            className={`py-3 px-2 text-[#214b4e] border-b-2 border-transparent relative group overflow-hidden transition font-medium group-hover:font-bold focus:font-bold ${activeNav === 'tentang' ? 'font-bold' : ''}`}
            onClick={() => handleNavClick('tentang')}
          >
            Tentang
            <span className={`absolute left-0 bottom-0 w-full ${activeNav === 'tentang' ? 'scale-x-100' : 'scale-x-0'} h-[3px] bg-[#214b4e] transition-transform origin-left duration-300 group-hover:scale-x-100 group-hover:h-[3px] ${activeNav === 'tentang' ? 'h-[3px]' : ''}`} />
          </button>
          <button
            className={`py-3 px-2 text-[#214b4e] border-b-2 border-transparent relative group overflow-hidden transition font-medium group-hover:font-bold focus:font-bold ${activeNav === 'review' ? 'font-bold' : ''}`}
            onClick={() => handleNavClick('review')}
          >
            Review
            <span className={`absolute left-0 bottom-0 w-full ${activeNav === 'review' ? 'scale-x-100' : 'scale-x-0'} h-[3px] bg-[#214b4e] transition-transform origin-left duration-300 group-hover:scale-x-100 group-hover:h-[3px] ${activeNav === 'review' ? 'h-[3px]' : ''}`} />
          </button>
        </div>
        <h2 id="informasi" className="text-[48px] font-bold text-[#214b4e] mb-2">
          Masjid Salman Al Farisi
        </h2>
        <div className="flex flex-row text-[20px] items-center gap-3 mb-2">
          <span className="text-[#379395] font-bold">Buka</span>
          <span className="text-[#214b4e] font-bold">•</span>
          <span className="text-[#214b4e]"> Tutup pukul 14.00</span>
        </div>
        <div className="flex flex-row text-[22px] items-center gap-2 mb-4">
          <span className="text-[#255d60] text-lg">★★★★★</span>
          <span className="text-[#214b4e] font-bold text-lg">5,0</span>
          <span className="text-[#214b4e] ml-3 ">Malang, Jawa Timur</span>
        </div>
        <p className="text-[#214b4e] text-[20px] text-justify mb-2">
          <span className="font-bold">Masjid Salman Al Farisi</span> adalah
          salah satu masjid megah yang terletak di Kecamatan Dau, Kabupaten
          Malang, Jawa Timur. Masjid ini dikenal dengan arsitektur khas berwarna
          putih yang sering dijuluki sebagai “Taj Mahal-nya Malang” karena
          keindahan bangunan dan desain kubahnya. Memiliki lingkungan yang luas,
          asri, dan sejuk, masjid ini menjadi tempat favorit bagi masyarakat
          untuk beribadah, berwisata religi, serta mengikuti kegiatan keagamaan.
          Masjid Salman Al Farisi juga ramai dikunjungi pada akhir pekan dan
          hari besar Islam, baik oleh jamaah lokal maupun wisatawan dari luar
          daerah.
        </p>

        <hr className="mt-[50px] mb-[32px] border-[#214b4e] opacity-50 " />

       

        <div id="foto" className="mt-1">
          {/* Modal Preview Foto */}
          {previewImg && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={handleClosePreview}>
              <div className="relative" onClick={e => e.stopPropagation()}>
                <img src={previewImg} alt="Preview" className="max-h-[80vh] max-w-[90vw] rounded-xl shadow-2xl border-4 border-white" />
                <button onClick={handleClosePreview} className="absolute -top-4 -right-4 bg-white rounded-full pb-2 px-2 shadow text-[#214b4e] font-bold text-xl">&times;</button>
              </div>
            </div>
          )}
          <h3 className="text-[48px] font-bold text-[#214b4e] mb-4">Foto</h3>
          <div className="flex flex-row gap-4 flex-wrap">
            <div className="rounded-xl overflow-hidden h-[415px] w-[644px] flex-shrink-0 cursor-pointer">
              <img
                src={masjidSalman}
                alt="Masjid Salman Al Farisi"
                className="w-full h-full object-cover"
                onClick={() => handleOpenPreview(masjidSalman)}
              />
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[415px] w-[600px] flex-shrink-0">
              <div className="rounded-xl overflow-hidden h-[200px] w-[285px] cursor-pointer">
                <img
                  src={masjid1}
                  alt="Interior 1"
                  className="w-full h-full object-cover"
                  onClick={() => handleOpenPreview(masjid1)}
                />
              </div>
              <div className="rounded-xl overflow-hidden h-[200px] w-[285px] cursor-pointer">
                <img
                  src={masjid2}
                  alt="Interior 2"
                  className="w-full h-full object-cover"
                  onClick={() => handleOpenPreview(masjid2)}
                />
              </div>
              <div className="rounded-xl overflow-hidden h-[200px] w-[285px] cursor-pointer">
                <img
                  src={masjid3}
                  alt="Interior 3"
                  className="w-full h-full object-cover"
                  onClick={() => handleOpenPreview(masjid3)}
                />
              </div>
              <div className="rounded-xl overflow-hidden h-[200px] w-[285px] cursor-pointer">
                <img
                  src={masjid4}
                  alt="Interior 4"
                  className="w-full h-full object-cover"
                  onClick={() => handleOpenPreview(masjid4)}
                />
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-[50px] mb-[32px] border-[#214b4e] opacity-50 " />
 
        <div id="lokasi" className="mt-1">
          <h3 className="text-[48px] font-bold text-[#214b4e] mb-6">Lokasi & Fasilitas</h3>
          <div className="flex flex-row gap-10 flex-wrap items-start">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden border-4 border-[#214b4e]/40 bg-white shadow-md p-2" style={{minWidth:'685px', maxWidth:'685px', width:'38vw'}}>
              <img
                src="https://maps.googleapis.com/maps/api/staticmap?center=-7.9275,112.5672&zoom=16&size=500x350&markers=color:green%7Clabel:M%7C-7.9275,112.5672&key=YOUR_API_KEY"
                alt="Peta Masjid Salman Al Farisi"
                className="w-full h-[450px] object-cover rounded-xl"
                draggable="false"
              />
            </div>
            
            <div className="flex flex-col gap-6 min-w-[280px] max-w-[500px]">
              <div>
                <span className="font-bold text-[25px] text-[#214b4e]">Alamat :</span>
                <p className="text-[#214b4e] text-[20px] mt-1 mb-3">Jalan Karang Ampel RT.8, RW.2, Desa Karang Widoro, Kecamatan Dau, Kabupaten Malang</p>
                <a
                  href="https://maps.app.goo.gl/2Qw2Qn6Qw2Qn6Qw2A" target="_blank" rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-[#214b4e] text-white rounded-full shadow font-semibold text-[16px] hover:bg-[#255d60] transition mb-2"
                >
                  Lihat di peta
                </a>
              </div>
              <div id="fasilitas" className="mt-10">
                <span className="font-bold text-[25px] text-[#214b4e]">Fasilitas :</span>
                <ul className="list-disc ml-6 text-[#214b4e] text-[20px] mt-1">
                  <li>Toilet</li>
                  <li>Parkir</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-[50px] mb-[32px] border-[#214b4e] opacity-50 " />

        <div id="tentang" className="mt-1">
          <h3 className="text-[48px] font-bold text-[#214b4e] mb-6">Tentang</h3>
          <div className="text-[#214b4e] text-[20px] text-justify">
            <p className="mb-8">Sejaraahh ahhahahauhduahuaha - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <p className="mb-8">Sejaraahh ahhahahauhduahuaha - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <span className="italic">Lorem ipsum dolor sit amet, reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span></p>
            <p>Sejaraahh ahhahahauhduahuaha - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
        </div>

        {/* Section Review */}
        <hr className="mt-[50px] mb-[32px] border-[#214b4e] opacity-50 " />
        <div id="review" className="mt-1">
          <div className="flex flex-row items-center justify-between mb-8">
            <h3 className="text-[48px] font-bold text-[#214b4e]">Review</h3>
            <div className="flex flex-row gap-3">
              <button className="w-10 h-10 rounded-full bg-[#eaf6ea] flex items-center justify-center text-[#214b4e] text-2xl shadow hover:bg-[#d2e9d2] transition"><span>&#8592;</span></button>
              <button className="w-10 h-10 rounded-full bg-[#eaf6ea] flex items-center justify-center text-[#214b4e] text-2xl shadow hover:bg-[#d2e9d2] transition"><span>&#8594;</span></button>
            </div>
          </div>
          <div className="flex flex-row gap-8 mb-8 justify-between w-full">
            {/* Card 1 */}
            <div className="bg-[#E6F2E1] rounded-3xl shadow-lg p-7 w-[400px] flex flex-col justify-between">
              <div className="text-[#214b4e]">
                <div className="font-bold text-[22px] mb-1">5 / 5</div>
                <div className="font-bold text-[20px] mb-1">Mumtaz TKB</div>
                <div className="text-[18px]">Tempat parkir luas bgt. Bapak pengatur lalu lintas sungguh ramah. Halaman luas. Masuk ke masjid luas, karpetnya empuk, dingin.</div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-[#E6F2E1] rounded-3xl shadow-lg p-7 w-[400px] flex flex-col justify-between">
              <div className="text-[#214b4e]">
                <div className="font-bold text-[22px] mb-1">5 / 5</div>
                <div className="font-bold text-[20px] mb-1">Candrafi Official</div>
                <div className="text-[18px]">Tempat ini sangat terkenal di Instagram, karena desain dan warna bangunannya yg simpel tapi megah banget. Sulit kalo ga ngikutin maps...</div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-[#E6F2E1] rounded-3xl shadow-lg p-7 w-[400px] flex flex-col justify-between">
              <div className="text-[#214b4e]">
                <div className="font-bold text-[22px] mb-1">4 / 5</div>
                <div className="font-bold text-[20px] mb-1">Hikmatulloh M.</div>
                <div className="text-[18px]">Ini masjid ada di daerah kebun tebu. Jauh dari peeu mahan. Tempatnya nyaman. Parkir luas. Insyaallah 10 bis masuk kok ...</div>
              </div>
            </div>
          </div>
          
          <button className="mt-2 px-8 py-2 bg-[#214b4e] text-white rounded-full shadow font-semibold text-[18px] hover:bg-[#255d60] transition">Kembali</button>
        </div>
        
      </Container>
       <img src={waveFooter} alt="Wave Footer" className="w-full bg-[#f6faf7] h-auto block -mt-[610px] -mb-[75px]" />
      <FooterIslam />
    </div>
  );
}
