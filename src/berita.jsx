const Konten = () => {
  return (
    <form className="space-y-4 px-8 pt-8 pb-4">
      <div>
        <label className="block font-semibold text-greenTeaFont text-lg mb-1">Gambar</label>
        <input type="file" className="border rounded w-full p-2 bg-gray-100" />
      </div>
      <div>
        <label className="block font-semibold text-greenTeaFont text-lg mb-1">Nama tempat</label>
        <input type="text" className="border rounded w-full p-2 bg-gray-100" />
      </div>
      <div>
        <label className="block font-semibold text-greenTeaFont text-lg mb-1">Subjudul</label>
        <textarea className="border rounded w-full p-2 bg-gray-100" placeholder="Dapat mencantumkan infomasi umum"></textarea>
      </div>
      <div>
        <label className="block font-semibold text-greenTeaFont text-lg mb-1">Alamat</label>
        <input type="text" className="border rounded w-full p-2 bg-gray-100" />
      </div>
      <div>
        <label className="block font-semibold text-greenTeaFont text-lg mb-1">Fasilitas</label>
        <input type="text" className="border rounded w-full p-2 bg-gray-100" />
      </div>
      <div>
        <label className="block font-semibold text-greenTeaFont text-lg mb-1">Infomasi Sejarah</label>
        <textarea className="border rounded w-full p-2 bg-gray-100" placeholder="Sejarah tempat ibadah"></textarea>
      </div>
      <div className="flex justify-end pt-2">
        <button type="submit" className="bg-greentea text-white px-8 py-2 rounded-xl text-lg font-semibold hover:bg-opacity-80 transition">
          Unggah
        </button>
      </div>
    </form>
  );
};

export default Konten;
