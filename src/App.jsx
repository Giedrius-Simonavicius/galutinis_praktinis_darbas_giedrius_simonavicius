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
import Feedback from './components/ui/feedback/Feedback';
import Logout from './components/auth/Logout';

function App() {
  const { isLoggedIn } = useAuthCtx();
  Logout();
  return (
    <div>
      <Header />
      <Feedback />
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to={'/shops'} /> : <LoginPage />}
        />
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to={'/shops'} /> : <LoginPage />}
        />
        <Route
          path="/register"
          element={isLoggedIn ? <Navigate to={'/shops'} /> : <RegisterPage />}
        />
        <Route
          path="/shops"
          element={isLoggedIn ? <ShopsPage /> : <Navigate to={'/login'} />}
        />

        <Route
          path="/shops-new"
          element={!isLoggedIn ? <Navigate to={'/login'} /> : <AddShopPage />}
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
