import React from "react";
import { MdOpenInFull } from "react-icons/md";
import { Link } from "react-router-dom";
import TabelLatestBahan from "./table/TabelLatestBahan";
export default function LatestProducts() {
  const [data, setData] = React.useState([]);
  const fetchLatestBahan = React.useCallback(async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/bahan-masuk/latest"
      );
      const data = await response.json();
      console.log(data.data);
      setData(data.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  React.useEffect(() => {
    fetchLatestBahan();
  }, [fetchLatestBahan]);
  return (
    <>
      <div className="m-8 bg-white rounded-xl shadow-md">
        <h1 className="px-6 pt-6 mb-6 text-lg font-semibold">
          Bahan Masuk Terkini
        </h1>
        <TabelLatestBahan data={data} />
        <div className="flex justify-end mx-6 py-4">
          <Link
            to={"/master-bahan/bahan-masuk"}
            className="flex justify-center items-center hover:bg-gray-100 hover:transition hover:scale-105 p-3 rounded-xl"
          >
            <p className="text-sm mr-2 font-medium">Lihat semua</p>
            <MdOpenInFull className="text-zinc-600" />
          </Link>
        </div>
      </div>
    </>
  );
}
