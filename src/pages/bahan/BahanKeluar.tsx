import React from "react";
import Header from "../../components/Header";
import Container from "../../components/Container";

export default function BahanKeluar() {
  const [isLoading, setIsLoading] = React.useState(false);
  return (
    <>
      <Container isLoading={isLoading}>
        <Header title="Bahan Keluar" />
      </Container>
    </>
  );
}
