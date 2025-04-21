import HomePage from "./components/HomePage/HomePage";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authUser";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Loader } from "lucide-react";

function App() {
  const { user, isCheckingAuth, authCheck } = useAuthStore();
  console.log("Auth user is here:", user);

  useEffect(() => {
    authCheck();
  }, []);

  if (isCheckingAuth) {
    return (
      <div className="h-screen">
        <div className="flex justify-center items-center bg-white h-full">
          <Loader className="animate-spin text-black size-10" />
        </div>
      </div>
    );
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to={"/"} />}
        />
        <Route
          path="/signup"
          element={!user ? <SignUp /> : <Navigate to={"/"} />}
        />
      </Routes>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
