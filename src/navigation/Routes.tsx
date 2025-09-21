import { Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect } from "react";

const Home = React.lazy(() => import("../pages/Home"));
const NotFound = React.lazy(() => import("../pages/NotFound"));
const SigninForm = React.lazy(() => import("../pages/Signin"));
const SignupForm = React.lazy(() => import("../pages/signup"));

export const AppRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("Scrolling to top");
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/signin" element={<SigninForm />} />
      <Route path="/signup" element={<SignupForm />} />
    </Routes>
  );
};
