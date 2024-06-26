import React from "react";
import Container from "../../components/Container";
import Header from "../../components/Header";
import MasterNavigation from "../../components/MasterNavigation";
import TopTable from "../../components/TopTable";
import Pagination from "../../components/Pagination";
import TabelMasterBahan from "../../components/table/TabelMasterBahan";
import Swal from "sweetalert2";

interface Bahan {
  namaBahan: string;
  jumlahBahan: number;
  satuan: string;
  keterangan?: string;
}

export default function MasterBahan() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [searchText, setSearchText] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage] = React.useState(5);
  const [data, setData] = React.useState([]);

  const fetchMasterBahan = React.useCallback(async () => {
    setIsLoading(true);
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:3000/api/master-bahan");
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
    fetchMasterBahan();
  }, [fetchMasterBahan]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filteredData = data.filter((item: Bahan) => {
    const status =
      item.jumlahBahan > 1
        ? "Tersedia"
        : item.jumlahBahan === 1
        ? "Menipis"
        : "Habis";
    return (
      item.namaBahan.toLowerCase().includes(searchText.toLowerCase()) ||
      item.jumlahBahan.toString().includes(searchText.toLowerCase()) ||
      item.satuan.toLowerCase().includes(searchText.toLowerCase()) ||
      item.keterangan?.toLowerCase().includes(searchText.toLowerCase()) ||
      status.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      title: "Apakah Anda Yakin?",
      text: "Data akan hilang permanen ketika dihapus dan data yang terikat juga akan ikut hilang",
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
          `http://localhost:3000/api/master-bahan/delete/${id}`,
          {
            method: "DELETE",
          }
        );
        const data = await response.json();
        console.log("Data yang didapat: ", data);
        fetchMasterBahan();
      } catch (error) {
        console.error("Gagal menghapus data: ", error);
      } finally {
        setIsLoading(false);
        Swal.fire({
          title: "Data berhasil dihapus!",
          text: "Penghapusan bahan berhasil dilakukan!",
          icon: "success",
          confirmButtonColor: "#71717a",
          confirmButtonText: "OK",
        });
      }
    }
  };
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
        <TabelMasterBahan
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
