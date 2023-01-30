import React from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import Title from "../Title";
import BtnSlider from "./Slider/BtnSlider";

const works = [
  {
    title: "React Sneakers",
    description: "Sneakers store",
    img: "https://www.highsnobiety.com/static-assets/thumbor/uCJJWDIKyfTH7j6GaVWGuHo0pGs=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2018/10/24104723/best-sneaker-websites-upd-01.jpg",
  },
  {
    title: "React Pizza",
    description: "Pizza delivery",
    img: "https://fireaway.co.uk/wp-content/uploads/2021/05/Layer-1.png",
  },
];

const variants = {
  initial: (direction) => {
    return {
      opacity: 0,
      x: direction > 0 ? 200 : -200,
    };
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: (direction) => {
    return {
      opacity: 0,
      x: direction > 0 ? -200 : 200,
    };
  },
  transition: {
    type: "tween",
    duration: 0.5,
    ease: "easeOut",
  },
};

const Portfolio = () => {
  //slider Index
  const [slideIndex, setSlideIndex] = React.useState(1);
  //slider direction
  const [direction, setDirection] = React.useState(0);

  const nextSlide = () => {
    //1-next step
    setDirection(1);
    slideIndex !== works.length
      ? setSlideIndex(slideIndex + 1)
      : setSlideIndex(1);
  };

  const prevSlide = () => {
    //-1 - prev step
    setDirection(-1);
    slideIndex !== 1
      ? setSlideIndex(slideIndex - 1)
      : setSlideIndex(works.length);
  };

  return (
    <>
      <Title title={"My, works"} />
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
        <AnimatePresence initial={false} exitBeforeEnter custom={direction}>
          <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition="transition"
            custom={direction}
            key={works[slideIndex - 1].img}
          >
            <div>{works[slideIndex - 1].title}</div>
            <img
              height={"150px"}
              width={"150px"}
              src={works[slideIndex - 1].img}
              alt="work image"
            />
          </motion.div>
        </AnimatePresence>
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />
      </motion.div>
    </>
  );
};

export default Portfolio;
