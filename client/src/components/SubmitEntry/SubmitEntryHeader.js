import { Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { useMediaQuery } from "../../custom-hooks";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import { useLocation } from "react-router-dom";

const SubmitEntryHeader = () => {
  const isSmall = useMediaQuery("(max-width:992px)");
  const location = useLocation();

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
      <motion.div className="bgPurpleDark">
        <Box maxWidth="1125px" mx="auto">
          <motion.div
            variants={headerVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={isSmall ? "px-mobile" : "px"}
          >
            <p className="submit-heading text-yellow text-bold">
              Submit your entry to the Indie Music Competition
            </p>
            <Flex
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              className="mt-4"
              wrap="nowrap"
            >
              <p
                className={`text-white ${
                  location.pathname === "/submitentry" ? "active" : ""
                } submit-heading-link ${isSmall ? "" : "mr-1"}`}
              >
                1.Submitter info
              </p>

              <BiChevronRight className="submit-heading-link text-white mr-1" />

              <p
                className={`text-white ${
                  location.pathname === "/submitsong" ? "active" : ""
                } submit-heading-link ${isSmall ? "" : "mr-1"}`}
              >
                2.Song submission
              </p>

              <BiChevronRight className="submit-heading-link text-white mr-1" />

              <p
                className={`text-white ${
                  location.pathname === "/finalizeentry" ? "active" : ""
                } submit-heading-link`}
              >
                3.Finalize
              </p>
            </Flex>
          </motion.div>
        </Box>
      </motion.div>
    </>
  );
};

export default SubmitEntryHeader;
