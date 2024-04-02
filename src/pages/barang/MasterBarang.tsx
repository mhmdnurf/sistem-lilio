import React from "react";
import Container from "../../components/Container";
import Header from "../../components/Header";
import TabelMasterBarang from "../../components/table/TabelMasterBarang";
import Pagination from "../../components/Pagination";
import TopTable from "../../components/TopTable";
import MasterNavigation from "../../components/MasterNavigation";
import Swal from "sweetalert2";

export default function MasterBarang() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [searchText, setSearchText] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage] = React.useState(5);
  const [data, setData] = React.useState([]);

  const fetchMasterBarang = React.useCallback(async () => {
    setIsLoading(true);
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:3000/api/master-barang");
      const data = await response.json();
      setData(data.data);
      console.log("Data yang didapat: ", data);
    } catch (error) {
      console.error("Gagal mendapatkan data: ", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchMasterBarang();
  }, [fetchMasterBarang]);

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
          `http://localhost:3000/api/master-barang/delete/${id}`,
          {
            method: "DELETE",
          }
        );
        const data = await response.json();
        console.log("Data yang didapat: ", data);
        fetchMasterBarang();
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
        <TabelMasterBarang
          currentItems={currentItems}
          handleDelete={handleDelete}
        />
        <Pagination
          pageNumbers={pageNumbers}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Container>
    </>
  );
}
