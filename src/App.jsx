import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ReceiptPage from "./pages/ReceiptPage";
import OrderDetail from "./components/OrderDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/orderdetail" element={<OrderDetail />} />
      <Route path="/receipt" element={<ReceiptPage />} />
    </Routes>
  );
}

export default App;
