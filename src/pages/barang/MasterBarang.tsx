import React from "react";
import Container from "../../components/Container";
import Header from "../../components/Header";
import TabelMasterBarang from "../../components/table/TabelMasterBarang";
import Pagination from "../../components/Pagination";
import TopTable from "../../components/TopTable";
import MasterNavigation from "../../components/MasterNavigation";

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
      tanggal: "19-03-2024",
      namaBarang: "Product 1",
      jumlahBarang: 100,
      satuan: 50,
      keterangan: "-",
    },
    {
      id: 2,
      tanggal: "19-03-2024",
      namaBarang: "Product 2",
      jumlahBarang: 100,
      satuan: 50,
      keterangan: "-",
    },
    {
      id: 3,
      tanggal: "19-03-2024",
      namaBarang: "Product 3",
      jumlahBarang: 100,
      satuan: 50,
      keterangan: "-",
    },
    {
      id: 4,
      tanggal: "19-03-2024",
      namaBarang: "Product 4",
      jumlahBarang: 100,
      satuan: 50,
      keterangan: "-",
    },
    {
      id: 5,
      tanggal: "19-03-2024",
      namaBarang: "Product 5",
      jumlahBarang: 100,
      satuan: 50,
      keterangan: "-",
    },
    {
      id: 6,
      tanggal: "19-03-2024",
      namaBarang: "Product 6",
      jumlahBarang: 100,
      satuan: 50,
      keterangan: "-",
    },
    {
      id: 7,
      tanggal: "19-03-2024",
      namaBarang: "Product 7",
      jumlahBarang: 100,
      satuan: 50,
      keterangan: "-",
    },
    {
      id: 8,
      tanggal: "19-03-2024",
      namaBarang: "Product 8",
      jumlahBarang: 100,
      satuan: 50,
      keterangan: "-",
    },
    {
      id: 9,
      tanggal: "19-03-2024",
      namaBarang: "Product 9",
      jumlahBarang: 100,
      satuan: 50,
      keterangan: "-",
    },
    {
      id: 10,
      tanggal: "19-03-2024",
      namaBarang: "Product 10",
      jumlahBarang: 100,
      satuan: 50,
      keterangan: "-",
    },
    {
      id: 11,
      tanggal: "19-03-2024",
      namaBarang: "Product 11",
      jumlahBarang: 100,
      satuan: 50,
      keterangan: "-",
    },
    {
      id: 12,
      tanggal: "19-03-2024",
      namaBarang: "Product 12",
      jumlahBarang: 100,
      satuan: 50,
      keterangan: "-",
    },
    {
      id: 13,
      tanggal: "19-03-2024",
      namaBarang: "Product 13",
      jumlahBarang: 100,
      satuan: 50,
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
        <MasterNavigation
          title="Barang"
          LinkMasuk="/master-barang/barang-masuk"
          LinkKeluar="/master-barang/barang-keluar"
        />
        <TopTable
          LinkTambah="/master-barang/tambah"
          title="Barang"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <TabelMasterBarang currentItems={currentItems} />
        <Pagination
          pageNumbers={pageNumbers}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Container>
    </>
  );
}
