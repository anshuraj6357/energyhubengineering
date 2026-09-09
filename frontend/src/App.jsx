import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import LandingPage from "./pages/landingpage";
import Navbar from "./header/navbar";
import Footer from "./footerPage/footer";

import Login from "./pages/authpages/login";
import Signup from "./pages/authpages/signup";
import ForgotPassword from "./pages/authpages/forgotpassword";

function App() {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
             
              <LandingPage />
            </>
          }
        />

        {/* LOGIN */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* SIGNUP */}
        <Route
          path="/signup"
          element={<Signup />}
        />

        {/* FORGOT PASSWORD */}
        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;