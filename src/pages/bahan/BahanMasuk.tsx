import React from "react";
import Header from "../../components/Header";
import Container from "../../components/Container";
import BackNavigation from "../../components/BackNavigation";
import TopTable from "../../components/TopTable";
import Pagination from "../../components/Pagination";
import TabelBahanMasuk from "../../components/table/TabelBahanMasuk";

export default function BahanMasuk() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [searchText, setSearchText] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage] = React.useState(5);

  const data = [
    {
      id: 1,
      tanggalMasuk: "19-03-2024",
      namaBahan: "Product 1",
      jumlahBahan: 100,
    },
    {
      id: 2,
      tanggalMasuk: "19-03-2024",
      namaBahan: "Product 2",
      jumlahBahan: 100,
    },
    {
      id: 3,
      tanggalMasuk: "19-03-2024",
      namaBahan: "Product 3",
      jumlahBahan: 100,
    },
    {
      id: 4,
      tanggalMasuk: "19-03-2024",
      namaBahan: "Product 4",
      jumlahBahan: 100,
    },
    {
      id: 5,
      tanggalMasuk: "19-03-2024",
      namaBahan: "Product 5",
      jumlahBahan: 100,
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
        <Header title="Bahan Masuk" />
        <BackNavigation LinkKembali="/master-bahan" />
        <TopTable
          LinkTambah="/master-bahan/bahan-masuk/tambah"
          title="Bahan Masuk"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <TabelBahanMasuk currentItems={currentItems} />
        <Pagination
          pageNumbers={pageNumbers}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </Container>
    </>
  );
}
