import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

const routes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Dashboard />,
  },
];

export default routes;
