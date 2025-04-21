import { Link } from "react-router-dom";
import { useState } from "react";
import { LogOut, Search, Menu } from "lucide-react";
import { useAuthStore } from "../../store/authUser";

function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { logout } = useAuthStore();

//   const toggleHamburger = () => setIsMobileOpen(!isMobileOpen);

  return (
    <div className="max-w-6xl mx-auto relative w-full bg-black/40">
      <header className="max-w-6xl w-full mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-10 z-50">
          <Link to="/">
            <p className="text-white text-2xl font-bold">Game Library</p>
          </Link>
        </div>

        {/* Revist after app completion to create other pages that the user may or may not enjoy. For MVP, just get basic functionality done with adding searched games to library */}

        {/* <div className="hidden sm:flex gap-2 items-center text-white">
          <Link to="/" className="hover:underline">
            Popular Games
          </Link>
          <Link to="/" className="hover:underline">
            Search
          </Link>
        </div> */}

        <div className="flex gap-3 items-center z-50 justify-end">
          <Link to={"/search"}>
            <Search className="size-5 cursor-pointer text-white" />
          </Link>
          <Link to={"/library"}>
            <p className="text-white">Library</p>
          </Link>
          <Link to={"/"}>
            <LogOut className="text-white" onClick={logout} />
          </Link>

          {/* <div className="sm:hidden">
            <Menu
              className="size-6 cursor-pointer text-white"
              onClick={toggleHamburger}
            />
          </div> */}
        </div>
      </header>

      {/* {isMobileOpen && (
        <div className="absolute top-full left-0 w-full sm:hidden z-40 bg-black/80 border-t text-white">
          <Link
            to={"/"}
            className="block hover:underline p-2"
            onClick={toggleHamburger}
          >
            Popular Games
          </Link>
          <Link
            to={"/"}
            className="block hover:underline p-2 border-t"
            onClick={toggleHamburger}
          >
            Test
          </Link>
        </div>
      )} */}
    </div>
  );
}
export default Navbar;
