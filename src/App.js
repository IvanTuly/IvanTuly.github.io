import React from "react";

import "./App.scss";
import Menu from "./components/Menu";
import Title from "./components/Title";

import Footer from "./components/Footer/Footer";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <div className="wrapper">
      <div
        className="content"
        // style={{ backgroundImage: `url("/img/mainback.jpg")` }}
      >
        <img
          className="tuly_logo"
          src={process.env.PUBLIC_URL + "/img/logoTuly.svg"}
          alt="Code"
        />
        <Menu />
        <AnimatedRoutes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
