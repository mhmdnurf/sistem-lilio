import React from "react";
import Header from "../../components/Header";
import Container from "../../components/Container";
import BackNavigation from "../../components/BackNavigation";
import TopTable from "../../components/TopTable";
import TabelBarangKeluar from "../../components/table/TabelBarangKeluar";
import Pagination from "../../components/Pagination";

export default function BarangKeluar() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [searchText, setSearchText] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage] = React.useState(5);

  const data = [
    {
      id: 1,
      tanggal: "19-03-2024",
      namaBarang: "Product 1",
      jumlahBarang: 100,
    },
    {
      id: 2,
      tanggal: "19-03-2024",
      namaBarang: "Product 2",
      jumlahBarang: 100,
    },
    {
      id: 3,
      tanggal: "19-03-2024",
      namaBarang: "Product 3",
      jumlahBarang: 100,
    },
    {
      id: 4,
      tanggal: "19-03-2024",
      namaBarang: "Product 4",
      jumlahBarang: 100,
    },
    {
      id: 5,
      tanggal: "19-03-2024",
      namaBarang: "Product 5",
      jumlahBarang: 100,
    },
  ];

  React.useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <>
      <Container isLoading={isLoading}>
        <Header title="Barang Keluar" />
        <BackNavigation LinkKembali="/master-barang" />
        <TopTable
          LinkTambah="/master-barang/barang-keluar/tambah"
          title="Barang Keluar"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <TabelBarangKeluar currentItems={currentItems} />
        <Pagination
          pageNumbers={pageNumbers}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </Container>
    </>
  );
}
