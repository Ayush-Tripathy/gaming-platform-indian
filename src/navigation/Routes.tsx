import { Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect } from "react";

const Home = React.lazy(() => import("../pages/Home"));
const SignUp = React.lazy(() => import("../pages/signup"));
const NotFound = React.lazy(() => import("../pages/NotFound"));

export const AppRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("Scrolling to top");
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
