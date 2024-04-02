import React from "react";
import BackNavigation from "../../components/BackNavigation";
import Container from "../../components/Container";
import Header from "../../components/Header";
import FormBarangKeluar from "../../components/form/FormBarangKeluar";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

interface Barang {
  value: string;
  label: string;
}

export default function AddBarangKeluar() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);
  const [namaBarang, setNamaBarang] = React.useState({} as Barang);
  const [jumlahBarang, setJumlahBarang] = React.useState<number>(0);
  const [keterangan, setKeterangan] = React.useState("");
  const [tanggal, setTanggal] = React.useState(
    new Date().toLocaleDateString("en-CA")
  );
  const [data, setData] = React.useState([]);

  const fetchBarang = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/master-barang");
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
    fetchBarang();
  }, [fetchBarang]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    const data = {
      barang_id: namaBarang?.value,
      tanggal,
      jumlahBarang,
      keterangan,
    };
    console.log(data);

    try {
      const response = await fetch(
        "http://localhost:3000/api/barang-keluar/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        Swal.fire({
          title: "Something went wrong!",
          text: "Please try again",
          icon: "warning",
          confirmButtonColor: "#71717a",
          confirmButtonText: "OK",
        });
        throw new Error("Something went wrong");
      }

      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      navigate("/master-barang/barang-masuk");
    }
  };
  return (
    <>
      <Container isLoading={isLoading}>
        <Header title="Tambah Barang Keluar" />
        <BackNavigation LinkKembali="/master-barang/barang-keluar" />
        <FormBarangKeluar
          data={data}
          tanggal={tanggal}
          setTanggal={setTanggal}
          namaBarang={namaBarang}
          setNamaBarang={setNamaBarang}
          jumlahBarang={jumlahBarang}
          setJumlahBarang={setJumlahBarang}
          keterangan={keterangan}
          setKeterangan={setKeterangan}
          onSubmit={handleSubmit}
          isLoading={isLoading}
        />
      </Container>
    </>
  );
}
