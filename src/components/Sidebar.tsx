import {
  MdCoffee,
  MdHome,
  MdMedicalInformation,
  MdFastfood,
  MdAssignment,
  MdExitToApp,
} from "react-icons/md";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="bg-slate-800 w-[250px] h-screen">
      <div className="h-16 p-4 justify-center items-center flex">
        <MdCoffee className="text-white text-5xl mt-12" />
      </div>
      <div className="backdrop-opacity-15 shadow drop-shadow bg-white bg-opacity-5 mx-4 rounded-lg">
        <div className="flex flex-col justify-center mt-16 rounded-md">
          <p className="text-white text-sm p-4 font-bold">
            Lilio Coffee Garden
          </p>
        </div>
      </div>
      <nav className="mt-8">
        <ul>
          <li className="">
            <Link
              to={"/"}
              className="flex items-center p-4 hover:transform hover:scale-110 backdrop-opacity-15 shadow drop-shadow bg-white bg-opacity-5 rounded-lg mx-4 my-4"
            >
              <MdHome className="text-white text-2xl mr-4" />
              <p className="text-white font-semibold">Dashboard</p>
            </Link>
          </li>
          <li>
            <Link
              to={"/master-barang"}
              className="flex items-center p-4 backdrop-opacity-15 hover:transform hover:scale-110 shadow drop-shadow bg-white bg-opacity-5 rounded-lg mx-4 my-4"
            >
              <MdMedicalInformation className="text-white text-2xl mr-4" />
              <p className="text-white font-semibold">Master Barang</p>
            </Link>
          </li>
          <li>
            <Link
              to={"/master-bahan"}
              className="flex items-center p-4 backdrop-opacity-15 shadow drop-shadow bg-white bg-opacity-5 rounded-lg mx-4 my-4 hover:transform hover:scale-110"
            >
              <MdFastfood className="text-white text-2xl mr-4" />
              <p className="text-white font-semibold">Master Bahan</p>
            </Link>
          </li>
          <li>
            <Link
              to={"/laporan"}
              className="flex items-center p-4 backdrop-opacity-15 shadow drop-shadow bg-white bg-opacity-5 rounded-lg mx-4 my-4 hover:transform hover:scale-110"
            >
              <MdAssignment className="text-white text-2xl mr-4" />
              <p className="text-white font-semibold">Laporan</p>
            </Link>
          </li>
          <li>
            <div className="flex items-center p-4 backdrop-opacity-15 shadow drop-shadow bg-white bg-opacity-5 rounded-lg mx-4 my-4 hover:transform hover:scale-110">
              <MdExitToApp className="text-white text-2xl mr-4" />
              <a href="#" className="text-white font-semibold">
                Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
