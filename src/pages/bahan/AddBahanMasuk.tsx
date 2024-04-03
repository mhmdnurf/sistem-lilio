import React from "react";
import BackNavigation from "../../components/BackNavigation";
import Container from "../../components/Container";
import Header from "../../components/Header";
import FormBahanMasuk from "../../components/form/FormBahanMasuk";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

interface Bahan {
  value: string;
  label: string;
}

export default function AddBahanMasuk() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [namaBahan, setNamaBahan] = React.useState({} as Bahan);
  const [jumlahBahan, setJumlahBahan] = React.useState<number>(0);
  const [keterangan, setKeterangan] = React.useState("");
  const [tanggal, setTanggal] = React.useState(
    new Date().toLocaleDateString("en-CA")
  );
  const [data, setData] = React.useState([]);
  const navigate = useNavigate();

  const fetchBahanMasuk = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/master-bahan");
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    const data = {
      bahan_id: namaBahan?.value,
      tanggal,
      jumlahBahan,
      keterangan,
    };
    console.log(data);

    try {
      const response = await fetch(
        "http://localhost:3000/api/bahan-masuk/create",
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
      navigate("/master-bahan/bahan-masuk");
    }
  };
  return (
    <>
      <Container isLoading={isLoading}>
        <Header title="Tambah Bahan Masuk" />
        <BackNavigation LinkKembali="/master-bahan/bahan-masuk" />
        <FormBahanMasuk
          namaBahan={namaBahan}
          setNamaBahan={setNamaBahan}
          jumlahBahan={jumlahBahan}
          setJumlahBahan={setJumlahBahan}
          keterangan={keterangan}
          setKeterangan={setKeterangan}
          onSubmit={handleSubmit}
          tanggal={tanggal}
          setTanggal={setTanggal}
          data={data}
          isLoading={isLoading}
        />
      </Container>
    </>
  );
}
