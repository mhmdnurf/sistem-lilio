import React from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import FormMasterBarang from "../components/FormMasterBarang";
import BackNavigation from "../components/BackNavigation";

export default function AddMasterBarang() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [namaBarang, setNamaBarang] = React.useState("");
  const [harga, setHarga] = React.useState(0);
  const [stok, setStok] = React.useState(0);
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
      harga,
      stok,
      keterangan,
    });
  };
  return (
    <>
      <Container isLoading={isLoading}>
        <Header title="Tambah Barang" />
        <BackNavigation LinkKembali="/master-barang" />
        <FormMasterBarang
          onsubmit={handleSubmit}
          namaBarang={namaBarang}
          setNamaBarang={setNamaBarang}
          harga={harga.toString()}
          setHarga={setHarga}
          stok={stok.toString()}
          setStok={setStok}
          keterangan={keterangan}
          setKeterangan={setKeterangan}
        />
      </Container>
    </>
  );
}
