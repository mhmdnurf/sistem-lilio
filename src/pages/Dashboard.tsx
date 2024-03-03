import CardList from "../components/CardList";
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
        <div className="mb-72 flex flex-row">
          <img
            src="./assets/kopi.svg"
            alt="kopi"
            className="w-full h-64 m-8 border-4 rounded-lg p-8 outline outline-sky-100"
          />
          <img
            src="./assets/kopi.svg"
            alt="kopi"
            className="w-full max-w-screen-lg h-64 m-8 border-4 rounded-lg p-8"
          />
        </div>
      </Container>
    </>
  );
}
