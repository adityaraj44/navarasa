import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import AdminNavbar from "../AdminNavbar";
import { TriangleUpIcon, TriangleDownIcon } from "@chakra-ui/icons";
import EntryItem from "./EntryItem";
import { BsPlayFill } from "react-icons/bs";

const AllEntries = () => {
  const [isSelected, setIsSelected] = useState();

  return (
    <>
      <AdminNavbar />
      <Box className="bgPurple" position="relative">
        <Box
          zIndex="0"
          position="relative"
          mx="auto"
          maxWidth="1400px"
          padding="60px 100px 250px 100px"
          maxHeight="100vh"
          overflowY="scroll"
        >
          <Flex
            direction="row"
            alignItems="center"
            justifyContent="start"
            className="btnGroup form-control"
          >
            <button
              onClick={() => setIsSelected(false)}
              type="button"
              className={`${
                isSelected ? "tab-btn-selected" : "tab-btn"
              } font-bold`}
              style={{
                borderTopLeftRadius: "5px",
              }}
            >
              All entries[43]
            </button>
            <button
              onClick={() => setIsSelected(true)}
              type="button"
              className={`${
                isSelected ? "tab-btn" : "tab-btn-selected"
              } font-bold`}
              style={{
                borderTopRightRadius: "5px",
              }}
            >
              Shortlist[43]
            </button>
          </Flex>
          <Flex
            direction="row"
            alignItems="center"
            justifyContent="start"
            className="tableTitleGrp form-control bgPurpleLight"
            style={{
              borderTopRightRadius: "5px",
            }}
          >
            <button
              type="button"
              className="tableTitle font-bold text-white bgPurpleLight"
              style={{
                width: "120px",
              }}
            >
              <span>
                <TriangleUpIcon fontSize="10px" className="mr-2" />
              </span>
              Date
            </button>
            <button
              type="button"
              className="tableTitle font-bold text-white bgPurpleLight"
              style={{
                width: "270px",
              }}
            >
              <span>
                <TriangleDownIcon fontSize="10px" className="mr-2" />
              </span>
              Submitter
            </button>
            <button
              type="button"
              className="tableTitle font-bold text-white bgPurpleLight"
              style={{
                width: "170px",
              }}
            >
              <span>
                <TriangleDownIcon fontSize="10px" className="mr-2" />
              </span>
              Ref ID
            </button>
            <button
              type="button"
              className="tableTitle font-bold text-white bgPurpleLight"
              style={{
                width: "370px",
              }}
            >
              Song title
            </button>
          </Flex>
          {isSelected && (
            <>
              <EntryItem />
              <EntryItem />
              <EntryItem />

              <EntryItem />
              <EntryItem />

              <EntryItem />
            </>
          )}
          {!isSelected && (
            <>
              <EntryItem />
              <EntryItem />
              <EntryItem />
              <EntryItem />

              <EntryItem />
            </>
          )}
        </Box>
        <Box
          className="music-player bgPurpleDark"
          position="absolute"
          zIndex="1"
          bottom="0"
          left="0"
          right="0"
          width="100%"
        >
          <Flex
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            padding="20px 30px"
          >
            <Text className="text-white font-bold" fontSize="16px">
              Music name
            </Text>
            <Box>
              <Text
                display="inline"
                className="text-purpleLight font-bold"
                fontSize="14px"
              >
                Download audio file
              </Text>
              <Text
                display="inline"
                className="text-yellow font-bold ml-3"
                fontSize="14px"
              >
                Shortlist
              </Text>
              <Text
                display="inline"
                className="text-pink font-bold ml-3"
                fontSize="14px"
              >
                Details
              </Text>
            </Box>
          </Flex>
          <Flex
            direction="row"
            justifyContent="start"
            alignItems="center"
            padding="0px 30px 20px 30px"
          >
            <Box
              className="bgPinkLight"
              display="flex"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "100%",
                cursor: "pointer",
              }}
              alignItems="center"
              justifyContent="center"
            >
              <BsPlayFill
                style={{
                  width: "16px",
                  height: "16px",
                }}
                className="play-icon text-white"
              />
            </Box>

            <Box className="text-white font-bold ml-4">
              <p
                style={{
                  fontSize: "12px",
                }}
              >
                00:00
              </p>
            </Box>

            <Box
              width="90%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              margin="0px 20px"
            >
              <input
                type="range"
                className="progressBar"
                name="range"
                id="range"
                defaultValue={0}
              />
            </Box>

            <Box
              display="flex"
              justifySelf="end"
              className="text-white font-bold"
            >
              <p style={{ fontSize: "12px" }}>05:39</p>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default AllEntries;
