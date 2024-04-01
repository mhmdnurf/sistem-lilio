import React from "react";
import Container from "../../components/Container";
import Header from "../../components/Header";
import FormMasterBarang from "../../components/form/FormMasterBarang";
import BackNavigation from "../../components/BackNavigation";

export default function AddMasterBarang() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [namaBarang, setNamaBarang] = React.useState("");
  const [jumlahBarang, setJumlahBarang] = React.useState<number>(0);
  const [keterangan, setKeterangan] = React.useState("");
  const [satuan, setSatuan] = React.useState("Pcs");

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
      satuan,
      jumlahBarang,
      keterangan,
    });
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
        />
      </Container>
    </>
  );
}
