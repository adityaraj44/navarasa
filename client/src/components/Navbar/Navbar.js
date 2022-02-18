import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import GeneralLogo from "../Logo/GeneralLogo";
import instagram from "../../imgs/instagram.png";
import twitter from "../../imgs/twitter.png";
import youtube from "../../imgs/youtube.png";
import arroba from "../../imgs/arroba.png";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
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

  return (
    <motion.div
      exit={{
        height: "350px",
        backgroundColor: "#fad01c",
        transition: {
          ease: "easeInOut",
          duration: 0.2,
          delay: 0.6,
        },
      }}
    >
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        flexWrap="wrap"
        alignItems="center"
        className="navbar bgYellow px"
      >
        <Box>
          <Flex
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="space-between"
            alignItems="center"
          >
            <GeneralLogo />
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
                  delay: 0.2,
                  duration: 0.5,
                },
              }}
              className="social-link  ml-4"
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
                  delay: 0.2,
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
                  delay: 0.2,
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
                  delay: 0.2,
                  duration: 0.5,
                },
              }}
              className="social-link  ml-4"
              href="/"
            >
              <Image alt="arroba" borderRadius="100%" src={arroba} />
            </motion.a>
          </Flex>
        </Box>

        <Box>
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            alignItems="flex-end"
          >
            <Box className="nav-links text-dark">
              <Flex
                flexDirection="row"
                flexWrap="wrap"
                alignItems="center"
                justifyContent="space-between"
              >
                <Link
                  className={`mr-3 ${
                    location.pathname === "/" ? "active" : ""
                  }`}
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
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Text className="nav-heading-general text-pink mt-3">
                Navarasa Creative
              </Text>
            </motion.div>
          </Flex>
        </Box>
      </Flex>
    </motion.div>
  );
};

export default Navbar;
