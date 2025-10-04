import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/home');

    }

  return (
    <>
      <div className="flex justify-evenly">
        <div>
          <img src="thread.webp" className="size-65 mt-32" alt="thread-logo" />
        </div>
        <form className="flex flex-col mt-30 w-95">
          <p className="ml-35 mb-2 font-sans font-bold text-2xl">Login</p>
          <input
            className="mt-2 p-3 border-2 rounded-2xl bg-gray-200 font-sans font-normal"
            name="username"
            type="text"
            placeholder="Name"
          />
          <input
            className="mt-2 p-3 border-2 rounded-2xl bg-gray-200 font-sans font-normal"
            name="password"
            type="password"
            placeholder="Password"
          />
          <button
            className="mt-2 p-3 border-2 rounded-2xl bg-blue-400 font-sans font-normal  text-white"
            type="submit" onClick={handleSubmit}
          >
            Login
          </button>
          <div className="flex flex-row mx-auto gap-2">
            <p
            className="mt-4"
            onClick={() => {
              navigate("/forgotPasswd");
            }}
          >
            Forgot Password ?</p>
          <span
              className="cursor-pointer mt-4  text-red-600 hover:text-blue-800"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Signup
            </span>
          </div>
          
        </form>
      </div>
    </>
  );
};

export default Login;
