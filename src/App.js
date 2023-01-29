import React from "react";

import "./App.scss";
import Menu from "./components/Menu";
import Title from "./components/Title";

import Footer from "./components/Footer";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <Menu />
        <Title />
        <AnimatedRoutes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
