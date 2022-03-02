import './App.css';

import Sidebar from "./components/Sidebar";
import NavigationBar from './components/NavigationBar';
import Panels from './components/Panels';

import DashboardPage from './pages/dashboard/DashboardPage';
import PageNotFound from './pages/404/PageNotFound';
import LoginPage from './pages/login/LoginPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage/>} />

        {/* Page not found */}
        <Route path='*' element={<PageNotFound />} />

        {/* Navigation Bar */}
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/notification" element={<DashboardPage/>} />
        <Route path="/mail" element={<DashboardPage/>} />
        <Route path="/profile" element={<DashboardPage/>} />
        <Route path="/settings" element={<DashboardPage/>} />

        {/* Sidebar */}
        <Route path="/profileSetting" element={<DashboardPage/>} />
        <Route path="/dashboard" element={<DashboardPage/>} />
        <Route path="/sellers" element={<DashboardPage/>} />
        <Route path="/users" element={<DashboardPage/>} />
        <Route path="/categories" element={<DashboardPage/>} />
        <Route path="/products" element={<DashboardPage/>} />
        <Route path="/orders" element={<DashboardPage/>} />
        <Route path="/reviews" element={<DashboardPage/>} />
        <Route path="/brands" element={<DashboardPage/>} />
        <Route path="/authentication" element={<DashboardPage/>} />
        <Route path="/icons" element={<DashboardPage/>} />
        <Route path="/preferences" element={<DashboardPage/>} />
        <Route path="/info" element={<DashboardPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
