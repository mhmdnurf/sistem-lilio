import React from "react";
import Container from "../../components/Container";
import Header from "../../components/Header";
import BackNavigation from "../../components/BackNavigation";
import Swal from "sweetalert2";
import FormCetakLaporan from "../../components/form/FormCetakLaporan";

export default function LaporanBahan() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(
        `http://localhost:3000/api/laporan-bahan?startDate=${startDate}&endDate=${endDate}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
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
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      window.open(url, "_blank");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Container isLoading={isLoading}>
        <Header title="Laporan Bahan" />
        <BackNavigation LinkKembali="/laporan" />
        <FormCetakLaporan
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          handleSubmit={handleSubmit}
        />
      </Container>
    </>
  );
}
