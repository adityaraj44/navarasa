import { Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import logo from "../../imgs/logo.png";

const MobileLogo = () => {
  return (
    <motion.div
      initial={{
        x: "-100vw",
      }}
      animate={{
        x: 0,
        scale: 0.7,
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
      className="home-logo"
    >
      {/* <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M34.5 70.5566C32.953 71.4498 31.047 71.4498 29.5 70.5566L3.32308 55.4434C1.77607 54.5502 0.823076 52.8996 0.823076 51.1132L0.823079 20.8868C0.823079 19.1004 1.77607 17.4498 3.32308 16.5566L29.5 1.44338C31.047 0.550213 32.953 0.550214 34.5 1.44338L60.6769 16.5566C62.2239 17.4498 63.1769 19.1004 63.1769 20.8868L63.1769 51.1133C63.1769 52.8996 62.2239 54.5502 60.6769 55.4434L34.5 70.5566Z"
          fill="#DD29A6"
        />
        <path
          d="M20.7885 48H26.9625V33.006L36.7905 48H43.2165V22.8H37.0845V37.752L27.2985 22.8H20.7885V48ZM38.6385 39.306V23.976H41.6625V44.01L38.6385 39.306ZM22.3425 46.824V26.622L25.4085 31.452V46.824H22.3425Z"
          fill="#FAD01C"
        />
      </svg> */}
      <Image src={logo} alt="logo" width="72px" height="72px" />
    </motion.div>
  );
};

export default MobileLogo;
