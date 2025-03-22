import React from "react";
import AuthScreen from "../AuthScreen/AuthScreen";
import HomeScreen from "../HomeScreen/HomeScreen";

function HomePage() {
  const user = true;

  return (
    <>
      <div className="app_bg">
        {user ? <HomeScreen/> :  <AuthScreen/>}

      </div>
    </>
  );
}

export default HomePage;
