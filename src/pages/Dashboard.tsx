import React from "react";
import CardList from "../components/CardList";
import Charts from "../components/Charts";
import Container from "../components/Container";
import Greetings from "../components/Greetings";
import Header from "../components/Header";
import LatestProducts from "../components/LatestProducts";

export default function Dashboard() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [statistikBahan, setStatistikBahan] = React.useState(0);
  const [statistikBarang, setStatistikBarang] = React.useState(0);
  const [statistikBahanMasuk, setStatistikBahanMasuk] = React.useState(0);
  const [statistikBahanKeluar, setStatistikBahanKeluar] = React.useState(0);

  const fetchStatistikBarang = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "http://localhost:3000/api/master-barang/count"
      );
      const data = await response.json();
      setStatistikBarang(data.data);
      console.log("Statistik barang: ", data.data);
    } catch (error) {
      console.error("Error fetching statistik barang: ", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchStatistikBahan = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "http://localhost:3000/api/master-bahan/count"
      );
      const data = await response.json();
      setStatistikBahan(data.data);
      console.log("Statistik bahan: ", data.data);
    } catch (error) {
      console.error("Error fetching statistik bahan: ", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchStatistikBahanMasuk = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "http://localhost:3000/api/bahan-masuk/count"
      );
      const data = await response.json();
      setStatistikBahanMasuk(data.data);
      console.log("Statistik bahan masuk: ", data.data);
    } catch (error) {
      console.error("Error fetching statistik bahan masuk: ", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchStatistikBahanKeluar = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "http://localhost:3000/api/bahan-keluar/count"
      );
      const data = await response.json();
      setStatistikBahanKeluar(data.data);
      console.log("Statistik bahan keluar: ", data.data);
    } catch (error) {
      console.error("Error fetching statistik bahan keluar: ", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchStatistikBahan();
    fetchStatistikBarang();
    fetchStatistikBahanMasuk();
    fetchStatistikBahanKeluar();
  }, [
    fetchStatistikBahan,
    fetchStatistikBarang,
    fetchStatistikBahanMasuk,
    fetchStatistikBahanKeluar,
  ]);
  return (
    <>
      <Container isLoading={isLoading}>
        <Header title="Dashboard" />
        <Greetings />
        <CardList
          statistikBarang={statistikBarang}
          statistikBahan={statistikBahan}
          statistikBahanMasuk={statistikBahanMasuk}
          statistikBahanKeluar={statistikBahanKeluar}
        />
        <Charts />
        <LatestProducts />
      </Container>
    </>
  );
}
