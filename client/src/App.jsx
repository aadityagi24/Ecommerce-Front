import { Routes, Route } from 'react-router-dom';

// Public Pages
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import Pagenotfound from './pages/Pagenotfound';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import ForgotPassword from './pages/Auth/ForgotPassword';
import Search from './pages/Search';
import ProductDetails from './pages/ProductDetails';
import Categories from './pages/Categories';
import CategoryProduct from './pages/CategoryProduct';
import CartPage from './pages/CartPage';

// User Dashboard
import Dashboard from './pages/user/Dashboard';
import Orders from './pages/user/Orders';
import Profile from './pages/user/Profile';
import Users from './pages/user/Users';

// Admin Dashboard
import AdminDashboard from './pages/Admin/AdminDashboard';
import CreateCategory from './pages/Admin/CreateCategory';
import CreateProduct from './pages/Admin/CreateProduct';
import Products from './pages/Admin/Products';
import UpdateProduct from './pages/Admin/UpdateProduct';
import AdminOrders from './pages/Admin/AdminOrders';

import PrivateRoute from './components/Routes/Private';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<HomePage />} />
        <Route path='/product/:slug' element={<ProductDetails />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/category/:slug' element={<CategoryProduct />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/search' element={<Search />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/policy' element={<Policy />} />

        {/* User Dashboard Routes */}
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/user' element={<Dashboard />}>
          <Route path='orders' element={<Orders />} />
          <Route path='profile' element={<Profile />} />
        </Route>

        {/* Admin Dashboard Routes */}
        <Route path='/dashboardadmin' element={<AdminDashboard />}>
          <Route path='admin/create-category' element={<CreateCategory />} />
          <Route path='admin/create-product' element={<CreateProduct />} />
          <Route path='admin/products' element={<Products />} />
          <Route path='product/:slug' element={<UpdateProduct />} />
          <Route path='admin/users' element={<Users />} />
          <Route path='admin/orders' element={<AdminOrders />} />
        </Route>

        {/* 404 Page */}
        <Route path='*' element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
