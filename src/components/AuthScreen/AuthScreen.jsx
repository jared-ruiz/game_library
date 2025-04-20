import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import Footer from "../Footer/Footer";

function AuthScreen() {
  const [email, setEmail] = useState("");
  
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate("/signup?email=" + email);
  }

  return (
    <div className="app_bg font-[Poppins]">
      <header className="max-w-6xl w-full mx-auto flex items-center justify-between p-4 bg-black/40">
        <p className="text-white text-2xl font-bold">Game Library</p>

        <Link to={"/login"}>
          <p className="text-white text-xl hover:underline hover:text-blue-400">
            Login
          </p>
        </Link>
      </header>

      <div className="flex flex-col items-center justify-center text-center py-40 text-white max-w-6xl mx-auto w-full  bg-black/60">
        <h1 className="text-5xl md:text-5xl font-bold mb-4 sm:text-5xl">
          Explore Your Game Library with Ease
        </h1>
        <h2 className="text-2xl w-sm md:text-3xl lg:w-auto font-bold mb-2 sm:text-3xl">
          Search Through an Expansive Library
        </h2>
        <p className="md:text-2xl sm:text-2xl">
          Discover and Add Games to Your Collection
        </p>

        <form className="flex flex-col md:flex-row gap-4 w-2xl mt-10 items-center" onSubmit={handleFormSubmit}>
          <input
            type="email"
            className="w-2xs md:w-full px-3 py-3 mt-1 border border-white rounded-md bg-transparent text-white focus:outline-none focus:ring sm:w-md"
            placeholder="you@example.com"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="text-xl lg:text 2xl px-2 lg:px-3 py-1 md:py-2 rounded flex justify-center items-center bg-black/60 w-3xs hover:bg-blue-400 sm:w-md">
            Get Started
            <ChevronRight className="size-8 md:size-10" />
          </button>
        </form>
      </div>

      {/* separator */}
      <div
        className="h-2 max-w-6xl w-full mx-auto bg-gray-600"
        aria-hidden="true"
      />

      <div className="flex flex-1 justify-center items-center max-w-6xl mx-auto py-10 pr-5 pl-5 bg-black/60 text-white">
        <div className="flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2">
          <div className="flex-1 p-2 text-center md:text-left">
            <h2 className="font-bold text-2xl">
              Over 300k Games to Search From
            </h2>
            <p className="text-lg">
              Quick and easy game search so you can find what you are looking
              for and get back to logging!
            </p>
          </div>

          <div className="flex-1  text-center md:text-left">
            <img src="/game-1.jpg" alt="ffxiv_image" className="rounded-2xl" />
            <p className="flex mr-2 justify-end text-blue-400 font-bold">
              Final Fantasy XIV
            </p>
          </div>
        </div>
      </div>

      {/* seperator */}
      <div
        className="h-2 max-w-6xl w-full mx-auto bg-gray-600"
        aria-hidden="true"
      />

      <div className="flex flex-1 justify-center items-center max-w-6xl mx-auto py-10 pr-5 pl-5 bg-black/60 text-white">
        <div className="flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2">
          <div className="flex-1 text-center md:text-left">
            <img src="/game-2.jpg" alt="bioshock_img" className="rounded-2xl" />
            <p className="flex mr-2 justify-start text-blue-400 font-bold">
              BioShock
            </p>
          </div>
          <div className="flex-1 p-2 text-center md:text-left">
            <h2 className="font-bold text-2xl ml-4">
              Keep Track of All Your Gaming History
            </h2>
            <p className="text-lg ml-4">
              Search, Save, Repeat. Your own personal digital library!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthScreen;
