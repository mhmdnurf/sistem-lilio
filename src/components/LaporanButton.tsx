import { Link } from "react-router-dom";

export default function LaporanButton() {
  return (
    <>
      <div className="flex justify-center items-center h-full">
        <div
          className="px-20 py-40"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(./assets/reports.svg)",
            backgroundSize: "cover",
            height: "100%",
            width: "100%",
          }}
        >
          <p className="font-semibold text-2xl text-white mb-10 text-left">
            Pilih jenis laporan yang ingin dicetak
          </p>

          <Link to={"/laporan/laporan-barang"}>
            <button className="bg-teal-500 text-white font-bold p-8 shadow border-2 hover:transform hover:scale-110 transition-all rounded-xl mr-4">
              <span className="text-xl font-semibold">Laporan Barang</span>
            </button>
          </Link>
          <Link to={"/laporan/laporan-bahan"}>
            <button className="bg-teal-500 text-white font-bold p-8 shadow border-2 hover:transform hover:scale-110 transition-all rounded-xl inline">
              <span className="text-xl font-semibold hover:scale-110 ">
                Laporan Bahan
              </span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
