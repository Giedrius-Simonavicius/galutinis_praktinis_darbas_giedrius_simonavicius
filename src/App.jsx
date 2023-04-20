import "./styles/App.css";
import "./styles/reset.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ShopsPage from "./pages/ShopsPage";
import AddShopPage from "./pages/AddShopPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/shops" element={<ShopsPage />} />
        <Route path="/shops/new" element={<AddShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
