import { MdOpenInFull } from "react-icons/md";
import { Link } from "react-router-dom";
export default function LatestProducts() {
  return (
    <>
      <div className="m-8 bg-white rounded-xl shadow-md">
        <h1 className="px-6 pt-6 mb-6 text-lg font-semibold">
          Bahan Masuk Terkini
        </h1>
        <div className="max-h-48 overflow-auto">
          <table className="w-full">
            <thead className="text-zinc-600 text-left bg-gray-100 text-sm sticky top-0">
              <tr>
                <th className="px-6 py-3 font-medium">Tanggal</th>
                <th className="px-6 py-3 font-medium">NAMA BAHAN</th>
                <th className="px-6 py-3 font-medium">JUMLAH</th>
                <th className="px-6 py-3 font-medium">TOTAL STOCK</th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="border-b">
                <td className="px-6 py-3">19-03-2024</td>
                <td className="px-6 py-3">Product 1</td>
                <td className="px-6 py-3">100</td>
                <td className="px-6 py-3">50</td>
              </tr>
              <tr className="border-b">
                <td className="px-6 py-3">19-03-2024</td>
                <td className="px-6 py-3">Product 2</td>
                <td className="px-6 py-3">100</td>
                <td className="px-6 py-3">50</td>
              </tr>
              <tr className="border-b">
                <td className="px-6 py-3">19-03-2024</td>
                <td className="px-6 py-3">Product 2</td>
                <td className="px-6 py-3">100</td>
                <td className="px-6 py-3">50</td>
              </tr>
              <tr className="border-b">
                <td className="px-6 py-3">19-03-2024</td>
                <td className="px-6 py-3">Product 2</td>
                <td className="px-6 py-3">100</td>
                <td className="px-6 py-3">50</td>
              </tr>
              <tr className="border-b">
                <td className="px-6 py-3">19-03-2024</td>
                <td className="px-6 py-3">Product 2</td>
                <td className="px-6 py-3">100</td>
                <td className="px-6 py-3">50</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-end mx-6 py-4">
          <Link
            to={"#"}
            className="flex justify-center items-center hover:bg-gray-100 hover:transition hover:scale-105 p-3 rounded-xl"
          >
            <p className="text-sm mr-2 font-medium">Lihat semua</p>
            <MdOpenInFull className="text-zinc-600" />
          </Link>
        </div>
      </div>
    </>
  );
}
