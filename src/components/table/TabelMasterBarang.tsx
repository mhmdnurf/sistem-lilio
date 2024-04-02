import {
  MdOutlineDeleteOutline,
  MdOutlineModeEditOutline,
} from "react-icons/md";
import { Link } from "react-router-dom";

interface Item {
  _id: string;
  createdAt: string;
  namaBarang: string;
  jumlahBarang: number;
  satuan: number;
  keterangan?: string;
}

interface TabelMasterBarang {
  currentItems: Item[];
  handleDelete: (id: string) => void;
}

export default function TabelMasterBarang({
  currentItems,
  handleDelete,
}: TabelMasterBarang) {
  return (
    <>
      <div className="h-80 overflow-auto mx-8 shadow-md  border-x-4 border-t-4 border-gray-200 rounded-t-xl drop-shadow-sm">
        <table className="w-full">
          <thead className="text-zinc-600 text-left bg-gray-100 text-sm sticky top-0">
            <tr>
              <th className="px-6 py-3 font-medium">No.</th>
              <th className="px-6 py-3 font-medium">Tanggal</th>
              <th className="px-6 py-3 font-medium">NAMA BARANG</th>
              <th className="px-6 py-3 font-medium">JUMLAH</th>
              <th className="px-6 py-3 font-medium">SATUAN</th>
              <th className="px-6 py-3 font-medium">KETERANGAN</th>
              <th className="px-6 py-3 font-medium">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={item._id} className="border-b">
                <td className="px-6 py-3">{index + 1}</td>
                <td className="px-6 py-3">
                  {("0" + new Date(item.createdAt).getDate()).slice(-2)}-
                  {("0" + (new Date(item.createdAt).getMonth() + 1)).slice(-2)}-
                  {new Date(item.createdAt).getFullYear()}
                </td>
                <td className="px-6 py-3">{item.namaBarang}</td>
                <td className="px-6 py-3">{item.jumlahBarang}</td>
                <td className="px-6 py-3">{item.satuan}</td>
                <td className="px-6 py-3">
                  {item.keterangan === "" ? "-" : item.keterangan}
                </td>
                <td className="px-6 py-3 flex">
                  <Link
                    to={`/master-barang/edit/${item._id}`}
                    className="p-2 bg-amber-300 rounded-lg hover:transform hover:scale-105"
                  >
                    <MdOutlineModeEditOutline
                      className="text-white"
                      size={24}
                    />
                  </Link>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="p-2 bg-red-500 ml-2 rounded-lg hover:transform hover:scale-105"
                  >
                    <MdOutlineDeleteOutline className="text-white" size={24} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
