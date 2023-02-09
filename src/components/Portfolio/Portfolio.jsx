import React from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import Title from "../Title";
import BtnSlider from "./Slider/BtnSlider";
import Counter from "./Counter";
import styles from "./Portfolio.module.scss";
import { AppContext } from "../../App";
import ArrowIcon from "./Slider/ArrowIcon";

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
  const { portfolioData } = React.useContext(AppContext);

  //slider Index
  const [slideIndex, setSlideIndex] = React.useState(1);
  //slider direction
  const [direction, setDirection] = React.useState(0);

  const nextSlide = () => {
    //1-next step
    setDirection(1);
    slideIndex !== portfolioData.length
      ? setSlideIndex(slideIndex + 1)
      : setSlideIndex(1);
  };

  const prevSlide = () => {
    //-1 - prev step
    setDirection(-1);
    slideIndex !== 1
      ? setSlideIndex(slideIndex - 1)
      : setSlideIndex(portfolioData.length);
  };

  return (
    <>
      <Title title={"My, works"} />
      <motion.div
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL +
            portfolioData[slideIndex - 1].backgroundImage
          })`,
          backgroundSize: "cover",
        }}
        className="pageinfo"
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-100%" }}
        transition={{
          type: "tween",
          duration: 0.3,
          ease: "easeOut",
        }}
      >
        <AnimatePresence initial={false} exitBeforeEnter custom={direction}>
          <motion.div
            className={styles.portfolioCard}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition="transition"
            custom={direction}
            key={portfolioData[slideIndex - 1].img}
          >
            <img
              className={styles.imageTitle}
              src={portfolioData[slideIndex - 1].titleImg}
              alt="Project title"
            />
            <div className={styles.subTitle}>Tech Stack:</div>
            <div className={styles.techStack}>
              {portfolioData[slideIndex - 1].techStack.map((item, index) => (
                <div key={index} className={styles.techStackItem}>
                  {item}
                </div>
              ))}
            </div>

            <a
              href={portfolioData[slideIndex - 1].link}
              target="_blank"
              className={styles.demoLink}
            >
              {`Live Demo  `}
              <ArrowIcon />
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="11"
                viewBox="0 0 14 11"
                fill="rgba(0, 0, 0, 1)"
              >
                <path d="M8.688 10.958l-.896-.875 3.5-3.5H.333v-1.25h10.959L7.77 1.813l.896-.875 5.02 5.02-5 5z"></path>
              </svg> */}
            </a>

            <img
              className={styles.imageMac}
              src={
                process.env.PUBLIC_URL +
                portfolioData[slideIndex - 1].projectImg
              }
              alt="Project image"
            />
          </motion.div>
        </AnimatePresence>
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />
        <Counter currentPage={slideIndex} totalPages={portfolioData.length} />
      </motion.div>
    </>
  );
};

export default Portfolio;
