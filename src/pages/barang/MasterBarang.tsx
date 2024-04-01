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
