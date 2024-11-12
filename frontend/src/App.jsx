import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Layout/Home";
import Dashboard from "./pages/Dashboard";
import Transaksi from "./pages/Transaksi";
import Outcome from "./pages/Outcome";
import Invoice from "./pages/Invoice";
import Calculator from "./pages/Calculator";
import Piutang from "./pages/Piutang";
import Utang from "./pages/Utang";
import Income from "./pages/Income";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Dashboard />} />
          <Route path="transaksi" element={<Transaksi />} />
          <Route path="piutang" element={<Piutang />} />
          <Route path="utang" element={<Utang />} />
          <Route path="outcome" element={<Outcome />} />
          <Route path="income" element={<Income />} />
          <Route path="invoice" element={<Invoice />} />
          <Route path="calculator" element={<Calculator />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
