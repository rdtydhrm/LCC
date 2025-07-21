import React from "react";
import FooterIslam from "../components/FooterIslam.jsx";
import waveFooter from "../assets/images/waveFooter.svg";
import Container from "../components/Container.jsx";

export default function BeritaDetail() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="flex flex-col bg-[#f6faf7] min-h-screen">
    
      <main className="flex-1 w-full">
        <Container>
          <div className="mx-auto mt-7 pt-24">
           
            <nav className="mb-5 text-[18px] md:text-[19px] flex flex-wrap items-center gap-1 text-[#215d60]">
              <span className="hover:underline cursor-pointer">Home</span>
              <span>&gt;</span>
              <span className="hover:underline cursor-pointer">Berita</span>
              <span>&gt;</span>
              <span className="hover:underline cursor-pointer">Berita Nasional</span>
              <span>&gt;</span>
              <span className="font-bold text-[#214b4e]">6 Tempat Ibadah Ini Jadi Bukti Toleransi yang Harmonis</span>
            </nav>
            <h1 className="text-[48px] font-bold text-[#214b4e] mb-3 leading-tight">
              6 Tempat Ibadah Ini Jadi Bukti Toleransi yang Harmonis
            </h1>
            <div className="flex items-center gap-4 mb-7">
              <span className="text-[#214b4e] text-[20px]">Berita Nasional</span>
              <span className="text-[#214b4e] text-[20px]">29 Mei 2025</span>
            </div>
            
            <img
              src="/src/assets/images/berita/Berita2/Foto berita.jpeg"
              alt="6 Tempat Ibadah Ini Jadi Bukti Toleransi yang Harmonis"
              className="w-full h-[570px] object-cover rounded-xl mb-12"
            />
            <div className="flex flex-col lg:flex-row gap-8 w-full">
        
              <div className="flex-1 text-[#214b4e] text-[18px] text-justify leading-relaxed pr-0 lg:pr-8">
                <p><b>Surabaya</b> - Hidup rukun dan saling toleransi umat beragama selalu didambakan dalam kehidupan sosial. Bayangkan, tinggal dalam satu wilayah dengan perbedaan keyakinan, namun tetap harmonis dan saling gotong royong dengan tetangga. Adem banget.</p>
                <br/>
                <p>Seperti kerukunan umat beragama di Royal Residence Wiyung, Surabaya yang bisa menjadi contoh toleransi antar umat beragama. Toleransi itu diwujudkan dengan 6 tempat ibadah berbeda yang berdiri saling berdampingan.</p>
                <br/>
                <p>Ke-6 tempat ibadah tersebut sesuai dengan agama yang diakui di Indonesia, yaitu Islam, Kristen, Katolik, Hindu, Budha, dan Konghucu. Enam rumah ibadah tersebut adalah Masjid Muhajirin, Vihara Budhayana, Kapel Santo Yustinus untuk umat Katolik, Klenteng Ba De Miao. Kemudian Pura Sakti Raden Wijaya, dan GKI Wiyung Royal Residence untuk umat Kristen.</p>
                <br/>
                <p>Enam tempat ibadah di perumahan elit ini benar-benar berdampingan dan hanya berjarak sekitar 2 meter satu sama lainnya. Di masing-masing rumah ibadah tidak ada pembatas pagar. Bangunannya menyatu dengan gaya arsitektur masing-masing agama.</p>
                <br/>
                <p>Sekretaris 2 Forum Komunikasi Antar Rumah Ibadah (FKRI) Royal Residence Surabaya, Danny Nobret mengatakan warga yang ada di perumahan ini ada di tengah keberagaman. Adanya rumah ibadah yang berdampingan ini justru meningkatkan toleransi.</p>
                <br/>
                <p>"Kami sadar bahwa kami hadir di tengah keberagaman, baik suku, ras dan agama. Sehingga kami merasa nggak pa pa juga rumah ibadah dibuat berjajar. Bukan berarti menjadi satu agama, tapi justru menghargai," kata Danny kepada detikcom, Selasa (21/9/2021).</p>
                <br/>
                <p>Danny menambahkan pembangunan tempat ibadah ini dilakukan secara bertahap sejak 2018. Pembangunan 6 tempat ibadah ini merupakan miniatur indonesia dalam kerukunan antar umat agama.</p>
                <br/>
                <p>"Inilah Indonesia, inilah miniatur Indonesia di dalam keberagaman. Di dalam kepercayaan yang beraneka ragam, kita bisa berdampingan, bisa beribadah, dan saling toleransi," ujar Danny.</p>
                <br/>
                <p>Setiap hari, enam tempat ibadah ini selalu digunakan dan tidak pernah sepi. Agar jam ibadah tidak berbenturan, para pengurus dan tokoh agama masing-masing memiliki jadwal sendiri untuk menggelar kegiatan keagamaan.</p>
                <br/>
                <p>"Kerukunannya selama saya di sini tidak ada masalah. Kalau ada acara apa saling mengundang, saling menghadiri undangan," kata Imam Masjid Muhajirin, Andi</p>
                <br/>
                <p>Dengan berdirinya enam tempat ibadah secara berdampingan ini diharapkan bisa menjadi contoh di masyarakat bahwa toleransi antar umat agama bukanlah suatu keniscayaan.</p>
              </div>
             
              <div className="hidden lg:block w-px bg-[#214b4e] opacity-50 mx-2"></div>
             
              <aside className="w-full lg:w-[320px] flex-shrink-0">
                <div className="rounded-2xl ">
                  <h3 className="font-bold text-[#214b4e] text-[22px] mb-4">Berita Terbaru</h3>
                  <ul className="space-y-3 text-[16px]">
                    <li><a href="#" className="text-[#215d60] hover:underline">Penyuluhan Agama Kristen di Panti Wreda, Kenalkan Moderasi Beragama.</a></li>
                    <li><a href="#" className="text-[#215d60] hover:underline">Upacara Ngertakeun Bumi Lamba: Ungkapan Syukur Lintas Suku dan Agama di Gunung Tangkuban Parahu.</a></li>
                    <li><a href="#" className="text-[#215d60] hover:underline">Penyuluhan Agama Kristen di Panti Wreda, Kenalkan Moderasi Beragama.</a></li>
                    <li><a href="#" className="text-[#215d60] hover:underline">Gema Takbir Warungboto Wujud Nyata Agama dan Budaya Berjalan Bersama di Yogya.</a></li>
                    <li><a href="#" className="text-[#215d60] hover:underline">Wali Kota: Depok Adalah Rumah Kita Semua, Termasuk Rumah Umat Agama Hindu.</a></li>
                  </ul>
                </div>
              </aside>
            </div>
            <hr className="border-t-[2px] border-[#214b4e] opacity-50 mt-10" />

         
            <section className="mt-12">
              <h2 className="text-[45px] font-bold mb-8 text-[#214b4e]"><span className="text-[#21b0b6]">Berita</span> Terbaru</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <div className="bg-[#E6F2E1] rounded-2xl shadow-md p-5 flex flex-col items-stretch border border-[#E6F2E1]">
                  <img src="/src/assets/images/berita/Berita2/1.jpg" alt="Berita 1" className="w-full h-48 object-cover rounded-xl mb-4" />
                  <h3 className="font-bold text-[#214b4e] text-center text-lg mb-2">Wali Kota : Depok Adalah Rumah Kita Semua, Termasuk Rumah Umat Agama...</h3>
                  <p className="text-[#214b4e] text-sm text-center mb-4 flex-1">Wali Kota Depok, Supian Suri memberikan ruang seluas-luasnya bagi seluruh umat beragama di Kota Depok untuk melaksanakan tradisi dan ibadahnya...</p>
                  <button className="bg-[#215d60] text-white rounded-full px-6 py-2 font-semibold text-sm hover:bg-[#1a474a] transition">Baca selengkapnya &gt;</button>
                </div>
                
                <div className="bg-[#E6F2E1] rounded-2xl shadow-md p-5 flex flex-col items-stretch border border-[#E6F2E1]">
                  <img src="/src/assets/images/berita/Berita2/2.jpg" alt="Berita 2" className="w-full h-48 object-cover rounded-xl mb-4" />
                  <h3 className="font-bold text-[#214b4e] text-center text-lg mb-2">Lewat Bakti Religi, Polda Maluku Aksi Bersih Rumah Ibadah Lintas Agama...</h3>
                  <p className="text-[#214b4e] text-sm text-center mb-4 flex-1">Kepolisian Daerah (Polda) Maluku melaksanakan aksi bakti religi berupa kegiatan bersih-bersih serentak di sejumlah rumah ibadah lintas agama...</p>
                  <button className="bg-[#215d60] text-white rounded-full px-6 py-2 font-semibold text-sm hover:bg-[#1a474a] transition">Baca selengkapnya &gt;</button>
                </div>
               
                <div className="bg-[#E6F2E1] rounded-2xl shadow-md p-5 flex flex-col items-stretch border border-[#E6F2E1]">
                  <img src="/src/assets/images/berita/Berita2/3.jpg" alt="Berita 3" className="w-full h-48 object-cover rounded-xl mb-4" />
                  <h3 className="font-bold text-[#214b4e] text-center text-lg mb-2">Berangkatkan 166 Penjaga Rumah Ibadah Umrah dan Perjalanan Religi...</h3>
                  <p className="text-[#214b4e] text-sm text-center mb-4 flex-1">Gubernur Kalimantan Timur, H. Rudy Mas'ud (Harum), menyerahkan secara simbolis penghargaan Gratitpol Umrah dan Perjalanan Religi kepada...</p>
                  <button className="bg-[#215d60] text-white rounded-full px-6 py-2 font-semibold text-sm hover:bg-[#1a474a] transition">Baca selengkapnya &gt;</button>
                </div>
              </div>
              <button className="mt-8 bg-[#215d60] text-white rounded-full px-8 py-2 font-semibold text-base hover:bg-[#1a474a] transition">Kembali</button>
            </section>
          </div>
        </Container>
      </main>
      <img
        src={waveFooter}
        alt="Wave Footer"
        className="w-full h-auto block -mt-[580px] -mb-[60px] pointer-events-none"
      />
      <div>
        <FooterIslam />
      </div>
    </div>
  );
}
