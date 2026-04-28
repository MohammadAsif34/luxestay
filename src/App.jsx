import React from "react";
import LoginPage from "./pages/authPage/LoginPage";
import Home from "./pages/homePage/Home";
import Navbar from "./components/component/navabar/Navbar";
import AppRouter from "./routes/AppRouter";

const App = () => {
  return (
    <AppRouter />
    // <div className="w-screen h-screen relative ">
    //   {/* welcome back */}
    //   <LoginPage />
    //   {/* <Navbar /> */}
    //   {/* <Home /> */}
    // </div>
  );
};

export default App;
