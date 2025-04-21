import React from "react";
import AuthScreen from "../AuthScreen/AuthScreen";
import HomeScreen from "../HomeScreen/HomeScreen";
import { useAuthStore } from "../../store/authUser";

function HomePage() {
  const { user } = useAuthStore();

  return (
    <>
      <div className="app_bg">
        {user ? <HomeScreen/> :  <AuthScreen/>}

      </div>
    </>
  );
}

export default HomePage;
