import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DeliveryHome from '../pages/DeliveryHome';
import Home from '../pages/Home';
import Join from '../pages/Join';
import Login from '../pages/Login';
import StoreSearch from '../pages/StoreSearch';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/deliveryHome" element={<DeliveryHome />} />
        <Route path="/storeSearch" element={<StoreSearch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
