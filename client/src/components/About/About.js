import { Box, Image } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Navbar/Navbar";
import masthead from "../../imgs/aboutsuccess.JPG";
import { motion } from "framer-motion";
import { useMediaQuery } from "../../custom-hooks";

const About = () => {
  const isSmall = useMediaQuery("(max-width:992px)");

  const inView = {
    hidden: {
      opacity: 0,
      y: -30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  return (
    <>
      <Navbar />
      <Box className="bgPurpleDark">
        <Box maxWidth="1125px" mx="auto">
          <Box className={isSmall ? "px-mobile" : "px"}>
            <Box className="about-masthead ">
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
                  delay: 0.3,
                  duration: 0.8,
                }}
                exit={{
                  y: "100vh",
                  transition: {
                    ease: "easeInOut",
                    delay: "0.5",
                    duration: 0.5,
                  },
                }}
              >
                <Image alt="about-masthead mt-4" width="100%" src={masthead} />
              </motion.div>
            </Box>
            <Box textAlign={isSmall ? "center" : "left"} className="mt-4">
              <motion.p
                variants={inView}
                initial="hidden"
                whileInView="visible"
                className="about-subheading text-yellow"
              >
                We want to discover and experience
              </motion.p>
              <motion.p
                variants={inView}
                initial="hidden"
                whileInView="visible"
                className="about-heading text-pink mt-2"
              >
                fresh indie talent
              </motion.p>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="bgPurple">
        <Box
          maxWidth="1125px"
          mx="auto"
          className={`${isSmall ? "px-mobile" : "px"}`}
        >
          <Box
            className="text-white"
            textAlign={isSmall ? "center" : "left"}
            fontSize="18px"
          >
            <motion.p
              variants={inView}
              initial="hidden"
              whileInView="visible"
              className="text-white"
            >
              Navarasa Creative is an initiative to get involved with the
              abundant creative talent in the indie-sphere. We are starting our
              journey with Tamil Music as it has been an integral part of our
              youth and continues to be a source of inspiration in our daily
              lives.
            </motion.p>
            <motion.p
              variants={inView}
              initial="hidden"
              whileInView="visible"
              className="mt-4 text-white"
            >
              As the Tamil music indie space blooms, our vision is to connect
              new talent with the more experienced artists in the community as
              well as the global online audiences.
            </motion.p>
            <motion.p
              variants={inView}
              initial="hidden"
              whileInView="visible"
              className="mt-4 text-white"
            >
              Conducting competitions with the ultimate aim of culminating in
              collaborations, we would like to see newer talent become part of
              the musical community; which has always been welcoming and
              nurturing toward the next generation of musicians.
            </motion.p>
            <br />
          </Box>
          <Box textAlign={isSmall ? "center" : "right"} className="mt-4">
            <motion.p
              variants={inView}
              initial="hidden"
              whileInView="visible"
              className="about-subheading text-yellow mb-2"
            >
              There is something
            </motion.p>
            <motion.p
              variants={inView}
              initial="hidden"
              whileInView="visible"
              className="about-heading text-pink mt-2"
            >
              magical about music
            </motion.p>
          </Box>
          <Box
            className="text-white mt-4"
            textAlign={isSmall ? "center" : "left"}
            fontSize="18px"
          >
            <motion.p
              variants={inView}
              initial="hidden"
              whileInView="visible"
              className="text-white"
            >
              Songs are a great unifier. Trending songs come in so many
              flavours. From sick beats to killer baselines, from heart
              wrenching melodies to soulful vocals, music is practically
              infinite in it’s nature.
            </motion.p>
            <motion.p
              variants={inView}
              initial="hidden"
              whileInView="visible"
              className="mt-4 text-white"
            >
              On a deeper level, music has a certain trancendental quality. It
              touches every listener in a unique way and has the ability to
              unite people beyond petty differences and disputes. When music is
              coupled with the right message and intent, it can be a powerful
              means to create joy, harmony and awareness.
            </motion.p>
            <motion.p
              variants={inView}
              initial="hidden"
              whileInView="visible"
              className="mt-4 text-white"
            >
              No one goes untouched by the magic of music.
            </motion.p>
            <br />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default About;
