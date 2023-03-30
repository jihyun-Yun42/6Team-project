import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../components/GlobalStyle";
import DeliveryHome from "../pages/DeliveryHome";
import Home from "../pages/Home";
import Join from "../pages/Join";
import Login from "../pages/Login";
import OAuthKakao from "../pages/OAuthKakao";
import StoreSearch from "../pages/StoreSearch";
import { cookies } from "./cookies";
import { ProtectedRoute } from "./ProtectedRoute";

function Router() {
  const token = cookies.get("token");
  const pages = [
    { pathname: "/", element: <Home></Home>, isPublic: true },
    { pathname: "/login", element: <Login></Login>, isPublic: true },
    { pathname: "/join", element: <Join></Join>, isPublic: true },
    {
      pathname: "/deliveryHome",
      element: <DeliveryHome></DeliveryHome>,
      isPublic: true,
    },
    {
      pathname: "/storeSearch",
      element: <StoreSearch></StoreSearch>,
      isPublic: true,
    },
    // {
    //   pathname: "/oauth/kakao",
    //   element: <OAuthKakao></OAuthKakao>,
    //   isPublic: true,
    // },
  ];
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        {pages.map((page) => {
          const isAuthenticated = page.isPublic || token;
          return (
            <Route
              key={page.pathname}
              path={page.pathname}
              element={
                <ProtectedRoute
                  token={token}
                  pathname={page.pathname}
                  isAuthenticated={isAuthenticated}
                >
                  {page.element}
                </ProtectedRoute>
              }
            />
          );
        })}
        <Route path="/oauth/kakao" element={<OAuthKakao />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
