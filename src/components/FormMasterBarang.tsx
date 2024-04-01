interface FormMasterBarang {
  namaBarang: string;
  setNamaBarang: (value: string) => void;
  harga: string;
  setHarga: (value: number) => void;
  stok: string;
  setStok: (value: number) => void;
  keterangan: string;
  setKeterangan: (value: string) => void;
  onsubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function FormMasterBarang({
  namaBarang,
  setNamaBarang,
  harga,
  setHarga,
  stok,
  setStok,
  keterangan,
  setKeterangan,
  onsubmit,
}: FormMasterBarang) {
  return (
    <>
      <form
        className="m-8 bg-white p-8 rounded-xl shadow drop-shadow-sm border-4"
        onSubmit={onsubmit}
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
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="harga"
            className="text-xl text-slate-700 font-semibold"
          >
            Harga
          </label>
          <input
            type="number"
            className="w-full p-2 rounded-lg border-4 border-gray-100 mt-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent transition-all"
            id="harga"
            value={harga}
            onChange={(e) => setHarga(Number(e.target.value))}
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="stok"
            className="text-xl text-slate-700 font-semibold"
          >
            Stok
          </label>
          <input
            type="number"
            className="w-full p-2 rounded-lg border-4 border-gray-100 mt-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent transition-all"
            id="stok"
            value={stok}
            onChange={(e) => setStok(Number(e.target.value))}
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="keterangan"
            className="text-xl text-slate-700 font-semibold"
          >
            Keterangan
          </label>
          <input
            type="text"
            className="w-full p-2 rounded-lg border-4 border-gray-100 mt-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent transition-all"
            id="keterangan"
            value={keterangan}
            onChange={(e) => setKeterangan(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="text-lg mt-2 w-full text-center bg-gray-400 p-2 rounded-lg font-semibold text-white transition-all focus:outline-none focus:ring-4 focus:ring-gray-300 focus:border-transparent"
        >
          Simpan
        </button>
      </form>
    </>
  );
}
