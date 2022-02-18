import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import GeneralLogo from "../Logo/GeneralLogo";
import instagram from "../../imgs/instagram.png";
import twitter from "../../imgs/twitter.png";
import youtube from "../../imgs/youtube.png";
import arroba from "../../imgs/arroba.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
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
          <a className="social-link  ml-4" href="/">
            <Image alt="instagram" borderRadius="100%" src={instagram} />
          </a>
          <a className="social-link ml-4" href="/">
            <Image alt="twitter" borderRadius="100%" src={twitter} />
          </a>
          <a className="social-link ml-4" href="/">
            <Image alt="youtube" borderRadius="100%" src={youtube} />
          </a>
          <a className="social-link  ml-4" href="/">
            <Image alt="arroba" borderRadius="100%" src={arroba} />
          </a>
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
                className={`mr-3 ${location.pathname === "/" ? "active" : ""}`}
                to="/"
              >
                Home
              </Link>
              <Link
                className={`mr-3 ${
                  location.pathname === "/submitentry" ? "active" : ""
                }`}
                to="/submitentry"
              >
                Submit entry
              </Link>
              <Link
                to="/aboutus"
                className={`${
                  location.pathname === "/aboutus" ? "active" : ""
                }`}
              >
                About us
              </Link>
            </Flex>
          </Box>
          <Box>
            <Text className="nav-heading-general text-pink mt-3">
              Navarasa Creative
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Navbar;
