import React from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { MdOutlineArrowCircleUp } from "react-icons/md";

export default function MasterBarang() {
  const [isLoading, setIsLoading] = React.useState(false);
  // React.useEffect(() => {
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);
  // }, []);
  return (
    <>
      <Container isLoading={isLoading}>
        <Header title="Master Barang" />
        <div className="flex mx-8 my-16">
          <Link to={"#"} className="p-4 bg-sky-950 rounded-lg">
            {/* add icon */}
            <h1 className="text-white">Barang Masuk</h1>
          </Link>
          <Link to={"#"} className="p-4 bg-sky-950 ml-4 rounded-lg">
            <h1 className="text-white">Barang Keluar</h1>
          </Link>
        </div>
      </Container>
    </>
  );
}
