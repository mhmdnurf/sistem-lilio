import React from "react";
import Container from "../../components/Container";
import Header from "../../components/Header";
import TabelMasterBarang from "../../components/table/TabelMasterBarang";
import Pagination from "../../components/Pagination";
import TopTable from "../../components/TopTable";
import MasterNavigation from "../../components/MasterNavigation";
import Swal from "sweetalert2";

interface Barang {
  namaBarang: string;
  jumlahBarang: number;
  satuan: string;
  keterangan?: string;
}

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
  const filteredData = data.filter((item: Barang) => {
    const status = item.jumlahBarang > 0 ? "Tersedia" : "Habis";
    return (
      item.namaBarang.toLowerCase().includes(searchText.toLowerCase()) ||
      item.jumlahBarang.toString().includes(searchText.toLowerCase()) ||
      item.satuan.toLowerCase().includes(searchText.toLowerCase()) ||
      item.keterangan?.toLowerCase().includes(searchText.toLowerCase()) ||
      status.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

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
        Swal.fire({
          title: "Data berhasil dihapus!",
          text: "Penghapusan barang berhasil dilakukan!",
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
