import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import masthead from "../../imgs/aboutsuccess.JPG";
import { useMediaQuery } from "../../custom-hooks";
import ApiContext from "../context/api-context";

const SuccessPage = () => {
  const apiContext = React.useContext(ApiContext);
  const { refId } = apiContext;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isSmall = useMediaQuery("(max-width:992px)");

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
            className="text-pink success-header"
          >
            Success!
          </Text>
        </motion.div>
      </Flex>
      <Box position="relative" className="bgPurple">
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
                Your entry to the Indie Music Competition has been successfully
                submitted.
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
              padding: `${isSmall ? "10px 20px" : "10px 150px"}`,
            }}
          >
            <Image alt="about-masthead mt-4" width="100%" src={masthead} />
          </motion.div>
          <motion.div
            variants={fieldsVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Box textAlign="center" className={isSmall ? "px-mobile" : "px"}>
              <Text fontSize="18px" className="text-white mb-3">
                Your submission Ref ID is
              </Text>
              <Text fontSize="40px" className="text-white font-bold">
                {`#${refId}`}
              </Text>
              <Text fontSize="18px" className="text-white mt-2">
                A confirmation receipt has been sent to the email address you
                provided in your application.
              </Text>
              <Text fontSize="18px" mt="200px" className="text-white mb-4">
                If you have any questions about your entry, please contact us
                via email at{" "}
                <span className="text-yellow">
                  <a href="mailto:contact@navarasacreative.com">
                    contact@navarasacreative.com
                  </a>
                </span>{" "}
                or via{" "}
                <span className="text-yellow">
                  <a href="/">Whatsapp</a>
                </span>
              </Text>
            </Box>
          </motion.div>
        </Box>
      </Box>
    </>
  );
};

export default SuccessPage;
