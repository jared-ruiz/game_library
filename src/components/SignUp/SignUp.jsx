import { Link } from "react-router-dom";
import { useState } from "react";

function SignUp() {

  const {searchParams} = new URL(document.location)
  const emailValue = searchParams.get("email");

  const [email, setEmail] = useState(emailValue || "");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");



  const handleSignup = (e) => {
    e.preventDefault();
    console.log(email, username, password);
  };

  return (
    <>
      <div className="h-screen w-full flex flex-col app_bg font-[poppins]">
        <header className="relative z-10 max-w-6xl w-full mx-auto flex items-center justify-between p-4 bg-black/40">
          <Link to={"/"}>
            <p className="text-white text-2xl font-bold">Game Library</p>
          </Link>
        </header>

        {/* BG and Overlay */}
        <div className="relative max-w-6xl w-full mx-auto h-full flex items-center justify-center">
          <img
            src="game-4.jpg"
            alt="Background"
            className="absolute inset-0 w-full h-full -z-10 object-cover"
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-xs"></div>

          <div className="relative z-10 flex-1 flex justify-center items-center w-full max-w-6xl mx-auto p-4">
            <div className="w-full max-w-md p-8 space-y-6 bg-black/80 rounded-lg shadow-md">
              <h1 className="text-center text-white text-2xl font-bold mb-4">
                Sign Up
              </h1>

              <form className="space-y-4" onSubmit={handleSignup}>
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
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

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
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-300 block"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 mt-1 border border-white rounded-md bg-transparent text-white focus:outline-none focus:ring"
                    placeholder="**********"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button className="w-full py-2 bg-white font-semibold rounded-md hover:bg-gray-400">
                  Sign Up
                </button>
              </form>

              <div className="text-center text-white">
                Already Have an Account?
                <Link to={"/login"}>
                  <h2 className="text-blue-400 font-semibold hover:underline">
                    Login
                  </h2>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
