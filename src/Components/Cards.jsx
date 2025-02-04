"use client";
import React, { useEffect, useRef } from "react";
import { cards } from "./cards";
import Card from "./Card";
import { motion, useScroll } from "framer-motion";
import Lenis from "lenis";

function Cards() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    if (!container.current) {
      console.error("Container ref is not attached.");
    }
    console.log(scrollYProgress); // Debugging
  }, [scrollYProgress]);

  //lenis
  const lenis = new Lenis({
    autoRaf: true,
  });

  // Listen for the scroll event and log the event data
  lenis.on("scroll", (e) => {});
  return (
    <div ref={container} className="mt-20" id="about">
      {cards.map((project, index) => {
        const totalCards = cards.length;
        const targetScale = 1 - (totalCards - index) * 0.05;
        return (
          <Card
            key={index}
            i={index}
            {...project}
            range={[index * 0.25, 1]}
            targetScale={targetScale}
            progress={scrollYProgress}
          />
        );
      })}
    </div>
  );
}

export default Cards;
