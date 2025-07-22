import React from "react";
import Container from "../components/Container.jsx";
import ExploreCard from "../components/ExploreCard.jsx";
import searchIcon from "../assets/icons/search.png";
import Msatu from "../assets/images/agama/M1.webp";
import Mdua from "../assets/images/agama/M2.webp";
import Mtiga from "../assets/images/agama/M3.jpg";
import Mempat from "../assets/images/agama/M4.webp";
import Mlima from "../assets/images/agama/M5.webp";
import Menam from "../assets/images/agama/M6.jpg";
import Mtujuh from "../assets/images/agama/M7.webp";
import Mdelapan from "../assets/images/agama/M8.jpeg";
import Msembilan from "../assets/images/agama/M9.webp";
import Msepuluh from "../assets/images/agama/M10.webp";
import Msebelas from "../assets/images/agama/M11.jpg";
import M2belas from "../assets/images/agama/M12.jpg";
import M3belas from "../assets/images/agama/M13.jpeg";
import M4belas from "../assets/images/agama/M14.jpg";
import M5belas from "../assets/images/agama/M15.jpg";
import M6belas from "../assets/images/agama/M16.jpg";
import waveFooter from "../assets/images/waveFooter.svg";
import FooterIslam from "../components/FooterIslam.jsx";
import { Link } from "react-router-dom";

