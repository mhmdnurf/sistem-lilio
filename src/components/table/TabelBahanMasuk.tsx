import {
  MdOutlineDeleteOutline,
  MdOutlineModeEditOutline,
} from "react-icons/md";
import { Link } from "react-router-dom";

interface Item {
  id: number;
  tanggalMasuk: string;
  namaBahan: string;
  jumlahBahan: number;
}

interface TabelBahanMasuk {
  currentItems: Item[];
}

export default function TabelBahanMasuk({ currentItems }: TabelBahanMasuk) {
  return (
    <>
      <div className="h-80 overflow-auto mx-8 shadow-md  border-x-4 border-t-4 border-gray-200 rounded-t-xl drop-shadow-sm">
        <table className="w-full">
          <thead className="text-zinc-600 text-left bg-gray-100 text-sm sticky top-0">
            <tr>
              <th className="px-6 py-3 font-medium">No.</th>
              <th className="px-6 py-3 font-medium">TANGGAL MASUK</th>
              <th className="px-6 py-3 font-medium">NAMA BARANG</th>
              <th className="px-6 py-3 font-medium">JUMLAH</th>
              <th className="px-6 py-3 font-medium">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={item.id} className="border-b">
                <td className="px-6 py-3">{index + 1}</td>
                <td className="px-6 py-3">{item.tanggalMasuk}</td>
                <td className="px-6 py-3">{item.namaBahan}</td>
                <td className="px-6 py-3">{item.jumlahBahan}</td>
                <td className="px-6 py-3 flex">
                  <Link
                    to={`/master-barang/edit/${item.id}`}
                    className="p-2 bg-amber-300 rounded-lg hover:transform hover:scale-105"
                  >
                    <MdOutlineModeEditOutline
                      className="text-white"
                      size={24}
                    />
                  </Link>
                  <Link
                    to={`/master-barang/delete/${item.id}`}
                    className="p-2 bg-red-500 ml-2 rounded-lg hover:transform hover:scale-105"
                  >
                    <MdOutlineDeleteOutline className="text-white" size={24} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
