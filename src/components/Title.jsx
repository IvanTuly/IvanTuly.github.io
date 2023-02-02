import React from "react";
import { motion } from "framer-motion";

const Title = ({ title }) => {
  return (
    <div className="title">
      <div className="title__content">
        <div className="title__title">{`<title>`}</div>
        <motion.div
          className="title__info"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{
            type: "tween",
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          {title}
        </motion.div>
        {/* <div className="title__contact">- Contact me</div> */}
      </div>
    </div>
  );
};

export default Title;
