import React from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Home from "./Home";
import AboutMe from "./AboutMe/AboutMe";

import { AnimatePresence } from "framer-motion";
import MySkills from "./MySkills";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skills" element={<MySkills />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
