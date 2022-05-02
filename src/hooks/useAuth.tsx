import { useSelector } from "react-redux";

const useAuth = () => {
  const auth: any = useSelector<any>((state) => state.auth);
  return { isLogin: auth.isLogin, user: auth.user };
};

export default useAuth;
