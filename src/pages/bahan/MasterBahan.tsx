import React from "react";
import Container from "../../components/Container";
import Header from "../../components/Header";
import MasterNavigation from "../../components/MasterNavigation";
import TopTable from "../../components/TopTable";
import Pagination from "../../components/Pagination";
import TabelMasterBahan from "../../components/table/TabelMasterBahan";

export default function MasterBahan() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [searchText, setSearchText] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage] = React.useState(5);

  const data = [
    {
      id: 1,
      tanggal: "12-12-2021",
      namaBahan: "Beras",
      jumlahBahan: 10,
      satuan: "Kg",
      keterangan: "Beras putih",
    },
    {
      id: 2,
      tanggal: "12-12-2021",
      namaBahan: "Gula",
      jumlahBahan: 10,
      satuan: "Kg",
      keterangan: "Gula pasir",
    },
    {
      id: 3,
      tanggal: "12-12-2021",
      namaBahan: "Minyak",
      jumlahBahan: 10,
      satuan: "L",
      keterangan: "Minyak goreng",
    },
    {
      id: 4,
      tanggal: "12-12-2021",
      namaBahan: "Garam",
      jumlahBahan: 10,
      satuan: "Kg",
      keterangan: "Garam halus",
    },
    {
      id: 5,
      tanggal: "12-12-2021",
      namaBahan: "Merica",
      jumlahBahan: 10,
      satuan: "Kg",
      keterangan: "Merica hitam",
    },
    {
      id: 6,
      tanggal: "12-12-2021",
      namaBahan: "Kecap",
      jumlahBahan: 10,
      satuan: "L",
      keterangan: "Kecap manis",
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
        <Header title="Master Bahan" />
        <MasterNavigation
          title="Bahan"
          LinkMasuk="/master-bahan/bahan-masuk"
          LinkKeluar="/master-bahan/bahan-keluar"
        />
        <TopTable
          LinkTambah="/master-bahan/tambah"
          title="Bahan"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <TabelMasterBahan currentItems={currentItems} />
        <Pagination
          pageNumbers={pageNumbers}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Container>
    </>
  );
}
