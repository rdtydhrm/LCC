import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import Footer from "../components/Footer.jsx";
import Container from "../components/Container.jsx";
import Carousel from "../components/Carousel.jsx";

const containerStyle = {
  width: "100%",
  height: "600px",
  borderRadius: "12px",
};

const center = {
  lat: -7.9666,
  lng: 112.6326,
};

export default function LandingPage() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_Maps_API_KEY,
  });

  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="flex flex-col bg-gray-100">
      <main className="flex-1 w-full">
        <section
          className="w-full h-[720px] flex flex-col items-start justify-center py-16 relative overflow-hidden"
          style={{
            backgroundImage: 'url("/assets/images/BG1.png")',
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Container>
            <h1 className="font-bold mb-4 mt-[170px] text-[56px] text-[#214b4e] text-left">
              SatuTempat
            </h1>
            <p className="text-[25px] text-[#214b4e] text-left max-w-[1200px]">
              Mulailah perjalanan ibadah Anda dengan mudah dan aman di mana pun
              Anda berada. SatuTempat membantumu menemukan tempat ibadah yang
              aman dan ramah untuk semua. Jadilah bagian dari komunitas kami.
              Bagikan pengalaman dan rekomendasimu untuk membantu orang lain
              menemukan tempat ibadah terbaik.
            </p>
          </Container>
        </section>

        <Container>
          <div className="w-full mx-auto mt-10">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-[48px] ml-3 font-bold text-[#214b4e]">
                Maps
              </h2>
              <select className="w-[150px] h-[38px] mr-5 px-3 rounded border border-gray-300 bg-white text-[#214b4e] shadow focus:outline-none">
                <option>Agama</option>
                <option>Islam</option>
                <option>Hindu</option>
                <option>Protestan</option>
                <option>Katolik</option>
                <option>Buddha</option>
                <option>Konghuchu</option>
              </select>
            </div>
            <div
              className="rounded-[20px] border-[8px] border-[#214b4e] bg-white p-2"
              style={{ minHeight: "500px" }}
            >
              {isLoaded ? (
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={13}
                ></GoogleMap>
              ) : (
                <div className="w-full h-[600px] flex items-center justify-center">
                  Memuat Peta...
                </div>
              )}
            </div>
          </div>

          <div className="mt-[70px] w-full flex justify-center">
            <h1 className="text-[48px] font-bold text-[#214b4e] text-center">
              Rekomendasi
            </h1>
          </div>
          <div className=" w-full flex justify-center">
            <Carousel />
          </div>

          <div className="w-full flex flex-col items-center mt-16">
            <div className="w-full bg-[#214b4e] rounded-t-[60px] rounded-b-[40px] py-12 px-8 shadow-lg relative overflow-visible">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-white text-[48px] font-bold">Berita</h2>
                <a
                  href="#"
                  className="text-white text-[18px] font-medium underline hover:text-[#2a7477]"
                >
                  Lihat lebih banyak
                </a>
              </div>

              <div className="flex gap-8 flex-nowrap justify-between mb-10 w-full">
                <div className="bg-white rounded-[20px] flex-1 flex flex-col shadow-md overflow-hidden border-[10px] border-white min-w-0">
                  <img
                    src="/assets/images/1.jpg"
                    alt="Berita 1"
                    className="h-[140px] w-full object-cover"
                  />
                  <div className="p-4 flex-1 flex flex-col">
                    <div className="font-semibold text-[#214b4e] text-center text-[18px] mb-1 leading-tight">
                      Kementerian Agama Sediakan 5 Pos Bantuan Jemaah Haji di
                      Masjid Nabawi
                    </div>
                    <div className="text-gray-500 text-[14px] mb-4 text-center flex-1 leading-snug">
                      Kementerian Agama menyediakan lima titik pos bantuan
                      jemaah haji di kawasan Masjid Nabawi. Kepala Seksi Media
                      Center Haji (MCH) ....
                    </div>
                    <button className="mt-auto bg-[#2a7477] text-white rounded-full py-2 px-4 font-semibold text-[15px]">
                      Baca selengkapnya &gt;
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-[20px] flex-1 flex flex-col shadow-md overflow-hidden border-[10px] border-white min-w-0">
                  <img
                    src="/assets/images/2.jpeg"
                    alt="Berita 2"
                    className="h-[140px] w-full object-cover"
                  />
                  <div className="p-4 flex-1 flex flex-col">
                    <div className="font-semibold text-[#214b4e] text-center text-[18px] mb-1 leading-tight">
                      Berbagai Kondisi yang Menyebabkan Masyarakat Hindu Bali
                      'Cuntaka'
                    </div>
                    <div className="text-gray-500 text-[14px] text-center mb-4 flex-1 leading-snug">
                      Cuntaka atau sebel adalah kondisi seseorang dianggap tidak
                      suci menurut pandangan agama Hindu. Istilah ini juga
                      memiliki arti cemer ....
                    </div>
                    <button className="mt-auto bg-[#2a7477] text-white rounded-full py-2 px-4 font-semibold text-[15px]">
                      Baca selengkapnya &gt;
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-[20px] flex-1 flex flex-col shadow-md overflow-hidden border-[10px] border-white min-w-0">
                  <img
                    src="/assets/images/3.jpeg"
                    alt="Berita 3"
                    className="h-[140px] w-full object-cover"
                  />
                  <div className="p-4 flex-1 flex flex-col">
                    <div className="font-semibold text-[#214b4e] text-center text-[18px] mb-1 leading-tight">
                      Jumat Agung 2025: Jadwal, Warna Liturgi, hingga Rangkaian
                      Ibadahnya
                    </div>
                    <div className="text-gray-500 text-[14px] text-center mb-4 flex-1 leading-snug">
                      Jumat Agung merupakan hari peringatan wafatnya Yesus
                      Kristus. Peringatan ini merupakan momen untuk
                      merefleksikan makna pengorbanan ....
                    </div>
                    <button className="mt-auto bg-[#2a7477] text-white rounded-full py-2 px-4 font-semibold text-[15px]">
                      Baca selengkapnya &gt;
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-0 mt-2 justify-center items-stretch">
                <div className="bg-white rounded-[20px] h-[230px] flex flex-row w-full  shadow-md border-4 border-white overflow-hidden">
                  <div className="bg-[#2a7477] rounded-[20px] flex items-center px-8 py-6 min-w-[340px] max-w-[580px] border-[6px] border-white">
                    <div className="flex flex-col ml-3 items-center justify-center mr-6">
                      <div className="text-white text-[100px] font-bold leading-none">
                        29
                      </div>
                      <div className="text-white text-[50px] font-bold -mt-2">
                        MEI
                      </div>
                    </div>

                    <div className="border-l-2 border-white h-[100px] mx-1"></div>
                    <div className="text-white text-[48px] ml-5 font-bold">
                      Hari Kenaikan Isa Al Masih
                    </div>
                  </div>

                  <div className="flex-1 px-8 py-6 flex flex-col gap-3">
                    <div className="text-[#214b4e] text-[22px] font-bold mb-2">
                      Upcoming Events
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="border-2 border-[#2a7477] rounded-[12px] px-4 py-2 flex items-center gap-3">
                        <div className="flex flex-col items-center min-w-[50px]">
                          <span className="text-[#379395] mb-[5px] text-[20px] font-bold leading-none">
                            06
                          </span>
                          <span className="text-[#379395] text-[13px] font-bold leading-none -mt-1">
                            JUN
                          </span>
                        </div>
                        <div className="border-l-2 border-[#379395] h-[30px] mx-1"></div>
                        <div className="text-[#379395] font-bold text-[16px] text-left">
                          Hari Idul Adha
                        </div>
                      </div>

                      <div className="border-2 border-[#2a7477] rounded-[12px] px-4 py-2 flex items-center gap-3">
                        <div className="flex flex-col items-center min-w-[50px]">
                          <span className="text-[#379395] mb-[5px] text-[20px] font-bold leading-none">
                            05
                          </span>
                          <span className="text-[#379395] text-[13px] font-bold leading-none -mt-1">
                            SEPT
                          </span>
                        </div>
                        <div className="border-l-2 border-[#379395] h-[30px] mx-1"></div>
                        <div className="text-[#379395] font-bold text-[16px] text-left">
                          Maulid Nabi Muhammad SAW
                        </div>
                      </div>

                      <div className="border-2 border-[#2a7477] rounded-[12px] px-4 py-2 flex items-center gap-3">
                        <div className="flex flex-col items-center min-w-[50px]">
                          <span className="text-[#379395] mb-[5px] text-[20px] font-bold leading-none">
                            27
                          </span>
                          <span className="text-[#379395] text-[13px] font-bold leading-none -mt-1">
                            JUN
                          </span>
                        </div>
                        <div className="border-l-2 border-[#379395] h-[30px] mx-1"></div>
                        <div className="text-[#379395] font-bold text-[16px] text-left">
                          Tahun Baru Islam
                        </div>
                      </div>

                      <div className="border-2 border-[#2a7477] rounded-[12px] px-4 py-2 flex items-center gap-3">
                        <div className="flex flex-col items-center min-w-[50px]">
                          <span className="text-[#379395] mb-[5px] text-[20px] font-bold leading-none">
                            25
                          </span>
                          <span className="text-[#379395] text-[13px] font-bold leading-none -mt-1">
                            DES
                          </span>
                        </div>
                        <div className="border-l-2 border-[#379395] h-[30px] mx-1"></div>
                        <div className="text-[#379395] font-bold text-[16px] text-left">
                          Hari Raya Natal
                        </div>
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
