import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { BsPlayFill } from "react-icons/bs";
import AdminNavbar from "../AdminNavbar";
import instagram from "../../../imgs/instagram.png";
import twitter from "../../../imgs/twitter.png";
import youtube from "../../../imgs/youtube.png";
import { Link } from "react-router-dom";

const EntryDetail = () => {
  return (
    <>
      <AdminNavbar />
      <Box className="bgPurple">
        <Box mx="auto" maxWidth="1400px" padding="60px 100px 250px 100px">
          <Flex
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            borderBottom="1px solid #c4c4c4"
            padding="20px 0px"
          >
            <Text className="text-white font-bold" fontSize="16px">
              Ref ID #20220414ABDCS
            </Text>
            <Box className="form-control">
              <button
                style={{
                  backgroundColor: "#BD2E36",
                  fontSize: "14px",
                  width: "120px",
                  height: "40px",
                  borderRadius: "3px",
                  outline: "none",
                  border: "none",
                  marginRight: "20px",
                }}
                className="text-white font-bold"
                type="button"
              >
                Delete
              </button>
              <button
                style={{
                  fontSize: "14px",
                  width: "120px",
                  height: "40px",
                  borderRadius: "3px",
                  outline: "none",
                  border: "none",
                  marginRight: "20px",
                }}
                className="text-white bgPurpleLight font-bold"
                type="button"
              >
                <Link to="/navarasa/admin/entries/editentry/:id">
                  Edit details
                </Link>
              </button>
              <button
                style={{
                  fontSize: "14px",
                  width: "120px",
                  height: "40px",
                  borderRadius: "3px",
                  outline: "none",
                  border: "none",
                }}
                className="text-yellow bgPink font-bold"
                type="button"
              >
                Shortlist
              </button>
            </Box>
          </Flex>
          <Flex
            className="mt-4"
            direction="row"
            justifyContent={"flex-start"}
            align={"center"}
          >
            <Box margin="0px 90px 0px 0px">
              <Text fontSize="16px" className="text-purpleLight font-bold">
                Date submitted
              </Text>
              <Text fontSize="18px" className="text-white ">
                04-02-2022
              </Text>
            </Box>
            <Box margin="0px 90px 0px 0px">
              <Text fontSize="16px" className="text-purpleLight font-bold">
                Full name
              </Text>
              <Text fontSize="18px" className="text-white ">
                Aditya Raj
              </Text>
            </Box>
            <Box margin="0px 90px 0px 0px">
              <Text fontSize="16px" className="text-purpleLight font-bold">
                Role
              </Text>
              <Text fontSize="18px" className="text-white ">
                Composer
              </Text>
            </Box>
            <Box margin="0px 90px 0px 0px">
              <Text fontSize="16px" className="text-purpleLight font-bold">
                Country
              </Text>
              <Text fontSize="18px" className="text-white ">
                India
              </Text>
            </Box>
            <Box margin="0px 90px 0px 0px">
              <Text fontSize="16px" className="text-purpleLight font-bold">
                State
              </Text>
              <Text fontSize="18px" className="text-white ">
                Tamil Nadu
              </Text>
            </Box>
            <Box>
              <Text fontSize="16px" className="text-purpleLight font-bold">
                City
              </Text>
              <Text fontSize="18px" className="text-white ">
                Chennai
              </Text>
            </Box>
          </Flex>
          {/* second block */}
          <Flex
            className="mt-4"
            direction="row"
            justifyContent={"flex-start"}
            align={"center"}
          >
            <Box margin="0px 90px 0px 0px">
              <Text fontSize="16px" className="text-purpleLight font-bold">
                Email address
              </Text>
              <Text fontSize="18px" className="text-white ">
                contact@adityaraj.com
              </Text>
            </Box>
            <Box margin="0px 90px 0px 0px">
              <Text fontSize="16px" className="text-purpleLight font-bold">
                Contact
              </Text>
              <Text fontSize="18px" className="text-white ">
                +91 5656565656
              </Text>
            </Box>
            <Box margin="0px 90px 0px 0px">
              <Text fontSize="16px" className="text-purpleLight font-bold">
                Postal address
              </Text>
              <Text fontSize="18px" className="text-white ">
                42 Varsham Street, Chennai 400750
              </Text>
            </Box>
          </Flex>
          {/* audio player */}
          <Box className="music-player bgPurpleDark mt-4" borderRadius="2px">
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
          {/* title and artist */}

          <Box margin="20px 0px 30px 0px">
            <Text fontSize="16px" className="text-purpleLight font-bold">
              Song title
            </Text>
            <Text fontSize="18px" className="text-white ">
              Navarasa Naadi
            </Text>
          </Box>
          <Box margin="0px 0px 30px 0px">
            <Text fontSize="16px" className="text-purpleLight font-bold">
              Artist
            </Text>
            <Text fontSize="18px" className="text-white ">
              Navarasa Creative feat. Ashok
            </Text>
          </Box>
          <Box margin="0px 0px 30px 0px">
            <Text
              fontSize="16px"
              width="180px"
              height="40px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              borderRadius="2px"
              className="text-yellow font-bold bgPinkLight mt-1"
            >
              Artist collaboration
            </Text>
          </Box>
          <Box margin="0px 0px 30px 0px">
            <Text fontSize="16px" className="text-purpleLight font-bold">
              Social media links
            </Text>
            <Flex
              flexDirection="row"
              justifyContent="start"
              alignItems="center"
              className="mt-4 mb-4"
            >
              <Image
                alt="instagram"
                width="30px"
                height="30px"
                borderRadius="100%"
                src={instagram}
              />

              <Text fontSize={"18px"} className="text-yellow ml-4">
                instagram.com/username
              </Text>
            </Flex>
            <Flex
              flexDirection="row"
              justifyContent="start"
              alignItems="center"
              className="mt-4 mb-4"
            >
              <Image
                alt="youtube"
                width="30px"
                height="30px"
                borderRadius="100%"
                src={youtube}
              />

              <Text fontSize={"18px"} className="text-yellow ml-4">
                youtube.com/username
              </Text>
            </Flex>
            <Flex
              flexDirection="row"
              justifyContent="start"
              alignItems="center"
              className="mt-4 mb-4"
            >
              <Image
                alt="twitter"
                width="30px"
                height="30px"
                borderRadius="100%"
                src={twitter}
              />

              <Text fontSize={"18px"} className="text-yellow ml-4">
                twitter.com/username
              </Text>
            </Flex>
          </Box>
          <Box>
            <Text fontSize="16px" className="text-purpleLight font-bold">
              Additional info
            </Text>
            <Text fontSize="18px" className="text-white ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              nec eros vitae purus efficitur euismod. Ut neque est, tincidunt eu
              nibh dapibus, posuere ornare eros. In tincidunt, elit ut rutrum
              finibus, dui velit vehicula dolor, a volutpat arcu arcu sit amet
              diam. Maecenas interdum leo sed lectus hendrerit interdum. Sed et
              tempus nibh. Fusce vel tincidunt lorem. Aliquam at nisl
              consectetur, mollis arcu euismod, tincidunt ex.
            </Text>
            <br />
            <Text fontSize="18px" className="text-white">
              Pellentesque dictum massa a eros cursus, sit amet ultricies tellus
              laoreet. Etiam condimentum lacinia dictum. Phasellus non dolor id
              mauris cursus viverra. Integer vel tristique augue. Etiam nec
              eleifend massa. Nunc tempus ullamcorper lacus, et ultrices metus
              lobortis at. Cras tempus, quam eu semper bibendum, turpis elit
              facilisis justo, at pretium est nulla non dolor.
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default EntryDetail;
