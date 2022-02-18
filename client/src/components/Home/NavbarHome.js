import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import HomeLogo from "../Logo/HomeLogo";
import instagram from "../../imgs/instagram.png";
import twitter from "../../imgs/twitter.png";
import youtube from "../../imgs/youtube.png";
import arroba from "../../imgs/arroba.png";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const NavbarHome = () => {
  const location = useLocation();

  const linkVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,

      transition: {
        type: "spring",
        delay: 0.2,
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        type: "spring",
        delay: 0.4,
        duration: 0.5,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,

      transition: {
        delay: 0.2,
        duration: 0.5,
        type: "spring",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        type: "spring",
        delay: 0.4,
        duration: 0.5,
      },
    },
  };

  const textVariants2 = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,

      transition: {
        delay: 0.2,
        duration: 0.5,
        type: "spring",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        type: "spring",
        delay: 0.4,
        duration: 0.5,
      },
    },
  };

  const socialVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        delay: 0.4,
        duration: 0.5,
      },
    },
    exit: {
      y: 30,
      opacity: 0,
      transition: {
        type: "spring",
        delay: 0.4,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      exit={{
        height: "170px",
        transition: {
          ease: "easeInOut",
          delay: "1.1",
          duration: 0.5,
        },
      }}
    >
      <Flex
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="space-between"
        className="px navbar-home bgYellow"
      >
        <Box>
          <HomeLogo />
        </Box>

        <Flex
          flexDirection="column"
          justifyContent="space-between"
          alignItems="flex-end"
          flexWrap="wrap"
        >
          <Box className="nav-links text-dark">
            <Flex
              flexDirection="row"
              flexWrap="wrap"
              alignItems="center"
              justifyContent="space-between"
            >
              <Link
                className={`mr-3 ${location.pathname === "/" ? "active" : ""}`}
                to="/"
              >
                <motion.p
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  Home
                </motion.p>
              </Link>
              <Link
                className={`mr-3 ${
                  location.pathname === "/submitentry" ? "active" : ""
                }`}
                to="/submitentry"
              >
                <motion.p
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  Submit entry
                </motion.p>
              </Link>
              <Link
                to="/aboutus"
                className={`${
                  location.pathname === "/aboutus" ? "active" : ""
                }`}
              >
                <motion.p
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  About us
                </motion.p>
              </Link>
            </Flex>
          </Box>
          <Box>
            <motion.p
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="nav-heading text-pink mt-4 mb-1"
            >
              Navarasa Creative
            </motion.p>
          </Box>
          <Box>
            <motion.p
              variants={textVariants2}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-dark nav-subheading mb-2"
            >
              Exploring emerging creative talent in the indie-sphere
            </motion.p>
          </Box>
          <Box className="social-links mt-4">
            <Flex
              flexDirection="row"
              flexWrap="wrap"
              justifyContent="space-between"
              alignItems="flex-end"
            >
              <motion.a
                variants={socialVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="social-link"
                href="/"
              >
                <Image alt="instagram" borderRadius="100%" src={instagram} />
              </motion.a>
              <motion.a
                initial={{
                  y: 30,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  type: "spring",
                  delay: 0.4,
                  duration: 0.5,
                }}
                exit={{
                  y: 30,
                  opacity: 0,
                  transition: {
                    type: "spring",
                    delay: 0.4,
                    duration: 0.5,
                  },
                }}
                className="social-link ml-4"
                href="/"
              >
                <Image alt="twitter" borderRadius="100%" src={twitter} />
              </motion.a>
              <motion.a
                initial={{
                  y: 30,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  type: "spring",
                  delay: 0.4,
                  duration: 0.5,
                }}
                exit={{
                  y: 30,
                  opacity: 0,
                  transition: {
                    type: "spring",
                    delay: 0.4,
                    duration: 0.5,
                  },
                }}
                className="social-link ml-4"
                href="/"
              >
                <Image alt="youtube" borderRadius="100%" src={youtube} />
              </motion.a>
              <motion.a
                initial={{
                  y: 30,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  type: "spring",
                  delay: 0.4,
                  duration: 0.5,
                }}
                exit={{
                  y: 30,
                  opacity: 0,
                  transition: {
                    type: "spring",
                    delay: 0.4,
                    duration: 0.5,
                  },
                }}
                className="social-link ml-4"
                href="/"
              >
                <Image alt="arroba" borderRadius="100%" src={arroba} />
              </motion.a>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </motion.div>
  );
};

export default NavbarHome;
