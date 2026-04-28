import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import LoginPage from "../../pages/LoginPage";
import Home from "../pages/homePage/Home";
import Navbar from "../components/component/navabar/Navbar";
import Footer from "../components/component/footer/Footer";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import LoginPage from "../pages/authPage/LoginPage";
import PageNotFound from "../pages/pageNotFound/PageNotFound";
import Hotels from "../components/component/hotels/Hotels";
import RoomDescription from "../components/component/hotels/RoomDescription";

// Layout with Navbar + Footer
const MainLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

// Layout without Navbar/Footer (for auth)
const AuthLayout = () => <Outlet />;

const router = createBrowserRouter([
  // 🔐 Auth Routes
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        element: <PublicRoute />,
        children: [
          { index: true, element: <LoginPage /> },
          { path: "forget-password", element: <LoginPage /> },
        ],
      },
    ],
  },

  // 🌐 Main App Routes
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        element: <PrivateRoute />,
        children: [
          { index: true, element: <Home /> },
          { path: "hotels", element: <Hotels /> },
          { path: "hotels/room/:id", element: <RoomDescription /> },
          { path: "hotels/room/booking/:id", element: <RoomDescription /> },
          { path: "about", element: <Home /> },
          { path: "contact", element: <Home /> },
          { path: "*", element: <PageNotFound /> },
        ],
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
