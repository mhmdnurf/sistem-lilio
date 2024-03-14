import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";

export default function BarangKeluar() {
  const [isLoading, setIsLoading] = React.useState(false);
  React.useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  return (
    <>
      <Container isLoading={isLoading}>
        <Header title="Barang Keluar" />
      </Container>
    </>
  );
}
