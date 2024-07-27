import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState();
  const [isLoginAttempt, setIsLoginAttempt] = useState(false);
  const navigate = useNavigate();
  const authentication = () => {
    if (login === "santhosh" && password === "12345") {
      navigate("/dashboard");
    } else {
      alert("Login Failed");
    }
    setIsLoginAttempt(true);
  };
  return (
    <div className="bg-[#e6e8e6] h-screen w-screen flex items-center">
      <div className="flex flex-col gap-[2.5vh] w-[30vw]  mx-auto bg-white p-[5vw] bottom-4 rounded-lg ">
        <h1 className="text-3xl font-bold">Login</h1>
        <label htmlFor="loginInput">Login</label>
        <input
          className="bg-[#e6e8e6] border-none p-3 rounded"
          type="text"
          id="loginInput"
          placeholder="Email"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <label htmlFor="passwordInput">Password</label>
        <input
          className="bg-[#e6e8e6] border-none p-3 rounded"
          type="password"
          id="passwordInput"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-blue-700 text-white p-3 border-none rounded-lg"
          onClick={authentication}
        >
          Login
        </button>
        {isLoginAttempt ? (
          auth ? (
            <h1>Sucessfull</h1>
          ) : (
            <h1>Fail</h1>
          )
        ) : (
          <h1></h1>
        )}
        <hr className="w-full opacity-50" />
      </div>
    </div>
  );
};

export default Login;
