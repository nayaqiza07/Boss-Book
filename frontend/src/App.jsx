import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layout
import PublicLayout from "./layouts/PublicLayout";

// Auth
import LoginView from "./pages/auth/LoginView";
import SignUpView from "./pages/auth/SignUpView";

// Page Component
import Dashboard from "./pages/Dashboard";
import Transaksi from "./pages/Transaksi";
import Outcome from "./pages/Outcome";
import Calculator from "./pages/Calculator";
import Piutang from "./pages/Piutang";
import Utang from "./pages/Utang";
import Income from "./pages/Income";
import Order from "./pages/Order";
import Client from "./pages/Client";
import ClientView from "./pages/ClientView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "transaksi",
        element: <Transaksi />,
      },
      {
        path: "piutang",
        element: <Piutang />,
      },
      {
        path: "utang",
        element: <Utang />,
      },
      {
        path: "income",
        element: <Income />,
      },
      {
        path: "outcome",
        element: <Outcome />,
      },
      {
        path: "order",
        element: <Order />,
      },
      {
        path: "calculator",
        element: <Calculator />,
      },
      {
        path: "client",
        element: <Client />,
      },
      {
        path: "client/view/:id",
        element: <ClientView />,
      },
    ],
  },
  {
    path: "login",
    element: <LoginView />,
  },
  {
    path: "signup",
    element: <SignUpView />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
