import React from "react";
import BackNavigation from "../../components/BackNavigation";
import Container from "../../components/Container";
import Header from "../../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import FormEditMasterBarang from "../../components/form/FormEditMasterBarang";

export default function EditMasterBarang() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);
  const [namaBarang, setNamaBarang] = React.useState("");
  const [satuan, setSatuan] = React.useState("");
  const [keterangan, setKeterangan] = React.useState("");

  const fetchBahan = React.useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `http://localhost:3000/api/master-barang/${id}`
      );
      const data = await response.json();
      setNamaBarang(data.data.namaBarang);
      setSatuan(data.data.satuan);
      setKeterangan(data.data.keterangan);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  React.useEffect(() => {
    fetchBahan();
  }, [fetchBahan]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const data = {
      namaBarang,
      keterangan,
      satuan,
    };
    try {
      const response = await fetch(
        `http://localhost:3000/api/master-barang/edit/${id}`,
        {
          method: "PUT",
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
        <Header title="Edit Barang" />
        <BackNavigation LinkKembali="/master-barang" />
        <FormEditMasterBarang
          namaBarang={namaBarang}
          setNamaBarang={setNamaBarang}
          keterangan={keterangan}
          setKeterangan={setKeterangan}
          satuan={satuan}
          setSatuan={setSatuan}
          onSubmit={handleSubmit}
        />
      </Container>
    </>
  );
}
