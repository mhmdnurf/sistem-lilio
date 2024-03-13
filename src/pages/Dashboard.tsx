import React from "react";
import CardList from "../components/CardList";
import Charts from "../components/Charts";
import Container from "../components/Container";
import Greetings from "../components/Greetings";
import Header from "../components/Header";
import LatestProducts from "../components/LatestProducts";
import Loader from "../components/Loader";

export default function Dashboard() {
  const [isLoading, setIsLoading] = React.useState(false);
  React.useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <Container>
        <Header title="Dashboard" />
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Greetings />
            <CardList />
            <Charts />
            <LatestProducts />
          </>
        )}
      </Container>
    </>
  );
}
