import React from "react";
import BackNavigation from "../components/BackNavigation";
import Container from "../components/Container";
import Header from "../components/Header";
import FormBarangMasuk from "../components/form/FormBarangMasuk";

export default function AddBarangMasuk() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [namaBarang, setNamaBarang] = React.useState("");
  const [jumlahBarang, setJumlahBarang] = React.useState<number>(0);
  const [keterangan, setKeterangan] = React.useState("");

  React.useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Data yang akan dikirim: ", {
      namaBarang,
      jumlahBarang,
      keterangan,
    });
  };
  return (
    <>
      <Container isLoading={isLoading}>
        <Header title="Tambah Barang Masuk" />
        <BackNavigation LinkKembali="/master-barang/barang-masuk" />
        <FormBarangMasuk
          namaBarang={namaBarang}
          setNamaBarang={setNamaBarang}
          jumlahBarang={jumlahBarang}
          setJumlahBarang={setJumlahBarang}
          keterangan={keterangan}
          setKeterangan={setKeterangan}
          onSubmit={handleSubmit}
        />
      </Container>
    </>
  );
}
