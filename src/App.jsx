import './styles/App.css';
import './styles/reset.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ShopsPage from './pages/ShopsPage';
import AddShopPage from './pages/AddShopPage';
import Footer from './components/layout/Footer';
import NotFoundPage from './pages/NotFoundPage';
import { useAuthCtx } from './store/AuthProvider';

function App() {
  const { isLoggedIn } = useAuthCtx();
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/shops"
          element={
            (isLoggedIn && <ShopsPage />) ||
            (!isLoggedIn && <h1>Must login</h1>)
          }
        />

        <Route
          path="/shops/new"
          element={
            (isLoggedIn && <AddShopPage />) ||
            (!isLoggedIn && <h1>Must login</h1>)
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
