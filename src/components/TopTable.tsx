import { Link } from "react-router-dom";

interface TopTable {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TopTable({ value, onChange }: TopTable) {
  return (
    <>
      <div className="flex justify-end items-center mx-8 mb-4">
        <Link
          to={"/master-barang/tambah"}
          className="p-3 bg-blue-800 mr-2 rounded-lg hover:transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent transition-all"
        >
          <h1 className="text-white font-semibold">Tambah Barang</h1>
        </Link>
        <input
          className="p-3 rounded-lg border-4 w-[400px] focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent transition-all"
          type="text"
          placeholder="Cari..."
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
}
