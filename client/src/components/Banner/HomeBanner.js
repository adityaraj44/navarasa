import { Box, Image } from "@chakra-ui/react";
import React from "react";
import bannerImg from "../../imgs/banner_home.png";

const HomeBanner = () => {
  return (
    <Box className="home-banner px">
      <Image className="banner-image" alt="banner" src={bannerImg} />
    </Box>
  );
};

export default HomeBanner;
