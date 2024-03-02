import CardList from "../components/CardList";
import Container from "../components/Container";
import Header from "../components/Header";

export default function Dashboard() {
  return (
    <>
      <Container>
        <Header title="Dashboard" />
        <CardList />
      </Container>
    </>
  );
}
