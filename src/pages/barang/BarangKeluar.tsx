import React from "react";
import Header from "../../components/Header";
import Container from "../../components/Container";
import BackNavigation from "../../components/BackNavigation";
import TopTable from "../../components/TopTable";
import TabelBarangKeluar from "../../components/table/TabelBarangKeluar";
import Pagination from "../../components/Pagination";
import Swal from "sweetalert2";

export default function BarangKeluar() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [searchText, setSearchText] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage] = React.useState(5);
  const [data, setData] = React.useState([]);

  const fetchBarangKeluar = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/barang-keluar");
      const data = await response.json();
      setData(data.data);
      console.log("Data yang didapat: ", data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchBarangKeluar();
  }, [fetchBarangKeluar]);

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
          `http://localhost:3000/api/barang-keluar/delete/${id}`,
          {
            method: "DELETE",
          }
        );
        const data = await response.json();
        console.log("Data yang didapat: ", data);
        fetchBarangKeluar();
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
        <Header title="Barang Keluar" />
        <BackNavigation LinkKembali="/master-barang" />
        <TopTable
          LinkTambah="/master-barang/barang-keluar/tambah"
          title="Barang Keluar"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <TabelBarangKeluar
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
