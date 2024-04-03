import React from "react";
import Container from "../../components/Container";
import Header from "../../components/Header";
import BackNavigation from "../../components/BackNavigation";
import FormMasterBahan from "../../components/form/FormMasterBahan";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function AddMasterBahan() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);
  const [namaBahan, setNamaBahan] = React.useState("");
  const [jumlahBahan, setJumlahBahan] = React.useState<number>(0);
  const [keterangan, setKeterangan] = React.useState("");
  const [satuan, setSatuan] = React.useState("Pcs");

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
      namaBahan,
      jumlahBahan,
      keterangan,
      satuan,
    };
    console.log(data);

    try {
      const response = await fetch(
        "http://localhost:3000/api/master-bahan/create",
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
        <Header title="Tambah Bahan" />
        <BackNavigation LinkKembali="/master-bahan" />
        <FormMasterBahan
          namaBahan={namaBahan}
          setNamaBahan={setNamaBahan}
          jumlahBahan={jumlahBahan}
          setJumlahBahan={setJumlahBahan}
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
