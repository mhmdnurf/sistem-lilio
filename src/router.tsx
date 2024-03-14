import Dashboard from "./pages/Dashboard";
import Laporan from "./pages/Laporan";
import Login from "./pages/Login";
import MasterBahan from "./pages/MasterBahan";
import MasterBarang from "./pages/MasterBarang";

const routes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/master-barang",
    element: <MasterBarang />,
  },
  {
    path: "/master-bahan",
    element: <MasterBahan />,
  },
  {
    path: "/laporan",
    element: <Laporan />,
  },
];

export default routes;
