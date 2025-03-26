import { Link } from 'react-router-dom';
import { useState } from 'react';

function Login() {

    {/* State for 2 forms */}
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
  
    const handleLogin = (e) => {
      e.preventDefault();
      console.log(email, password);
    }

  return (
    <div className="h-screen w-full flex flex-col app_bg font-[poppins]">
      <header className="max-w-6xl w-full mx-auto flex items-center justify-between p-4 bg-black/40">
        <Link to={"/"}>
          <p className="text-white text-2xl font-bold">Game Library</p>
        </Link>
      </header>

      {/*flex justify-center items-center mt-20 mx-3*/}
      <div className="flex-1 flex justify-center items-center w-full max-w-6xl mx-auto bg-black/60 p-4">
        <div className="w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg shadow-md">
          <h1 className="text-center text-white text-2xl font-bold mb-4">
            Login
          </h1>

          <form className="space-y-4" onSubmit={handleLogin}>
            {/* Email Input */}

            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-300 block"
              >
                Email
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 mt-1 border border-white rounded-md bg-transparent text-white focus:outline-none focus:ring"
                placeholder="you@example.com"
                id="email"
                value={email}
                onChange= {(e) => setEmail(e.target.value)}/>
            </div>

            {/* Password Input */}

            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-300 block"
              >
                Password
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 mt-1 border border-white rounded-md bg-transparent text-white focus:outline-none focus:ring"
                placeholder="**********"
                id="password"
                value={password}
                onChange= {(e) => setPassword(e.target.value)}/>
            </div>

            <button className="w-full py-2 bg-white font-semibold rounded-md hover:bg-blue-400">
              Login
            </button>
          </form>

          {/* Login Link */}

          <div className="text-center text-white">
           Don't Have an Account?
            <Link to={"/signup"}>
              <h2 className="text-blue-400 font-semibold hover:underline">
                Sign Up
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login