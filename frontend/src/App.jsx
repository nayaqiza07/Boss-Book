import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layout
import PublicLayout from "./layouts/PublicLayout";

// Auth
import LoginView from "./pages/auth/LoginView";
import SignUpView from "./pages/auth/SignUpView";

// Protect Route
import ProtectedRoute from "./components/utils/ProtectedRoute";

// Page Component
import Dashboard from "./pages/Dashboard";
import Transaksi from "./pages/Transaksi";
import Outcome from "./pages/Outcome";
import CalculatorView from "./pages/CalculatorView";
import Piutang from "./pages/Piutang";
import Utang from "./pages/Utang";
import Income from "./pages/Income";
import Order from "./pages/Order";
import Client from "./pages/Client";
import ClientView from "./pages/ClientView";

// Loader API Data
import { getClients } from "./api/clientApi";
import { getOrders } from "./api/orderApi";

// Action
import { action as LoginAction } from "./pages/auth/LoginView";
import { action as SignUpAction } from "./pages/auth/SignUpView";

// Storage
import { store } from "./store";

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
        loader: () => getOrders(),
      },
      {
        path: "calculator",
        element: <CalculatorView />,
      },
      {
        path: "client",
        element: <Client />,
        loader: () => getClients(),
      },
      {
        path: "client/order/current/client/:id",
        element: <ClientView />,
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
