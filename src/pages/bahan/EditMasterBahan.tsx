import React from "react";
import BackNavigation from "../../components/BackNavigation";
import Container from "../../components/Container";
import Header from "../../components/Header";
import FormEditMasterBahan from "../../components/form/FormEditMasterBahan";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function EditMasterBahan() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);
  const [namaBahan, setNamaBahan] = React.useState("");
  const [satuan, setSatuan] = React.useState("");
  const [keterangan, setKeterangan] = React.useState("");

  const fetchBahan = React.useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `http://localhost:3000/api/master-bahan/${id}`
      );
      const data = await response.json();
      setNamaBahan(data.data.namaBahan);
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
      namaBahan,
      keterangan,
      satuan,
    };
    try {
      const response = await fetch(
        `http://localhost:3000/api/master-bahan/edit/${id}`,
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
          title: "Nama bahan sudah digunakan!",
          text: "Silahkan gunakan nama bahan yang lain",
          icon: "error",
          confirmButtonColor: "#71717a",
          confirmButtonText: "OK",
        });
        throw new Error("Something went wrong");
      }

      const responseData = await response.json();
      console.log(responseData);
      navigate("/master-bahan");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Container isLoading={isLoading}>
        <Header title="Edit Bahan" />
        <BackNavigation LinkKembali="/master-bahan" />
        <FormEditMasterBahan
          onSubmit={handleSubmit}
          namaBahan={namaBahan}
          setNamaBahan={setNamaBahan}
          satuan={satuan}
          setSatuan={setSatuan}
          keterangan={keterangan}
          setKeterangan={setKeterangan}
        />
      </Container>
    </>
  );
}
