import React, { useState } from "react";

export default function ProfileModal({ onClose, user = {}, posts = [] }) {
  const [activeTab, setActiveTab] = useState("profil");
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
        <div className="bg-[#f8fafb] shadow-2xl p-0 pt-0 w-[900px] max-w-full relative animate-fadeIn rounded-xl overflow-hidden max-h-screen overflow-y-auto">
         
          <div className="flex justify-center items-center gap-12 pt-5 pb-1 bg-[#f8fafb] rounded-t-xl">
            <button
              className={`text-xl pb-1 px-1 transition-all duration-200 font-bold ${activeTab === "profil" ? "text-[#255d60]" : "text-[#7a9a9b] font-semibold"}`}
              onClick={() => setActiveTab("profil")}
            >
              Profil Anda
            </button>
            <button
              className={`text-xl pb-1 px-1 transition-all duration-200 font-bold ${activeTab === "unggah" ? "text-[#255d60]" : "text-[#7a9a9b] font-semibold"}`}
              onClick={() => setActiveTab("unggah")}
            >
              Unggah Tempat
            </button>
            <button
              className={`text-xl pb-1 px-1 transition-all duration-200 font-bold ${activeTab === "berita" ? "text-[#255d60]" : "text-[#7a9a9b] font-semibold"}`}
              onClick={() => setActiveTab("berita")}
            >
              Unggah Berita
            </button>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold z-10"
            aria-label="Tutup"
          >
            ×
          </button>
         
          {activeTab === "profil" && (
            <>
             
              <div className="flex flex-row items-center justify-center gap-10 mt-10 mb-10">
                <img src={user.photo || "/src/assets/images/Anggota/rd.png"} alt="Profile" className="w-40 h-40 rounded-full object-top object-cover border-4 border-[#e0e7ef] bg-white shadow" />
                <div className="flex flex-col items-start justify-center">
                  <div className="mb-1">
                    <span className="text-[#214b4e] font-bold text-lg align-middle">{posts.length || 3}</span>
                    <span className="text-[#214b4e] text-lg align-middle ml-1">postingan</span>
                  </div>
                  <div className="text-[#214b4e] font-bold text-2xl mb-1">{user.name || "Raditya Dharma"}</div>
                  <div className="text-gray-500 text-base mb-4">{user.email || "radityadharma1@gmail.com"}</div>
                  <div className="flex gap-3">
                    <button className="px-6 py-2 rounded-full border border-[#255d60] text-[#255d60] font-semibold hover:bg-[#e6f2f2] transition">Edit Profil</button>
                    <button className="px-6 py-2 rounded-full border border-[#255d60] text-[#255d60] font-semibold hover:bg-[#e6f2f2] transition">Favorit Saya</button>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 px-10 pb-12 justify-items-center items-start">
                {posts.length > 0 ? posts.map((post, idx) => (
                  <div key={idx} className="bg-[#E6F2E1] rounded-[20px] shadow-lg w-[290px] min-h-[320px] flex flex-col overflow-hidden hover:shadow-xl transition relative">
                    <div className="relative">
                      <img src={post.image} alt={post.title} className="w-full h-[160px] object-cover rounded-[20px] border-[10px] border-[#E6F2E1]" />
                    </div>
                    <div className="p-4 pt-1 flex flex-col flex-1">
                      <h3 className="font-bold text-[18px] text-[#214b4e] mb-1">{post.title}</h3>
                      <p className="text-[#214b4e] text-[14px] mb-1">{post.location}</p>
                      <div className="flex items-center text-[#214b4e] text-[14px] mb-1">
                        <span className="mr-1">★★★★★</span>
                        <span className="font-semibold">{post.rating}</span>
                        <span className="ml-1 text-[#888]">({post.reviews})</span>
                      </div>
                      <p className="text-[#214b4e] text-[13px] flex-1 mb-2 line-clamp-3">{post.desc}</p>
                    </div>
                  </div>
                )) : (
                  <>
                    <div className="bg-[#E6F2E1] rounded-[20px] shadow-lg w-[250px] min-h-[320px] flex flex-col overflow-hidden hover:shadow-xl transition relative">
                      <div className="relative">
                        <img src="src/assets/images/agama/M1.webp" alt="Masjid Agung Jami'" className="w-full h-[160px] object-cover rounded-[20px] border-[10px] border-[#E6F2E1]" />
                      </div>
                      <div className="p-4 pt-1 flex flex-col flex-1">
                        <h3 className="font-bold text-[18px] text-[#214b4e] mb-1">Masjid Agung Jami'</h3>
                        <p className="text-[#214b4e] text-[14px] mb-1">Malang, Jawa Timur</p>
                        <div className="flex items-center text-[#214b4e] text-[14px] mb-1">
                          <span className="mr-1">★★★★★</span>
                          <span className="font-semibold">4.8</span>
                          <span className="ml-1 text-[#888]">(35)</span>
                        </div>
                        <p className="text-[#214b4e] text-[13px] flex-1 mb-2 line-clamp-3">Masjid ini didirikan pada tahun 1890 M. Menurut prastasi yang ada, masjid ini dibangun dalam 2 tahap...</p>
                      </div>
                    </div>
                    <div className="bg-[#E6F2E1] rounded-[20px] shadow-lg w-[250px] min-h-[320px] flex flex-col overflow-hidden hover:shadow-xl transition relative">
                      <div className="relative">
                        <img src="src/assets/images/agama/M2.webp" alt="Masjid Tiban Turen" className="w-full h-[160px] object-cover rounded-[20px] border-[10px] border-[#E6F2E1]" />
                      </div>
                      <div className="p-4 pt-1 flex flex-col flex-1">
                        <h3 className="font-bold text-[18px] text-[#214b4e] mb-1">Masjid Tiban Turen</h3>
                        <p className="text-[#214b4e] text-[14px] mb-1">Malang, Jawa Timur</p>
                        <div className="flex items-center text-[#214b4e] text-[14px] mb-1">
                          <span className="mr-1">★★★★★</span>
                          <span className="font-semibold">4.8</span>
                          <span className="ml-1 text-[#888]">(35)</span>
                        </div>
                        <p className="text-[#214b4e] text-[13px] flex-1 mb-2 line-clamp-3">Masjid ini merupakan sebagian bangunan dari Pondok Pesantren Syaichona Bahasyir Bahri...</p>
                      </div>
                    </div>
                    <div className="bg-[#E6F2E1] rounded-[20px] shadow-lg w-[250px] min-h-[320px] flex flex-col overflow-hidden hover:shadow-xl transition relative">
                      <div className="relative">
                        <img src="src/assets/images/agama/M3.jpg" alt="Masjid Al Hikmah" className="w-full h-[160px] object-cover rounded-[20px] border-[10px] border-[#E6F2E1]" />
                      </div>
                      <div className="p-4 pt-1 flex flex-col flex-1">
                        <h3 className="font-bold text-[18px] text-[#214b4e] mb-1">Masjid Al Hikmah</h3>
                        <p className="text-[#214b4e] text-[14px] mb-1">Malang, Jawa Timur</p>
                        <div className="flex items-center text-[#214b4e] text-[14px] mb-1">
                          <span className="mr-1">★★★★★</span>
                          <span className="font-semibold">4.8</span>
                          <span className="ml-1 text-[#888]">(35)</span>
                        </div>
                        <p className="text-[#214b4e] text-[13px] flex-1 mb-2 line-clamp-3">Masjid Al-Hikmah UM termasuk salah satu masjid “berumur” di Kota Malang karena telah berdiri sejak tahun 1966...</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </>
          )}
          {activeTab === "unggah" && (
            <div className="flex flex-col gap-4 px-10 py-8">
              <label className="font-semibold text-[#214b4e]">Gambar
                <input type="file" className="block mt-1 border border-[#214b4e] rounded px-3 py-2 w-full text-[#214b4e] font-light" />
              </label>
              <label className="font-semibold text-[#214b4e]">Nama tempat
                <input type="text" className="block mt-1 border border-[#214b4e] rounded px-3 py-2 w-full text-[#214b4e]" />
              </label>
              <label className="font-semibold text-[#214b4e]">Subjudul
                <textarea className="block mt-1 border border-[#214b4e] rounded px-3 py-2 w-full text-[#214b4e] placeholder:font-light" placeholder="Dapat mencantumkan informasi umum" rows={2} />
              </label>
              <label className="font-semibold text-[#214b4e]">Alamat
                <input type="text" className="block mt-1 border border-[#214b4e] rounded px-3 py-2 w-full text-[#214b4e]" />
              </label>
              <label className="font-semibold text-[#214b4e]">Fasilitas
                <input type="text" className="block mt-1 border border-[#214b4e] rounded px-3 py-2 w-full text-[#214b4e]" />
              </label>
              <label className="font-semibold text-[#214b4e]">Informasi Sejarah
                <textarea className="block mt-1 border border-[#214b4e] rounded px-3 py-2 w-full text-[#214b4e] placeholder:font-light" placeholder="Sejarah tempat ibadah" rows={3} />
              </label>
              <div className="flex justify-end mt-2">
                <button className="bg-[#255d60] text-white px-8 py-2 rounded transition hover:bg-[#214b4e]">Unggah</button>
              </div>
            </div>
          )}
          {activeTab === "berita" && (
            <div className="flex flex-col gap-4 px-10 py-8">
              <label className="font-semibold text-[#214b4e]">Gambar
                <input type="file" className="block mt-1 border border-[#214b4e] rounded px-3 py-2 w-full text-[#214b4e] font-light" />
              </label>
              <label className="font-semibold text-[#214b4e]">Judul
                <input type="text" className="block mt-1 border border-[#214b4e] rounded px-3 py-2 w-full text-[#214b4e]" />
              </label>
              <label className="font-semibold text-[#214b4e]">Subjudul
                <textarea className="block mt-1 border border-[#214b4e] rounded px-3 py-2 w-full text-[#214b4e] placeholder:font-light" placeholder="" rows={3} />
              </label>
              <div className="font-semibold text-[#214b4e]">Kategori
                <div className="flex gap-8 mt-2 mb-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="kategori" className="accent-[#255d60] w-5 h-5" defaultChecked />
                    <span className="text-[#214b4e]">Nasional</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="kategori" className="accent-[#255d60] w-5 h-5" />
                    <span className="text-[#214b4e]">Internasional</span>
                  </label>
                </div>
              </div>
              <label className="font-semibold text-[#214b4e]">Tanggal
                <input type="date" className="block mt-1 border border-[#214b4e] rounded px-3 py-2 w-full text-[#214b4e] placeholder:font-light" placeholder="18/06/2025" />
              </label>
              <label className="font-semibold text-[#214b4e]">Isi Berita
                <textarea className="block mt-1 border border-[#214b4e] rounded px-3 py-2 w-full text-[#214b4e] placeholder:font-light" placeholder="" rows={4} />
              </label>
              <div className="flex justify-end mt-2">
                <button className="bg-[#255d60] text-white px-8 py-2 rounded transition hover:bg-[#214b4e]">Unggah</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  //
  );
}
