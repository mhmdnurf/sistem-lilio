import React from "react";
import Container from "../../components/Container";
import Header from "../../components/Header";
import FormMasterBarang from "../../components/form/FormMasterBarang";
import BackNavigation from "../../components/BackNavigation";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function AddMasterBarang() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [namaBarang, setNamaBarang] = React.useState("");
  const [jumlahBarang, setJumlahBarang] = React.useState<number>(0);
  const [keterangan, setKeterangan] = React.useState("");
  const [satuan, setSatuan] = React.useState("Pcs");

  const navigate = useNavigate();

  React.useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    const data = {
      namaBarang,
      jumlahBarang,
      keterangan,
      satuan,
    };
    console.log(data);

    try {
      const response = await fetch(
        "http://localhost:3000/api/master-barang/create",
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
          title: "Nama barang sudah digunakan!",
          text: "Silahkan gunakan nama barang yang lain",
          icon: "error",
          confirmButtonColor: "#71717a",
          confirmButtonText: "OK",
        });
        throw new Error("Something went wrong");
      }

      const responseData = await response.json();
      console.log(responseData);
      navigate("/master-barang");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Container isLoading={isLoading}>
        <Header title="Tambah Barang" />
        <BackNavigation LinkKembali="/master-barang" />
        <FormMasterBarang
          satuan={satuan}
          setSatuan={setSatuan}
          onSubmit={handleSubmit}
          namaBarang={namaBarang}
          setNamaBarang={setNamaBarang}
          jumlahBarang={jumlahBarang}
          setJumlahBarang={setJumlahBarang}
          keterangan={keterangan}
          setKeterangan={setKeterangan}
          isLoading={isLoading}
        />
      </Container>
    </>
  );
}
