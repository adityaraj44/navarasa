import { Box, Image } from "@chakra-ui/react";
import React from "react";
import bannerImg from "../../imgs/banner_home.png";

const HomeBanner = () => {
  return (
    <Box className="home-banner">
      <Image
        className="banner-image"
        objectFit="cover"
        alt="banner"
        width="1300px"
        src={bannerImg}
      />
    </Box>
  );
};

export default HomeBanner;
