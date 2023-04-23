import './styles/App.css';
import './styles/reset.css';
import { Navigate, Route, Routes } from 'react-router-dom';
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
        <Route
          path="/"
          element={!isLoggedIn ? <LoginPage /> : <Navigate to={'/shops'} />}
        />
        <Route
          path="/login"
          element={!isLoggedIn ? <LoginPage /> : <Navigate to={'/shops'} />}
        />
        <Route
          path="/register"
          element={!isLoggedIn ? <RegisterPage /> : <Navigate to={'/shops'} />}
        />
        <Route
          path="/shops"
          element={isLoggedIn ? <ShopsPage /> : <Navigate to={'/login'} />}
        />
        <Route
          path="/shops-new"
          element={isLoggedIn ? <AddShopPage /> : <Navigate to={'/login'} />}
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
