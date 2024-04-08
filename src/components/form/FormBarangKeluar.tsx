import Select from "react-select";

interface Item {
  _id: string;
  namaBarang: string;
}

interface FormBarangKeluar {
  namaBarang: { value: string; label: string };
  setNamaBarang: (value: { value: string; label: string }) => void;
  jumlahBarang: number;
  setJumlahBarang: (value: number) => void;
  keterangan: string;
  setKeterangan: (value: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  tanggal: string;
  setTanggal: (value: string) => void;
  data: Item[];
  isLoading: boolean;
}

export default function FormBarangKeluar({
  tanggal,
  setTanggal,
  namaBarang,
  setNamaBarang,
  jumlahBarang,
  setJumlahBarang,
  keterangan,
  setKeterangan,
  onSubmit,
  isLoading,
  data,
}: FormBarangKeluar) {
  const options = data.map((item: Item) => ({
    value: item._id,
    label: item.namaBarang,
  }));
  return (
    <>
      <form
        className="m-8 bg-white p-8 rounded-xl shadow drop-shadow-sm border-4"
        onSubmit={onSubmit}
      >
        <div className="mb-2">
          <label
            htmlFor="stok"
            className="text-xl text-slate-700 font-semibold"
          >
            Tanggal Keluar Barang
          </label>
          <input
            type="date"
            className="w-full p-2 rounded-lg border-4 border-gray-100 mt-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent transition-all"
            id="tanggal"
            value={tanggal}
            onChange={(e) => setTanggal(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="Nama Barang"
            className="text-xl text-slate-700 font-semibold"
          >
            Nama Barang
          </label>
          <Select
            className="w-full mt-2"
            styles={{
              control: (provided) => ({
                ...provided,
                padding: "0.5rem",
                borderRadius: "0.5rem",
                border: "4px solid #f3f4f6",
                boxShadow: "none",
                "&:hover": {
                  borderColor: "#f3f4f6",
                },
                "&:focus": {
                  borderColor: "#6B7280",
                  boxShadow: "0 0 0 2px #6B7280",
                },
              }),
              option: (provided, state) => ({
                ...provided,
                backgroundColor: state.isSelected ? "#f3f4f6" : "#fff",
                color: state.isSelected ? "black" : "#1F2937",
                fontWeight: state.isSelected ? "600" : "normal",
                "&:hover": {
                  backgroundColor: "#f3f4f6",
                },
              }),
              singleValue: (provided) => ({
                ...provided,
                color: "#1F2937",
              }),
            }}
            id="namaBarang"
            value={options.find((option) => option.value === namaBarang?.value)}
            onChange={(option) =>
              setNamaBarang(option as { value: string; label: string })
            }
            options={options}
            isSearchable={true}
            placeholder="Pilih Nama Barang"
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="stok"
            className="text-xl text-slate-700 font-semibold"
          >
            Jumlah Barang Keluar
          </label>
          <input
            type="text"
            className="w-full p-2 rounded-lg border-4 border-gray-100 mt-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent transition-all"
            id="jumlahBarang"
            value={jumlahBarang}
            onChange={(e) => setJumlahBarang(Number(e.target.value))}
          />
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
            placeholder="Keterangan Barang Keluar"
          />
        </div>
        <button
          type="submit"
          className="text-lg mt-2 w-full text-center bg-blue-950 p-2 rounded-lg font-semibold text-white transition-all focus:outline-none focus:ring-4 focus:ring-gray-300 focus:border-transparent"
        >
          {isLoading ? "Loading..." : "Simpan"}
        </button>
      </form>
    </>
  );
}
