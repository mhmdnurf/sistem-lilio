import React from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import { MdKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";

export default function AddMasterBarang() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [namaBarang, setNamaBarang] = React.useState("");

  React.useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  return (
    <>
      <Container isLoading={isLoading}>
        <Header title="Tambah Barang" />
        <Link
          to={"/master-barang"}
          className="flex items-center p-2 bg-blue-950 m-4 w-fit rounded-xl border-4 border-gray-100"
        >
          <MdKeyboardBackspace size={40} color="white" />
          <h1 className="font-semibold ml-2 text-white">Kembali</h1>
        </Link>
        <form className="m-8 bg-white p-8 rounded-xl shadow drop-shadow-sm border-4">
          <div className="mb-6">
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
          <div className="mb-3">
            <label htmlFor="harga" className="form-label">
              Harga
            </label>
            <input type="number" className="form-control" id="harga" />
          </div>
          <div className="mb-3">
            <label htmlFor="stok" className="form-label">
              Stok
            </label>
            <input type="number" className="form-control" id="stok" />
          </div>
          <button type="submit" className="btn btn-primary">
            Simpan
          </button>
        </form>
      </Container>
    </>
  );
}
