import './App.css';

import Sidebar from "./components/sidebar/Sidebar";
import NavigationBar from './components/NavigationBar';
import Panels from './components/panels/AllProductsPanel';

import DashboardPage from './pages/dashboard/DashboardPage';
import PageNotFound from './pages/404/PageNotFound';
import LoginPage from './pages/login/LoginPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import AllProductsPanel from 'components/panels/AddProductPanel';
import { AddProductPanel } from 'components/panels';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />

        {/* Panels */}
        <Route path='/' element={<DashboardPage/>}>
          <Route index element={<AllProductsPanel title="All Products"/>} />
          <Route path='add' element={<AddProductPanel title="Add Product" />} />
        </Route>

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
        <Route path="/view" element={<DashboardPage/>} />
        <Route path="/add" element={<DashboardPage/>} />
        <Route path="/edit" element={<DashboardPage/>} />
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
