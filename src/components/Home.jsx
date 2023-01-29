import React from "react";
import { motion } from "framer-motion";
import Title from "./Title";

const Home = () => {
  return (
    <>
      <Title title={`Hello, I'm Ivan`} />
      <motion.div
        className="pageinfo"
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-100%" }}
        transition={{
          type: "tween",
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <img
          src="https://c.pxhere.com/photos/72/9c/close_up_code_coding_computer_computing_conceptual_data_design-911144.jpg!d"
          alt="Code"
        />
        <div className="pageinfo__title">And I'm frontend developer</div>
      </motion.div>
    </>
  );
};

export default Home;
