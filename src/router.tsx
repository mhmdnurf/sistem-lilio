import AddBarangKeluar from "./pages/barang/AddBarangKeluar";
import AddBarangMasuk from "./pages/barang/AddBarangMasuk";
import AddMasterBarang from "./pages/barang/AddMasterBarang";
import BahanKeluar from "./pages/bahan/BahanKeluar";
import BahanMasuk from "./pages/bahan/BahanMasuk";
import BarangKeluar from "./pages/barang/BarangKeluar";
import BarangMasuk from "./pages/barang/BarangMasuk";
import Dashboard from "./pages/Dashboard";
import Laporan from "./pages/laporan/Laporan";
import Login from "./pages/Login";
import MasterBahan from "./pages/bahan/MasterBahan";
import MasterBarang from "./pages/barang/MasterBarang";
import AddBahanMasuk from "./pages/bahan/AddBahanMasuk";
import AddMasterBahan from "./pages/bahan/AddMasterBahan";
import EditMasterBahan from "./pages/bahan/EditMasterBahan";
import AddBahanKeluar from "./pages/bahan/AddBahanKeluar";

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
    path: "/master-bahan/tambah",
    element: <AddMasterBahan />,
  },
  {
    path: "/master-bahan/edit/:id",
    element: <EditMasterBahan />,
  },
  {
    path: "/master-bahan/bahan-masuk",
    element: <BahanMasuk />,
  },
  {
    path: "/master-bahan/bahan-masuk/tambah",
    element: <AddBahanMasuk />,
  },
  {
    path: "/master-bahan/bahan-keluar",
    element: <BahanKeluar />,
  },
  {
    path: "/master-bahan/bahan-keluar/tambah",
    element: <AddBahanKeluar />,
  },
  {
    path: "/laporan",
    element: <Laporan />,
  },
];

export default routes;
