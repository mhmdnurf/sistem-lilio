import {
  MdCoffee,
  MdHome,
  MdMedicalInformation,
  MdFastfood,
  MdAssignment,
  MdExitToApp,
} from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { app } from "../utils/firebase";
import Swal from "sweetalert2";
import { getAuth, signOut } from "firebase/auth";

export default function Sidebar() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const result = await Swal.fire({
        title: "Apakah Anda Yakin?",
        text: "Anda akan segera logout dari sistem",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#334155",
        cancelButtonColor: "#94a3b8",
        cancelButtonText: "Batal",
        confirmButtonText: "Confirm",
      });

      if (result.isConfirmed) {
        const auth = getAuth(app);
        await signOut(auth);
        Swal.fire("Berhasil", "Anda berhasil logout", "success");
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };
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
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-4 backdrop-opacity-15 hover:transform hover:scale-110 shadow drop-shadow bg-white bg-opacity-5 rounded-lg mx-4 my-4"
                  : "flex items-center p-4  hover:transform hover:scale-110  bg-opacity-5 rounded-lg mx-4 my-4"
              }
            >
              <MdHome className="text-white text-2xl mr-4" />
              <p className="text-white font-semibold">Dashboard</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/master-barang"}
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-4 backdrop-opacity-15 hover:transform hover:scale-110 shadow drop-shadow bg-white bg-opacity-5 rounded-lg mx-4 my-4"
                  : "flex items-center p-4  hover:transform hover:scale-110  bg-opacity-5 rounded-lg mx-4 my-4"
              }
            >
              <MdMedicalInformation className="text-white text-2xl mr-4" />
              <p className="text-white font-semibold">Master Barang</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/master-bahan"}
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-4 backdrop-opacity-15 hover:transform hover:scale-110 shadow drop-shadow bg-white bg-opacity-5 rounded-lg mx-4 my-4"
                  : "flex items-center p-4  hover:transform hover:scale-110  bg-opacity-5 rounded-lg mx-4 my-4"
              }
            >
              <MdFastfood className="text-white text-2xl mr-4" />
              <p className="text-white font-semibold">Master Bahan</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/laporan"}
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-4 backdrop-opacity-15 hover:transform hover:scale-110 shadow drop-shadow bg-white bg-opacity-5 rounded-lg mx-4 my-4"
                  : "flex items-center p-4  hover:transform hover:scale-110  bg-opacity-5 rounded-lg mx-4 my-4"
              }
            >
              <MdAssignment className="text-white text-2xl mr-4" />
              <p className="text-white font-semibold">Laporan</p>
            </NavLink>
          </li>
          <li>
            <div className="flex items-center p-4 rounded-lg mx-4 my-4 hover:transform hover:scale-110">
              <MdExitToApp className="text-white text-2xl mr-4" />
              <button
                className="text-white font-semibold"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
