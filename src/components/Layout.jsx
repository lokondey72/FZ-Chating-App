import { Outlet, useNavigate, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Layout = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.userSlice.user);
  useEffect(() => {
    if (!user) {
      return navigate("/login");
    }
  }, []);

  return (
    <div className="flex">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
