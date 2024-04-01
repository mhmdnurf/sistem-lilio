import AddBarangKeluar from "./pages/AddBarangKeluar";
import AddBarangMasuk from "./pages/AddBarangMasuk";
import AddMasterBarang from "./pages/AddMasterBarang";
import BahanKeluar from "./pages/BahanKeluar";
import BahanMasuk from "./pages/BahanMasuk";
import BarangKeluar from "./pages/BarangKeluar";
import BarangMasuk from "./pages/BarangMasuk";
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
    path: "/master-barang/tambah",
    element: <AddMasterBarang />,
  },
  {
    path: "/master-barang/barang-masuk",
    element: <BarangMasuk />,
  },
  {
    path: "/master-barang/barang-masuk/tambah",
    element: <AddBarangMasuk />,
  },
  {
    path: "/master-barang/barang-keluar",
    element: <BarangKeluar />,
  },
  {
    path: "/master-barang/barang-keluar/tambah",
    element: <AddBarangKeluar />,
  },
  {
    path: "/master-bahan",
    element: <MasterBahan />,
  },
  {
    path: "/master-bahan/bahan-masuk",
    element: <BahanMasuk />,
  },

  {
    path: "/master-bahan/bahan-keluar",
    element: <BahanKeluar />,
  },
  {
    path: "/laporan",
    element: <Laporan />,
  },
];

export default routes;
