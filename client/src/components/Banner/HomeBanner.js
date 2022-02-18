import { Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import bannerImg from "../../imgs/banner_home.png";

const HomeBanner = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: "100vh",
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        type: "spring",

        delay: 0.5,
        duration: 0.8,
      }}
      exit={{
        y: "100vh",
        opacity: 0,
        transition: {
          ease: "easeInOut",
          delay: "0.5",
          duration: 0.6,
        },
      }}
      className="home-banner"
    >
      <Image
        className="banner-image"
        objectFit="cover"
        alt="banner"
        width="1300px"
        src={bannerImg}
      />
    </motion.div>
  );
};

export default HomeBanner;
