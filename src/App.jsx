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
import NotLoggedIn from './pages/NotLoggedIn';

function App() {
  const { isLoggedIn } = useAuthCtx();
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={!isLoggedIn ? <LoginPage /> : <ShopsPage />} />
        <Route
          path="/login"
          element={!isLoggedIn ? <LoginPage /> : <ShopsPage />}
        />
        <Route
          path="/register"
          element={!isLoggedIn ? <RegisterPage /> : <ShopsPage />}
        />

        <Route
          path="/shops"
          element={isLoggedIn ? <ShopsPage /> : <NotLoggedIn />}
        />

        <Route
          path="/shops-new"
          element={isLoggedIn ? <AddShopPage /> : <NotLoggedIn />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
