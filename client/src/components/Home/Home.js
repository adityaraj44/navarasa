import React from "react";
import { Box } from "@chakra-ui/react";

import NavbarHome from "./NavbarHome";
import HomeBanner from "../Banner/HomeBanner";

const Home = () => {
  return (
    <>
      <NavbarHome />

      <HomeBanner />
      <Box className="w-100 dark-banner bgPurpleDark"></Box>
    </>
  );
};

export default Home;
