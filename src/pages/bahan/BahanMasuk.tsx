import React from "react";
import Header from "../../components/Header";
import Container from "../../components/Container";
import BackNavigation from "../../components/BackNavigation";
import TopTable from "../../components/TopTable";
import Pagination from "../../components/Pagination";
import TabelBahanMasuk from "../../components/table/TabelBahanMasuk";
import Swal from "sweetalert2";

interface Bahan {
  namaBahan: string;
  jumlahBahan: number;
  satuan: string;
  keterangan?: string;
}

export default function BahanMasuk() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [searchText, setSearchText] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage] = React.useState(5);
  const [data, setData] = React.useState([]);

  const fetchBahanMasuk = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/bahan-masuk");
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
    fetchBahanMasuk();
  }, [fetchBahanMasuk]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filteredData = data.filter((item: Bahan) => {
    return (
      item.namaBahan.toLowerCase().includes(searchText.toLowerCase()) ||
      item.jumlahBahan.toString().includes(searchText.toLowerCase()) ||
      item.satuan.toLowerCase().includes(searchText.toLowerCase()) ||
      item.keterangan?.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

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
          `http://localhost:3000/api/bahan-masuk/delete/${id}`,
          {
            method: "DELETE",
          }
        );
        const data = await response.json();
        console.log("Data yang didapat: ", data);
        fetchBahanMasuk();
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
        <Header title="Bahan Masuk" />
        <BackNavigation LinkKembali="/master-bahan" />
        <TopTable
          LinkTambah="/master-bahan/bahan-masuk/tambah"
          title="Bahan Masuk"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <TabelBahanMasuk
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
