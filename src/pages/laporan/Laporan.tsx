import React from "react";
import Container from "../../components/Container";
import Header from "../../components/Header";
import LaporanButton from "../../components/LaporanButton";

export default function Laporan() {
  const [isLoading, setIsLoading] = React.useState(false);
  React.useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, []);
  return (
    <>
      <Container isLoading={isLoading}>
        <Header title="Laporan" />
        <LaporanButton />
      </Container>
    </>
  );
}
