import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import GeneralLogo from "../Logo/GeneralLogo";

const AdminNavbar = () => {
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

  return (
    <motion.div className="px bgYellow">
      <Flex
        mx="auto"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="1125px"
      >
        <Flex flexDirection="row" justifyContent="center" alignItems="center">
          <GeneralLogo />
          <Text
            fontFamily="Azo sans, sans serif"
            className="text-pink ml-4"
            fontSize="25px"
            fontWeight="bold"
          >
            Navarasa Creative Admin Portal
          </Text>
        </Flex>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="nav-links text-dark"
        >
          <Link
            className={`mr-3 ${
              location.pathname === "/navarasa/admin/entries" ? "active" : ""
            }`}
            to="/navarasa/admin/entries"
          >
            <motion.p
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              Entries
            </motion.p>
          </Link>
          <Link
            className={`mr-3 ${
              location.pathname === "/navarasa/admin/settings" ? "active" : ""
            }`}
            to="/navarasa/admin/settings"
          >
            <motion.p
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              Settings
            </motion.p>
          </Link>
          <Link
            className={`mr-3 ${
              location.pathname === "/navarasa/admin/logout" ? "active" : ""
            }`}
            to="/navarasa/admin/logout"
          >
            <motion.p
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              Log out
            </motion.p>
          </Link>
        </Flex>
      </Flex>
    </motion.div>
  );
};

export default AdminNavbar;
