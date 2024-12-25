import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layout
import PublicLayout from "@/layouts/PublicLayout";

// Auth
import LoginView from "@pages/auth/LoginView";
import SignUpView from "@pages/auth/SignUpView";

// Protect Route
import ProtectedRoute from "@components/utils/ProtectedRoute";

// Page Component
import Dashboard from "@pages/Dashboard";
import TransaksiView from "@pages/TransaksiView";
import Penjualan from "@/pages/Penjualan";
import GajiKaryawan from "@/pages/GajiKaryawan";
import Laporan from "@/pages/Laporan";
import Order from "@pages/Order";
import Calculator from "@/pages/Calculator";
import CalculatorData from "./pages/CalculatorData";
import CalculatorView from "./pages/CalculatorView";
import Contact from "@/pages/Contact";
import ContactView from "@/pages/ContactView";

// Loader API Data
// import { getClients } from "./api/clientApi";
// import { getOrders } from "./api/orderApi";

// Action
import { action as LoginAction } from "@pages/auth/LoginView";
import { action as SignUpAction } from "@pages/auth/SignUpView";

// Storage
import { store } from "./redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute element={<PublicLayout />} />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "transaksi",
        element: <TransaksiView />,
      },
      {
        path: "penjualan",
        element: <Penjualan />,
      },
      {
        path: "gaji",
        element: <GajiKaryawan />,
      },
      {
        path: "laporan",
        element: <Laporan />,
      },
      {
        path: "order",
        element: <Order />,
        // loader: () => getOrders(),
      },
      {
        path: "calculator",
        element: <Calculator />,
      },
      {
        path: "calculator/data",
        element: <CalculatorData />,
      },
      {
        path: "calculator/data/view/:id",
        element: <CalculatorView />,
      },
      {
        path: "contact",
        element: <Contact />,
        // loader: () => getClients(),
      },
      {
        path: "contact/view/:id",
        element: <ContactView />,
      },
    ],
  },
  {
    path: "login",
    element: <LoginView />,
    action: LoginAction(store),
  },
  {
    path: "signup",
    element: <SignUpView />,
    action: SignUpAction(store),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
