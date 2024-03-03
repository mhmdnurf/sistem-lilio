import { MdCoffee, MdHome } from "react-icons/md";

export default function Sidebar() {
  return (
    <div className="bg-slate-800 w-[250px] h-screen">
      <div className="h-16 p-4">
        <MdCoffee className="text-white text-5xl" />
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
            <div className="flex items-center p-4 backdrop-opacity-15 shadow drop-shadow bg-white bg-opacity-5 rounded-lg mx-4 my-4">
              <MdHome className="text-white text-2xl mr-4" />
              <a href="#" className="text-white ">
                Dashboard
              </a>
            </div>
          </li>
          <li>
            <div className="flex items-center p-4 backdrop-opacity-15 shadow drop-shadow bg-white bg-opacity-5 rounded-lg mx-4 my-4">
              <MdHome className="text-white text-2xl mr-4" />
              <a href="#" className="text-white ">
                Master Barang
              </a>
            </div>
          </li>
          <li>
            <div className="flex items-center p-4 backdrop-opacity-15 shadow drop-shadow bg-white bg-opacity-5 rounded-lg mx-4 my-4">
              <MdHome className="text-white text-2xl mr-4" />
              <a href="#" className="text-white ">
                Master Bahan
              </a>
            </div>
          </li>
          <li>
            <div className="flex items-center p-4 backdrop-opacity-15 shadow drop-shadow bg-white bg-opacity-5 rounded-lg mx-4 my-4">
              <MdHome className="text-white text-2xl mr-4" />
              <a href="#" className="text-white ">
                Laporan
              </a>
            </div>
          </li>
          <li>
            <div className="flex items-center p-4 backdrop-opacity-15 shadow drop-shadow bg-white bg-opacity-5 rounded-lg mx-4 my-4">
              <MdHome className="text-white text-2xl mr-4" />
              <a href="#" className="text-white ">
                Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}