import './index.css'
const Profil = () => {
  return (
    <div className="flex items-center justify-between p-4  ">
      <div className=" flex flex-row items-center justify-between w-full">
        <div className=" flex flex-col items-center justify-center flex-1 max-w-[350px]">
          <div><img class="rounded-full w-[220px] h-[220px] object-cover" src="public\img\DSC09926.JPG" alt="ini harusnya foto" /></div>
          <div><button class=" text-[18px] mt-[23px] w-[225px] bg-transparent hover:bg-abu text-greentea font-semibold hover:text-greentea py-2 px-4 border border-greentea rounded-[10px]">
            Unggah Foto
          </button>
          </div>
        </div>

        <div className="flex-1 mr-[90px]">
          <div class="mb-2">
            <label for="default-input" class="block mb-2 text-greenTeaFont dark:text-white text-[25px] font-semibold">Nama Lengkap</label>
            <input type="text" id="default-input" class="bg-gray-50 border border-greentea text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <div class="mb-2">
            <label for="default-input" class="block mb-2 text-greenTeaFont dark:text-white text-[25px] font-semibold">Alamat Email</label>
            <input type="text" id="default-input" class="bg-gray-50 border border-greentea text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <div class="mb-6">
            <label for="default-input" class="block mb-2 text-greenTeaFont dark:text-white text-[25px] font-semibold">Kata Sandi</label>
            <input type="text" id="default-input" class="bg-gray-50 border border-greentea text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='*******'/>
          </div>
          <div className="flex justify-end">
            <button className="bg-greentea text-white px-8 py-2 rounded-xl text-xl font-semibold hover:bg-opacity-80 transition">
              Simpan Perubahan
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Profil;
