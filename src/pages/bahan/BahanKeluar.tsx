import React from "react";
import Header from "../../components/Header";
import Container from "../../components/Container";
import BackNavigation from "../../components/BackNavigation";
import TopTable from "../../components/TopTable";
import Pagination from "../../components/Pagination";
import TabelBahanKeluar from "../../components/table/TabelBahanKeluar";
import Swal from "sweetalert2";

export default function BahanKeluar() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [searchText, setSearchText] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage] = React.useState(5);
  const [data, setData] = React.useState([]);

  const fetchBahanKeluar = React.useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:3000/api/bahan-keluar");
      const data = await response.json();
      setData(data.data);
      console.log(data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchBahanKeluar();
  }, [fetchBahanKeluar]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      title: "Apakah Anda Yakin?",
      text: "Data akan hilang permanen ketika dihapus",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#71717a",
      cancelButtonColor: "#94a3b8",
      cancelButtonText: "Batal",
      confirmButtonText: "Lanjutkan",
    });

    if (result.isConfirmed) {
      try {
        setIsLoading(true);
        const response = await fetch(
          `http://localhost:3000/api/bahan-keluar/delete/${id}`,
          {
            method: "DELETE",
          }
        );
        const data = await response.json();
        console.log("Data yang didapat: ", data);
        fetchBahanKeluar();
      } catch (error) {
        console.error("Gagal menghapus data: ", error);
      } finally {
        setIsLoading(false);
      }
    }
  };
  return (
    <>
      <Container isLoading={isLoading}>
        <Header title="Bahan Keluar" />
        <BackNavigation LinkKembali="/master-bahan" />
        <TopTable
          LinkTambah="/master-bahan/bahan-keluar/tambah"
          title="Bahan Keluar"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <TabelBahanKeluar
          currentItems={currentItems}
          handleDelete={handleDelete}
        />
        <Pagination
          pageNumbers={pageNumbers}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </Container>
    </>
  );
}
