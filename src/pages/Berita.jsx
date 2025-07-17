import React from "react";
// ...existing code...
import Navbar from "../components/Navbar.jsx";
import FooterIslam from "../components/FooterIslam.jsx";
import waveFooter from "../assets/images/waveFooter.svg";
import Container from "../components/Container.jsx";
import { useNavigate } from "react-router-dom";
// ...existing code...

export default function Berita() {
  const navigate = useNavigate();
  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="flex flex-col bg-[#f6faf7]">
      <Navbar />
      <main className="flex-1 w-full">
        {/* Hero Section dengan Parallax */}
        <section
          className="w-full h-[720px] flex flex-col items-start justify-center py-16 relative overflow-hidden"
          style={{
            backgroundImage: 'url("/src/assets/images/berita/headline.jpg")',
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-white/50 pointer-events-none z-0"></div>
          <Container>
            <div className="relative z-10">
              <h1 className="font-bold mt-[127px] mb-[7px] text-[25px] text-left">
                <span className="text-[#379395]">BERITA </span>
                <span className="text-[#214b4e]">TERBARU</span>
              </h1>
              <h1 className="font-bold mb-4 text-[48px] text-[#214b4e] text-left">
                Upacara Ngertakeun Bumi Lamba: Ungkapan Syukur Lintas Suku dan
                Agama di Gunung Tangkuban Parahu
              </h1>
              <p className="text-[25px] text-[#214b4e] text-left max-w-[1200px]">
                Ratusan warga lintas suku, agama, dan latar budaya mengikuti
                upacara adat Ngertakeun Bumi Lamda ke-17 di Taman Wisata Alam
                (TWA) Gunung Tangkuban Parahu, Kabupate Subang, Jawa Barat.
                Upacara adat ini merupakan bagian dari tradisi Sunda Nusantara
                Sabuana, yang digelar setiap tahun sebagai ...
              </p>
              <button
                className="mt-6 bg-[#215d60] text-white text-[18px] font-bold w-[249px] h-[45px] rounded-[200px] shadow hover:bg-[#2a7477] transition flex items-center justify-center"
              >
                Baca selengkapnya
              </button>
            </div>
          </Container>
        </section>

        <section className="w-full flex justify-center bg-transparent py-12">
          <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {[
              {
                image: "/src/assets/images/berita/1.jpeg",
                title: "Membuka Ruang Dialog Agama dan Spiritualitas",
                desc: "Dalam membuka ruang untuk dialog, memahami perbedaan, dan menghormati pilihan orang lain, kita dapat menciptakan dunia di mana  agama...",
              },
              {
                image: "/src/assets/images/berita/2.jpeg",
                title:
                  "6  Tempat Ibadah Ini Jadi Bukti Toleransi yang Harmonis",
                desc: "Hidup rukun dan saling toleransi umat beragama selalu didambakan dalam kehidupan  sosial. Bayangkan, tinggal dalam satu wilayah...",
              },
              {
                image: "/src/assets/images/berita/3.jpg",
                title:
                  "Sambut Tahun Baru Islam 1447 H, Kemenag Depok Gelar Serangkaian...",
                desc: "Dalam rangka menyambut Tahun Baru Islam 1447 Hijriah (H) yang jatuh pada Kamis (26/06), Kantor Kementrian Agama (Kemenag) Kota Depok...",
              },
              {
                image: "/src/assets/images/berita/4.jpg",
                title:
                  "Ibadah Rutin Agama Muslim dan Kristen di Lanud Yohanis Kapiyau Timika...",
                desc: "Lanud Yohanis Kopiyau terus menunjukkan komitmennya dalam menjaga keharmonisan dan toleransi antar umat beragama melalui ...",
              },
              {
                image: "/src/assets/images/berita/5.jpg",
                title:
                  "Gema Takbir Warungboto Wujud Nyata Agama dan Budaya Berjalan Bersama...",
                desc: "Wali Kota Yogyakarta Hasto Wardoyo melepas ribuan orang peserta karnaval Gema Takbir Warungboto pada malam Hari Raya Iduladha 1446...",
              },
              {
                image: "/src/assets/images/berita/6.jpg",
                title:
                  "Penyuluhan Agama Kristen di Panti Wreda, Kenalkan Moderasi Beragama",
                desc: "Tugas seorang penyuluh bukan saja soal mencerahkan wawasan agama jamaahnya, membuat hati jamaah senang dan terhibur pun...",
              },
              {
                image: "/src/assets/images/berita/7.jpg",
                title:
                  "Sampaikan Konsep Cinta, Menag Beri Alasan Ajaran Agama yang Berdampak",
                desc: "Menteri Agama Replublik Indonesia, Nasaruddin Umar dari Auditorium HM. Rasjidi menyampaikan arahan pada kegiatan Kick-Off Meeting...",
              },
              {
                image: "/src/assets/images/berita/8.jpg",
                title:
                  "Sambut Hari Bhayangkara ke-79, Polres Brebes Bersihkan Tempat Ibadah...",
                desc: "Menyambut Hari Bhayangkara ke-79 yang jatuh pada 1 Juli 2025, Polres Brebes menggelar kegiatan sosial bertajuk “Bakti Religi” dengan...",
              },
              {
                image: "/src/assets/images/berita/9.jpg",
                title:
                  "Menteri Agama Luncurkan Buku Hari Raya Umat Buddha dan Kalender...",
                desc: "Menteri Agama Nasaruddin Umar hadiri Dialog Kerukunan Umat Buddha dan luncurkan Buku Hari Raya dan Kalender Buddhis 2024-2061, sekaligus...",
              },
              {
                image: "/src/assets/images/berita/10.jpg",
                title:
                  "Wali Kota : Depok Adalah Rumah Kita Semua, Termasuk Rumah Umat Agama...",
                desc: "Wali Kota Depok, Supian Suri memberikan ruang seluas-luasnya bagi seluruh umat beragama di Kota Depok untuk melaksanakan tradisi dan ibadahnya...",
              },
              {
                image: "/src/assets/images/berita/11.jpg",
                title:
                  "Lewat Bakti Religi, Polda Maluku Aksi Bersih Rumah Ibadah Lintas Agama...",
                desc: "Kepolisian Daerah (Polda) Maluku melaksanakan aksi bakti religi berupa kegiatan bersih-bersih serentak di sejumlah rumah ibadah lintas agama...",
              },
              {
                image: "/src/assets/images/berita/12.jpg",
                title:
                  "Berangkatkan 166 Penjaga Rumah Ibadah Umrah dan Perjalanan Religi...",
                desc: "Gubernur Kalimantan Timur, H. Rudy Mas’ud (Harum), menyerahkan secara simbolis penghargaan Gratispol Umrah dan Perjalanan Religi kepada...",
              },
              {
                image: "/src/assets/images/berita/13.jpg",
                title:
                  "Survei Pembangunan Tempat Ibadah, Saiful Amri : Tekankan Jaga...",
                desc: "Sebagai tindak lanjut atas pengajuan permohonan rekomendasi izin menghadirkan Rumah Ibadah Kristen, Kepala Kantor Kementerian Agama Kota...",
              },
              {
                image: "/src/assets/images/berita/14.jpg",
                title:
                  "Gubernur Riau Dukung Pembangunan Rumah Ibadah Semua Agama",
                desc: "Gubernur Riau (Gubri) Abdul Wahid, menegaskan pentingnya mengaja toleransi antarumat beragama dan mendukung pembangunan rumah ibadah...",
              },
              {
                image: "/src/assets/images/berita/15.jpg",
                title:
                  "Mengajarkan Toleransi Beragama Kepada Anak di Rumah Ibadah",
                desc: "Sabtu (8/2), 28 siswa kelas 1 SD Angkasa, Kabupaten Biak Numfor, mengikuti studi wisata dengan mengunjungi berbagai rumah ibadah untuk...",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-[#E6F2E1] rounded-[20px] shadow-lg w-full min-h-[350px] flex flex-col overflow-hidden hover:shadow-xl transition relative"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-[160px] object-cover rounded-[20px] border-[10px] border-[#E6F2E1]"
                />
                <div className="p-4 pt-1 flex flex-col flex-1">
                  <h3 className="font-bold text-[18px] text-[#214b4e] mb-1 text-center line-clamp-2">
                    {card.title}
                  </h3>
                  <p className="text-[#214b4e] text-[14px] text-center flex-1 mb-2 line-clamp-3">
                    {card.desc}
                  </p>
                  <button
                    className="bg-[#215d60] text-white rounded-full py-2 px-6 font-bold text-[16px] w-full transition hover:bg-[#2a7477] mt-2"
                    {...(idx === 1 ? { onClick: () => navigate("/berita/2") } : {})}
                  >
                    Baca selengkapnya &gt;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Pagination */}
        <div className="w-full flex justify-center mt-1 mb-12">
          <nav className="flex gap-2">
            <button className="w-10 h-10 rounded-full bg-[#215d60] text-white font-bold flex items-center justify-center shadow transition">
              1
            </button>
            <button className="w-10 h-10 rounded-full bg-[#e6f2f2] text-[#215d60] font-bold flex items-center justify-center shadow transition hover:bg-[#b7d6c2]">
              2
            </button>
            <button className="w-10 h-10 rounded-full bg-[#e6f2f2] text-[#215d60] font-bold flex items-center justify-center shadow transition hover:bg-[#b7d6c2]">
              3
            </button>
            <button className="w-10 h-10 rounded-full bg-[#e6f2f2] text-[#215d60] font-bold flex items-center justify-center shadow transition hover:bg-[#b7d6c2]">
              4
            </button>
            <button className="w-10 h-10 rounded-full bg-[#e6f2f2] text-[#215d60] font-bold flex items-center justify-center shadow transition hover:bg-[#b7d6c2]">
              5
            </button>
            <span className="w-10 h-10 rounded-full bg-[#e6f2f2] text-[#215d60] font-bold flex items-center justify-center">
              ...
            </span>
            <button className="w-10 h-10 rounded-full bg-[#e6f2f2] text-[#215d60] font-bold flex items-center justify-center shadow transition hover:bg-[#b7d6c2]">
              10
            </button>
          </nav>
        </div>
      </main>
      <img
        src={waveFooter}
        alt="Wave Footer"
        className="w-full h-auto block -mt-[650px] -mb-[70px]"
      />
      <FooterIslam />
    </div>
  );
}
