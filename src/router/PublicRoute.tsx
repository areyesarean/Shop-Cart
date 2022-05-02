import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PublicRoute = () => {
  const { isLogin } = useAuth();

  return isLogin ? <Navigate to={"/products"} /> : <Outlet />;
}

export default PublicRoute