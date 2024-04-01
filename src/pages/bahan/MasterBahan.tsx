import React from "react";
import Container from "../../components/Container";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import {
  MdOutlineArrowCircleDown,
  MdOutlineArrowCircleUp,
} from "react-icons/md";

export default function MasterBahan() {
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
        <Header title="Master Bahan" />
        <div className="flex mx-8 my-16">
          <Link
            to={"/master-barang/barang-masuk"}
            className="p-4 bg-sky-950 rounded-lg flex"
          >
            <MdOutlineArrowCircleDown className="text-white mr-2" size={24} />
            <h1 className="text-white">Bahan Masuk</h1>
          </Link>
          <Link
            to={"/master-barang/barang-keluar"}
            className="p-4 bg-sky-950 ml-4 rounded-lg flex"
          >
            <MdOutlineArrowCircleUp className="text-white mr-2" size={24} />
            <h1 className="text-white">Bahan Keluar</h1>
          </Link>
        </div>
      </Container>
    </>
  );
}
