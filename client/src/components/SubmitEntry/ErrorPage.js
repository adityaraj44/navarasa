import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import errorSvg from "../../imgs/error.svg";
import { useMediaQuery } from "../../custom-hooks";

const ErrorPage = () => {
  const isSmall = useMediaQuery("(max-width:992px)");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fieldsVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        delay: 0.4,
        duration: 0.8,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        type: "spring",
        delay: 0.4,
        duration: 0.8,
      },
    },
  };

  const headerVariant = {
    hidden: {
      x: "100vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        delay: 0.4,
        duration: 0.8,
      },
    },
    exit: {
      x: "100vw",
      opacity: 0,
      transition: {
        type: "spring",
        delay: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <>
      <Navbar />
      <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="bgPurpleDark submit-header-container"
      >
        <motion.div
          variants={headerVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={isSmall ? "px-mobile" : "px"}
        >
          <Text
            textAlign="center"
            fontSize="45px"
            fontWeight="100"
            fontFamily="Azo Sans, sans-serif"
            className="text-yellow success-header"
          >
            Something went wrong...
          </Text>
        </motion.div>
      </Flex>
      <Box className="bgPurple">
        <Box maxWidth="1125px" mx="auto">
          <motion.div
            variants={fieldsVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Box
              mx="auto"
              textAlign="center"
              className={isSmall ? "px-mobile" : "px"}
            >
              <Text fontSize="20px" className="text-yellow font-bold  mb-4">
                Your entry to the Indie Music Competition was not completed.
              </Text>
            </Box>
          </motion.div>
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
            style={{
              padding: `${isSmall ? "5px 20px" : "5px 150px"}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              alt="about-masthead"
              width="80px"
              height="80px"
              src={errorSvg}
            />
          </motion.div>
          <Box textAlign="center" className={isSmall ? "px-mobile" : "px"}>
            <Text fontSize="18px" className="text-white">
              We apologise for any inconvenience. Please try again later.
            </Text>
            <Text fontSize="18px" mt="200px" className="text-white mb-4">
              If you continue to have trouble submitting your entry, please
              contact us via email at{" "}
              <span className="text-yellow">
                <a href="mailto:contact@navarasacreative.com">
                  contact@navarasacreative.com
                </a>
              </span>
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ErrorPage;
