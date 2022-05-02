import { useDispatch } from "react-redux";
import { actionAuthTypes } from "../../../types/actionTypes";

const Login = () => {
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch({ type: actionAuthTypes.LOGIN, payload: "areyesarean" });
  };
  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
