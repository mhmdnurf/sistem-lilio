import React from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import {
  MdOutlineModeEditOutline,
  MdOutlineDeleteOutline,
} from "react-icons/md";
import {
  MdOutlineArrowCircleDown,
  MdOutlineArrowCircleUp,
} from "react-icons/md";

export default function MasterBarang() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [searchText, setSearchText] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage] = React.useState(5);

  React.useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  const data = [
    {
      id: 1,
      date: "19-03-2024",
      name: "Product 1",
      quantity: 100,
      unit: 50,
      description: "-",
    },
    {
      id: 2,
      date: "19-03-2024",
      name: "Product 2",
      quantity: 100,
      unit: 50,
      description: "-",
    },
    {
      id: 3,
      date: "19-03-2024",
      name: "Product 3",
      quantity: 100,
      unit: 50,
      description: "-",
    },
    {
      id: 4,
      date: "19-03-2024",
      name: "Product 4",
      quantity: 100,
      unit: 50,
      description: "-",
    },
    {
      id: 5,
      date: "19-03-2024",
      name: "Product 5",
      quantity: 100,
      unit: 50,
      description: "-",
    },
    {
      id: 6,
      date: "19-03-2024",
      name: "Product 6",
      quantity: 100,
      unit: 50,
      description: "-",
    },
    {
      id: 7,
      date: "19-03-2024",
      name: "Product 7",
      quantity: 100,
      unit: 50,
      description: "-",
    },
    {
      id: 8,
      date: "19-03-2024",
      name: "Product 8",
      quantity: 100,
      unit: 50,
      description: "-",
    },
    {
      id: 9,
      date: "19-03-2024",
      name: "Product 9",
      quantity: 100,
      unit: 50,
      description: "-",
    },
    {
      id: 10,
      date: "19-03-2024",
      name: "Product 10",
      quantity: 100,
      unit: 50,
      description: "-",
    },
    {
      id: 11,
      date: "19-03-2024",
      name: "Product 11",
      quantity: 100,
      unit: 50,
      description: "-",
    },
    {
      id: 12,
      date: "19-03-2024",
      name: "Product 12",
      quantity: 100,
      unit: 50,
      description: "-",
    },
    {
      id: 13,
      date: "19-03-2024",
      name: "Product 13",
      quantity: 100,
      unit: 50,
    },
  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <>
      <Container isLoading={isLoading}>
        <Header title="Master Barang" />
        <div className="flex mx-8 my-16">
          <Link
            to={"/master-barang/barang-masuk"}
            className="p-4 bg-sky-950 rounded-lg flex"
          >
            <MdOutlineArrowCircleDown className="text-white mr-2" size={24} />
            <h1 className="text-white">Barang Masuk</h1>
          </Link>
          <Link
            to={"/master-barang/barang-keluar"}
            className="p-4 bg-sky-950 ml-4 rounded-lg flex"
          >
            <MdOutlineArrowCircleUp className="text-white mr-2" size={24} />
            <h1 className="text-white">Barang Keluar</h1>
          </Link>
        </div>
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
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

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
              {currentItems.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="px-6 py-3">{item.id}</td>
                  <td className="px-6 py-3">{item.date}</td>
                  <td className="px-6 py-3">{item.name}</td>
                  <td className="px-6 py-3">{item.quantity}</td>
                  <td className="px-6 py-3">{item.unit}</td>
                  <td className="px-6 py-3">{item.description}</td>
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
                      <MdOutlineDeleteOutline
                        className="text-white"
                        size={24}
                      />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="flex justify-end space-x-2 mx-8 shadow-md border-x-4 bg-gray-100 border-b-4 rounded-b-xl border-t p-2 drop-shadow-sm">
          {pageNumbers.map((number) => (
            <button
              key={number}
              className={`px-4 py-2 rounded text-xs font-bold ${
                currentPage === number ? "bg-blue-500 text-white" : "bg-white"
              }`}
              onClick={() => setCurrentPage(number)}
            >
              {number}
            </button>
          ))}
        </div>
        <div className="mb-10" />
      </Container>
    </>
  );
}
