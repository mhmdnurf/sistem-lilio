import React from "react";
import CardList from "../components/CardList";
import Charts from "../components/Charts";
import Container from "../components/Container";
import Greetings from "../components/Greetings";
import Header from "../components/Header";
import LatestProducts from "../components/LatestProducts";

export default function Dashboard() {
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
        <Header title="Dashboard" />
        <Greetings />
        <CardList />
        <Charts />
        <LatestProducts />
      </Container>
    </>
  );
}
