import React from "react";
import BackNavigation from "../../components/BackNavigation";
import Container from "../../components/Container";
import Header from "../../components/Header";
import FormBarangKeluar from "../../components/form/FormBarangKeluar";

export default function AddBarangKeluar() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [namaBarang, setNamaBarang] = React.useState("");
  const [jumlahBarang, setJumlahBarang] = React.useState<number>(0);
  const [keterangan, setKeterangan] = React.useState("");
  const [tanggal, setTanggal] = React.useState(
    new Date().toLocaleDateString("en-CA")
  );

  React.useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Data yang akan dikirim: ", {
      tanggal,
      namaBarang,
      jumlahBarang,
      keterangan,
    });
  };
  return (
    <>
      <Container isLoading={isLoading}>
        <Header title="Tambah Barang Keluar" />
        <BackNavigation LinkKembali="/master-barang/barang-keluar" />
        <FormBarangKeluar
          tanggal={tanggal}
          setTanggal={setTanggal}
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
