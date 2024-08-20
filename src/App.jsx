import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ReceiptPage from "./pages/ReceiptPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/receipt" element={<ReceiptPage />} />
    </Routes>
  );
}

export default App;
