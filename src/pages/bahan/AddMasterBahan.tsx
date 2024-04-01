import React from "react";
import Container from "../../components/Container";
import Header from "../../components/Header";
import BackNavigation from "../../components/BackNavigation";
import FormMasterBahan from "../../components/form/FormMasterBahan";

export default function AddMasterBahan() {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Data yang akan dikirim: ", {
      namaBahan,
      satuan,
      jumlahBahan,
      keterangan,
    });
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
