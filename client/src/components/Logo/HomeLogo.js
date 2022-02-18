import React from "react";
import { motion } from "framer-motion";

const HomeLogo = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: "-100vw",
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        type: "spring",

        delay: 1,
        duration: 0.8,
      }}
      exit={{
        x: "-100vw",
        transition: {
          ease: "easeInOut",
          delay: "0.4",
          duration: 0.8,
        },
      }}
      className="home-logo"
    >
      <svg
        width="104"
        height="120"
        viewBox="0 0 104 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M54.5 118.557C52.953 119.45 51.047 119.45 49.5 118.557L2.53848 91.4434C0.991473 90.5502 0.0384778 88.8996 0.0384779 87.1132L0.0384827 32.8867C0.0384828 31.1004 0.991478 29.4498 2.53848 28.5566L49.5 1.44338C51.047 0.550211 52.953 0.550212 54.5 1.44338L101.462 28.5566C103.009 29.4498 103.962 31.1004 103.962 32.8867L103.962 87.1132C103.962 88.8996 103.009 90.5502 101.462 91.4434L54.5 118.557Z"
          fill="#DD29A6"
        />
        <path
          d="M30.4494 85H42.2094V56.44L60.9294 85H73.1694V37H61.4894V65.48L42.8494 37H30.4494V85ZM64.4494 68.44V39.24H70.2094V77.4L64.4494 68.44ZM33.4094 82.76V44.28L39.2494 53.48V82.76H33.4094Z"
          fill="#FAD01C"
        />
      </svg>
    </motion.div>
  );
};

export default HomeLogo;
