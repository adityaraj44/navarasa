import { Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { useMediaQuery } from "../../custom-hooks";
import bannerImg from "../../imgs/banner_home.png";
import bannerImgMobile from "../../imgs/banner_home_mobile.png";

const HomeBanner = () => {
  const isSmall = useMediaQuery("(max-width:992px)");
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
          delay: "0.8",
          duration: 0.6,
        },
      }}
      className={`home-banner ${isSmall ? "px-mobile" : "px"}`}
    >
      <Image
        className="banner-image"
        alt="banner"
        width={isSmall ? "450px" : "1125px"}
        src={isSmall ? bannerImgMobile : bannerImg}
      />
    </motion.div>
  );
};

export default HomeBanner;
