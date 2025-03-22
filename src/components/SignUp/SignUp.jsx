import { Link } from "react-router-dom";
import { useState } from "react";

function SignUp() {

  {/* State for 3 forms */}
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(email, username, password);
  }

  return (
    <div className="h-screen w-full app_bg">
      <header className="max-w-6xl mx-auto flex items-center justify-between p-4 bg-black/40">
        <Link to={"/"}>
          <p className="text-white text-2xl">Game Library</p>
        </Link>
      </header>

      <div className="flex justify-center items-center mt-20 mx-3">
        <div className="w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg shadow-md">
          <h1 className="text-center text-white text-2xl font-bold mb-4">
            Sign Up
          </h1>

          <form className="space-y-4" onSubmit={handleSignup}>
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-300 block"
              >
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 mt-1 border border-white rounded-md bg-transparent text-white focus:outline-none focus:ring"
                placeholder="you@example.com"
                id="email"
                value={email}
                onChange= {(e) => setEmail(e.target.value)}/>
            </div>

            {/* Username Input */}
            <div>
              <label
                htmlFor="username"
                className="text-sm font-medium text-gray-300 block"
              >
                Username
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 mt-1 border border-white rounded-md bg-transparent text-white focus:outline-none focus:ring"
                placeholder="John Doe"
                id="username"
                value={username}
                onChange= {(e) => setUsername(e.target.value)}/>
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

            <button className="w-full py-2 bg-white font-semibold rounded-md hover:bg-gray-400">
              Sign Up
            </button>
          </form>

          {/* Login Link */}

          <div className="text-center text-white">
            Already have an account?
            <Link to={"/login"}>
              <h2 className="text-blue-400 font-semibold hover:underline">
                Login
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
