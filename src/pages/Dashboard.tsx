import CardList from "../components/CardList";
import Charts from "../components/Charts";
import Container from "../components/Container";
import Greetings from "../components/Greetings";
import Header from "../components/Header";

export default function Dashboard() {
  return (
    <>
      <Container>
        <Header title="Dashboard" />
        <Greetings />
        <CardList />
        <Charts />
      </Container>
    </>
  );
}
