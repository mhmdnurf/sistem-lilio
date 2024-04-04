interface FormMasterBarang {
  namaBarang: string;
  setNamaBarang: (value: string) => void;
  jumlahBarang: number;
  setJumlahBarang: (value: number) => void;
  keterangan: string;
  setKeterangan: (value: string) => void;
  satuan: string;
  setSatuan: (value: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

export default function FormMasterBarang({
  namaBarang,
  setNamaBarang,
  jumlahBarang,
  setJumlahBarang,
  keterangan,
  setKeterangan,
  satuan,
  setSatuan,
  onSubmit,
  isLoading,
}: FormMasterBarang) {
  return (
    <>
      <form
        className="m-8 bg-white p-8 rounded-xl shadow drop-shadow-sm border-4"
        onSubmit={onSubmit}
      >
        <div className="mb-2">
          <label
            htmlFor="Nama Barang"
            className="text-xl text-slate-700 font-semibold"
          >
            Nama Barang
          </label>
          <input
            type="text"
            className="w-full p-2 rounded-lg border-4 border-gray-100 mt-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent transition-all"
            id="namaBarang"
            value={namaBarang}
            onChange={(e) => setNamaBarang(e.target.value)}
            placeholder="Masukkan Nama Barang"
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="jumlahBarang"
            className="text-xl text-slate-700 font-semibold"
          >
            Stok (Jumlah Awal)
          </label>
          <input
            type="text"
            className="w-full p-2 rounded-lg border-4 border-gray-100 mt-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent transition-all"
            id="jumlahBarang"
            value={jumlahBarang}
            onChange={(e) => setJumlahBarang(Number(e.target.value))}
            placeholder="Masukkan Stok Awal"
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="keterangan"
            className="text-xl text-slate-700 font-semibold"
          >
            Satuan
          </label>
          <select
            className=" w-full p-2 rounded-lg border-4 border-gray-100 mt-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent transition-all bg-white"
            id="satuan"
            value={satuan}
            onChange={(e) => setSatuan(e.target.value)}
          >
            <option value="Pcs">Pcs</option>
            <option value="Kg">Kg</option>
            <option value="Gram">Gram</option>
            <option value="Liter">Liter</option>
            <option value="Dus">Dus</option>
            <option value="Pack">Pack</option>
            <option value="Lusin">Lusin</option>
          </select>
        </div>
        <div className="mb-2">
          <label
            htmlFor="keterangan"
            className="text-xl text-slate-700 font-semibold"
          >
            Keterangan (Opsional)
          </label>
          <input
            type="text"
            className="w-full p-2 rounded-lg border-4 border-gray-100 mt-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent transition-all"
            id="keterangan"
            value={keterangan}
            onChange={(e) => setKeterangan(e.target.value)}
            placeholder="Masukkan Keterangan Barang"
          />
        </div>
        <button
          type="submit"
          className="text-lg mt-2 w-full text-center bg-gray-400 p-2 rounded-lg font-semibold text-white transition-all focus:outline-none focus:ring-4 focus:ring-gray-300 focus:border-transparent"
        >
          {" "}
          {isLoading ? "Loading..." : "Simpan"}
        </button>
      </form>
    </>
  );
}
