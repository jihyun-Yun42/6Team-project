import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../components/GlobalStyle";
import NaverLogin from "../components/NaverLogin";
import DeliveryHome from "../pages/DeliveryHome";
import Home from "../pages/Home";
import Join from "../pages/Join";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import StoreSearch from "../pages/StoreSearch";

function Router() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/deliveryHome" element={<DeliveryHome />} />
        <Route path="/storeSearch" element={<StoreSearch />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/naver" component={<NaverLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
