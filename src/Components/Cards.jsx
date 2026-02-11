"use client";
import React, { useEffect, useRef } from "react";
import { cards } from "./cards";
import Card from "./Card";
import { useScroll } from "framer-motion";
import Lenis from "lenis";

function Cards() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true });
    return () => lenis.destroy();
  }, []);

  return (
    <section ref={container} className="mt-20" id="about">
      <div className="max-w-5xl mx-auto px-6">
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
    </section>
  );
}

export default Cards;
