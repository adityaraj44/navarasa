import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BsPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const EntryItem = () => {
  return (
    <>
      <Flex
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="center"
        borderBottom="1px solid #c4c4c4"
      >
        <Box className="tableElem" width="100px">
          <Text fontSize="14px" className="font-bold text-white">
            22-05-2021
          </Text>
        </Box>
        <Box
          margin="0px 10px 0px 10px"
          width="2px"
          height="30px"
          bgColor="#c4c4c4"
        ></Box>
        <Box className="tableElem" width="250px">
          <Text
            fontSize="14px"
            className="font-bold text-white"
            wordBreak="break-all"
          >
            Aditya Raj
          </Text>
        </Box>
        <Box
          margin="0px 10px 0px 10px"
          width="2px"
          height="30px"
          bgColor="#c4c4c4"
        ></Box>
        <Box className="tableElem" width="150px">
          <Text fontSize="14px" className="font-bold text-white">
            #1235-4684-1452
          </Text>
        </Box>
        <Box
          margin="0px 10px 0px 10px"
          width="2px"
          height="30px"
          bgColor="#c4c4c4"
        ></Box>
        <Box className="tableElem" width="350px">
          <Text fontSize="14px" className="font-bold text-white">
            Brown Munde
          </Text>
        </Box>
        <Box
          margin="0px 10px 0px 10px"
          width="2px"
          height="30px"
          bgColor="#c4c4c4"
        ></Box>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          className="tableElem"
          width="100px"
        >
          <Box
            className="bgPinkLight"
            width="30px"
            height="30px"
            borderRadius="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginRight="8px"
            cursor="pointer"
          >
            <BsPlayFill
              style={{
                width: "15px",
                height: "15px",
              }}
              className="text-white"
            />
          </Box>
          <Text fontSize="14px" className="font-bold text-white">
            04:59
          </Text>
        </Box>
        <Box
          margin="0px 10px 0px 10px"
          width="2px"
          height="30px"
          bgColor="#c4c4c4"
        ></Box>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          className="tableElem"
          width="150px"
        >
          <Text
            cursor="pointer"
            marginRight="20px"
            fontSize="14px"
            className="font-bold text-yellow"
          >
            Shortlist
          </Text>
          <Link
            to="/navarasa/admin/entries/entry/:id"
            cursor="pointer"
            fontSize="14px"
            className="font-bold text-pink"
          >
            Details
          </Link>
        </Box>
      </Flex>
    </>
  );
};

export default EntryItem;
