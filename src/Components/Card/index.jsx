import React from "react";
import styles from "./style.module.css";
import { motion, useAnimation, useTransform } from "framer-motion";

function index({
  i,
  title,
  description,
  image,
  color,
  progress,
  range,
  targetScale,
}) {
  const scale = progress ? useTransform(progress, range, [1, targetScale]) : 1;
  return (
    <div className={styles.cardContainer}>
      <motion.div
        style={{
          scale,
          backgroundColor: color,
          top: `calc(-10% + ${i * 25}px)`,
        }}
        className={styles.card}
      >
        <div className="flex justify-between lg:py-20 lg:px-20   md:py-20 md:px-20 py-10 px-10">
          <div className="flex flex-col w-full md:w-3/4 lg:w-4/5 gap-40">
            <div>
              <p className="text-3xl lg:text-4xl f3"> {title}</p>
              <p className="lg:mt-10 mt-8 f2 text-lg lg:text-xl">
                {description}
              </p>
            </div>
            {/* <div>Button</div> */}
          </div>
          <div className="hidden lg:flex lg:justify-center lg:align-middle">
            <img
              src={image}
              alt="smash"
              className="w-60 h-60 rounded-full items-center opacity-25"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default index;
