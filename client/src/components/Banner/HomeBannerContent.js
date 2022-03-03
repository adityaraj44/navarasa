import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useMediaQuery } from "../../custom-hooks";
import gold from "../../imgs/gold.svg";
import silver from "../../imgs/silver.svg";
import bronze from "../../imgs/bronze.svg";

const HomeBannerContent = () => {
  const isSmall = useMediaQuery("(max-width:992px)");
  const isXs = useMediaQuery("(max-width:480px)");

  if (isSmall) {
    return (
      <Box
        display="flex"
        className="home-banner-content"
        direction="column"
        justifyContent="start"
        alignItems="flex-end"
        width={isXs ? "275px" : "350px"}
      >
        <Box>
          <Text
            className={`text-yellow font-bold ${isXs ? "mb-1" : "mb-2"}`}
            fontSize={isXs ? "16px" : "20px"}
          >
            Navarasa Creative
          </Text>
          <Text
            lineHeight="28px"
            className={`text-white font-bold ${isXs ? "mb-1" : "mb-2"}`}
            fontSize={isXs ? "20px" : "28px"}
          >
            Indie Music Competition
          </Text>

          <Flex direction="row" justifyContent="start" alignItems="center">
            <Text
              className="text-pink font-bold"
              fontSize={isXs ? "10px" : "14px"}
            >
              Original Tamil Song
            </Text>
            <Text
              className="text-yellow font-bold ml-4"
              fontSize={isXs ? "10px" : "14px"}
            >
              Open to all indie musicians
            </Text>
          </Flex>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      display="flex"
      className="home-banner-content"
      direction="row"
      justifyContent="start"
      alignItems="flex-end"
      width={"925px"}
    >
      <Box textAlign="center">
        <Text className="text-yellow font-bold mb-2" fontSize="25px">
          Navarasa Creative
        </Text>
        <Text
          lineHeight="50px"
          className="text-white font-bold mb-2"
          fontSize="50px"
        >
          Indie Music
        </Text>
        <Text
          lineHeight="50px"
          className="text-white font-bold mb-3"
          fontSize="50px"
        >
          Competition
        </Text>
        <Text className="text-pink font-bold mb-4" fontSize="30px">
          Original Tamil Song
        </Text>
        <Text className="text-yellow font-bold" fontSize="18px">
          Open to all indie musicians
        </Text>
      </Box>
      <Box
        display="flex"
        justifyContent="space-evenly"
        flexDirection="row"
        alignItems="center"
        className="bgPurpleDark home-banner-content-right"
        marginLeft="70px"
        border="3px solid #DD29A6"
        borderRadius="5px"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Image src={gold} alt="gold_star" className="mb-2" />
          <Text className="text-purpleLight font-bold mb-2" fontSize="14px">
            1st Prize
          </Text>
          <Text className="text-yellow" fontWeight="black" fontSize="22px">
            Rs. 20,000
          </Text>
        </Box>
        <Box
          className="bgPink"
          width="3px"
          height="62px"
          borderRadius="2px"
        ></Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Image src={silver} alt="gold_star" className="mb-2" />
          <Text className="text-purpleLight font-bold mb-2" fontSize="14px">
            2nd Prize
          </Text>
          <Text className="text-yellow" fontWeight="black" fontSize="22px">
            Rs. 10,000
          </Text>
        </Box>
        <Box
          className="bgPink"
          width="3px"
          height="62px"
          borderRadius="2px"
        ></Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Image src={bronze} alt="gold_star" className="mb-2" />
          <Text className="text-purpleLight font-bold mb-2" fontSize="14px">
            3rd Prize
          </Text>
          <Text className="text-yellow" fontWeight="black" fontSize="22px">
            Rs. 5,000
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeBannerContent;
