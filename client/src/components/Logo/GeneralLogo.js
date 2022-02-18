import { motion } from "framer-motion";
import React from "react";

const GeneralLogo = () => {
  return (
    <motion.div
      initial={{
        x: "-100vw",
      }}
      animate={{
        x: 0,
      }}
      transition={{
        type: "spring",
        delay: 0.1,
        duration: 0.8,
      }}
      exit={{
        x: "-100vw",
        transition: {
          ease: "easeInOut",
          delay: "0.4",
          duration: 0.6,
        },
      }}
    >
      <svg
        width="52"
        height="60"
        viewBox="0 0 52 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M28.5 58.5566C26.953 59.4498 25.047 59.4498 23.5 58.5566L2.51924 46.4434C0.972234 45.5502 0.0192389 43.8996 0.0192391 42.1132L0.0192412 17.8868C0.0192414 16.1004 0.972237 14.4498 2.51924 13.5566L23.5 1.44338C25.047 0.550222 26.953 0.550222 28.5 1.44338L49.4808 13.5566C51.0278 14.4498 51.9808 16.1004 51.9808 17.8868L51.9808 42.1133C51.9808 43.8996 51.0278 45.5502 49.4808 46.4434L28.5 58.5566Z"
          fill="#DD29A6"
        />
        <path
          d="M15.7247 41H21.6047V26.72L30.9647 41H37.0847V17H31.2447V31.24L21.9247 17H15.7247V41ZM32.7247 32.72V18.12H35.6047V37.2L32.7247 32.72ZM17.2047 39.88V20.64L20.1247 25.24V39.88H17.2047Z"
          fill="#FAD01C"
        />
      </svg>
    </motion.div>
  );
};

export default GeneralLogo;
