import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import HomeLogo from "../Logo/HomeLogo";
import instagram from "../../imgs/instagram.png";
import twitter from "../../imgs/twitter.png";
import youtube from "../../imgs/youtube.png";
import arroba from "../../imgs/arroba.png";

const NavbarHome = () => {
  return (
    <Box className="px navbar-home bgYellow">
      <Flex
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="space-between"
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
              <Link className="mr-3 active" to="/">
                Home
              </Link>
              <Link className="mr-3" to="/submitentry">
                Submit entry
              </Link>
              <Link to="/aboutus">About us</Link>
            </Flex>
          </Box>
          <Box>
            <Text className="nav-heading text-pink mt-4 mb-1">
              Navarasa Creative
            </Text>
          </Box>
          <Box>
            <Text className="text-dark nav-subheading mb-2">
              Exploring emerging creative talent in the indie-sphere
            </Text>
          </Box>
          <Box className="social-links mt-4">
            <Flex
              flexDirection="row"
              flexWrap="wrap"
              justifyContent="space-between"
              alignItems="flex-end"
            >
              <a className="social-link" href="/">
                <Image alt="instagram" borderRadius="100%" src={instagram} />
              </a>
              <a className="social-link ml-4" href="/">
                <Image alt="twitter" borderRadius="100%" src={twitter} />
              </a>
              <a className="social-link ml-4" href="/">
                <Image alt="youtube" borderRadius="100%" src={youtube} />
              </a>
              <a className="social-link ml-4" href="/">
                <Image alt="arroba" borderRadius="100%" src={arroba} />
              </a>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavbarHome;
