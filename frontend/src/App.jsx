import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Layout/Home";
import Dashboard from "./pages/Dashboard";
import Income from "./pages/Income";
import Outcome from "./pages/Outcome";
import Invoice from "./pages/Invoice";
import Calculator from "./pages/Calculator";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="outcome" element={<Outcome />} />
          <Route path="invoice" element={<Invoice />} />
          <Route path="calculator" element={<Calculator />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