export default function Islam() {
  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const cards = [
    {
      image: Msatu,
      name: "Masjid Agung Jami'",
      location: "Malang, Jawa Timur",
      rating: "4.8",
      desc: "Masjid ini didirikan pada tahun 1890 M. Menurut prasasti yang ada, masjid ini dibangun dalam 2 tahap...",
    },
    {
      image: Mdua,
      name: "Masjid Tiban Turen",
      location: "Malang, Jawa Timur",
      rating: "4.8",
      desc: "Masjid ini merupakan sebagian bangunan dari Pondok Pesantren Syalafiyah Biharu Bahri...",
    },
    {
      image: Mtiga,
      name: "Masjid Al Hikmah",
      location: "Malang, Jawa Timur",
      rating: "4.8",
      desc: "Masjid Al-Hikmah UM termasuk salah satu masjid 'berumur' di Kota Malang karena telah berdiri sejak tahun 1966...",
    },
    {
      image: Mempat,
      name: "Masjid Agung An Nuur",
      location: "Malang, Jawa Timur",
      rating: "4.8",
      desc: "Masjid ini sudah dibangun sejak tahun 1920 dan mengalami sentuhan modern di berbagai sisi...",
    },
    {
      image: Mlima,
      name: "Masjid Sabilillah",
      location: "Malang, Jawa Timur",
      rating: "4.7",
      desc: "Masjid ini dinobatkan sebagai masjid percontohan Paripurna Nasional oleh Kementerian Agama Kemenag ....",
    },
    {
      image: Menam,
      name: "Masjid Agung Al Hidayah",
      location: "Malang, Jawa Timur",
      rating: "4.6",
      desc: "Masjid ini tampak seperti Masjid Hagia Sophia di Turki.  Di dalamnya ukiran-ukiran hingga ornamennya...",
    },
    {
      image: Mtujuh,
      name: "Masjid A. R. Fachruddin",
      location: "Malang, Jawa Timur",
      rating: "4.8",
      desc: "Masjid ini memadukan tiga budaya sekaligus, yaitu Jawa, Arab dan modern. Di lantai 1 dijadikan...",
    },
    {
      image: Mdelapan,
      name: "Masjid Nur Ika",
      location: "Malang, Jawa Timur",
      rating: "4.9",
      desc: "Masjid ini didirikan oleh Jenderal TNI Gatot Nurmantyo untuk mengenang anaknya yang wafat karena...",
    },
    {
      image: Msembilan,
      name: "Masjid Cahyaningati",
      location: "Malang, Jawa Timur",
      rating: "4.7",
      desc: "Masjid Cahyaningati merupakan masjid di Kota Malang dengan arsitektur unik berbentuk trapesium...",
    },
    {
      image: Msepuluh,
      name: "Masjid Raden Patah",
      location: "Malang, Jawa Timur",
      rating: "4.6",
      desc: "Masjid Raden Patah berdiri sejak tahun 1975. Masjid ini mulai pembangunan  yang baru dengan gaya arsitektur...",
    },
    {
      image: Msebelas,
      name: "Masjid Al - Istiqomah",
      location: "Malang, Jawa Timur",
      rating: "4.8",
      desc: "Masjid AL-ISTIQOMAH dibangun pada tahun 1951. Masjid AL-ISTIQOMAH merupakan kategori Masjid Umum...",
    },
    {
      image: M2belas,
      name: "Masjid Al-Falah ",
      location: "Malang, Jawa Timur",
      rating: "4.9",
      desc: "Masjid Al-Falah merupakan sebuah masjid yang telah berdiri di desa Pagelaran sejak 1976. Usia bangunan...",
    },
    {
      image: M3belas,
      name: "Masjid At Thohiriyah",
      location: "Malang, Jawa Timur",
      rating: "4.7",
      desc: "Masjid At-Thohiriyah telah berdiri sejak abad ke-18, menjadikannya salah satu masjid tertua di Malang Raya...",
    },
    {
      image: M4belas,
      name: "Masjid Al Mukhlisin",
      location: "Malang, Jawa Timur",
      rating: "4.6",
      desc: "Masjid yang didirikan tahun 1827 ini memiliki kolam kuno yang hingga kini masih terlindungi fungsinya dengan...",
    },
    {
      image: M5belas,
      name: "Masjid Cheng Ho",
      location: "Malang, Jawa Timur",
      rating: "4.8",
      desc: "Masjid Cheng Ho, salah satu ikon terbaru Kota Malang. Lalu, masjid yang mulai dibangun tahun 2013 itu...",
    },
    {
      image: M6belas,
      name: "Masjid Khadijah",
      location: "Malang, Jawa Timur",
      rating: "4.9",
      desc: "Masjid Khadijah Malang didirikan sekitar tahun 1950 di atas tanah wakaf di kawasan Kauman, Klojen...",
    },
  ];

  return (
    <>
      <section
        className="w-full h-[720px] flex flex-col items-start justify-center py-16 relative overflow-hidden"
        style={{
          backgroundImage: 'url("/assets/images/agama/BG2.png")',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Container>
          <h1 className="font-bold mt-[170px] mb-[7px] text-[25px] text-left">
            <span className="text-[#379395]">Ayo Kunjungi </span>
            <span className="text-[#214b4e]">Tempat Baru</span>
          </h1>
          <h1 className="font-bold mb-4  text-[48px] text-[#214b4e] text-left">
            Masjid Salman Al Farisi, Malang
          </h1>
          <p className="text-[25px] text-[#214b4e] text-left max-w-[1200px]">
            Masjid Salman Al Farisi adalah masjid indah di Kota Malang yang dibangun
            tahun 2012 lalu. Tim arsitek menghabiskan waktu lima tahun untuk
            membangun masjid ini. Kemudian pada tahun 2017, masjid ini resmi menjadi
            rumah ibadah. Masjid ini berdiri di tengah-tengah lahan seluas 1,8 hektar.
            Gaya arsitektur yang unik rupanya menjadi perhatian dan daya tarik
            tersendiri di mata publik.
          </p>
          <Link
            to="/masjid/salman-al-farisi"
            className="mt-6 bg-[#215d60] text-white text-[18px] font-bold w-[249px] h-[45px] rounded-[200px] shadow hover:bg-[#2a7477] transition flex items-center justify-center"
          >
            Baca selengkapnya
          </Link>
        </Container>
      </section>

      <section className="w-full bg-[#f6faf7] py-12">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
            <h2 className="text-[28px] md:text-[32px] font-bold text-[#379395]">
              Eksplor tempat baru <span className="text-[#214b4e]">di sekitarmu</span>
            </h2>
            <div className="relative w-full md:w-[320px]">
              <input
                type="text"
                placeholder="Cari tempat"
                className="w-full pl-5 pr-12 py-3 rounded-[30px] bg-white shadow focus:outline-none text-[#214b4e] text-[16px]"
              />
              <img
                src={searchIcon}
                alt="search"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-60"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
            {cards.map((card, idx) => (
              <ExploreCard key={idx} {...card} />
            ))}
          </div>
        </Container>
      </section>
      <img src={waveFooter} alt="Wave Footer" className="w-full bg-[#f6faf7] h-auto block -mt-[620px] -mb-[70px]" />
      <FooterIslam />
    </>
  );
}
