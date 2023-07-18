import React from "react";
import { inViewHandler } from "../animationHandler";
import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";
import { skills } from "../data";

export const Skills = () => {
  const animation = useAnimation();

  return (
    <InView onChange={(inview) => inViewHandler(inview, animation)}>
      <section className="h-76 bg-primary py-12">
        <div className="container mx-auto">
          <motion.div
            className="grid grid-cols-8 gap-2 md:grid-flow-row items-center "
            initial={{ opacity: 0, scale: 0.5 }}
            animate={animation}
          >
            {skills.map((skill, index) => {
              return (
                <div className="max-h-xs" key={index}>
                  <img src={skill.image} alt="" />
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </InView>
  );
};
