import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = () => {
  const { isLogin } = useAuth();

  return isLogin ? <Outlet /> : <Navigate to={"/"} />;
};

export default PrivateRoute;
