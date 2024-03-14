import React from "react";
import Container from "../components/Container";
import Header from "../components/Header";

export default function MasterBahan() {
  const [isLoading, setIsLoading] = React.useState(false);
  React.useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <Container isLoading={isLoading}>
        <Header title="Master Bahan" />
      </Container>
    </>
  );
}
