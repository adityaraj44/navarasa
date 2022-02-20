import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { BiChevronLeft } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useMediaQuery } from "../../custom-hooks";
import instagram from "../../imgs/instagram.png";
import twitter from "../../imgs/twitter.png";
import youtube from "../../imgs/youtube.png";

import SubmitEntry from "./SubmitEntry";

const SubmitSong = () => {
  const isSmall = useMediaQuery("(max-width:992px)");

  const fieldsVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        delay: 0.4,
        duration: 0.8,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        type: "spring",
        delay: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <>
      <SubmitEntry />
      <Box className="bgPurple">
        <Box maxWidth="1125px" mx="auto">
          <motion.div
            variants={fieldsVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Box
              mx="auto"
              maxWidth="900px"
              className={isSmall ? "px-mobile" : "px"}
            >
              <Text fontSize="16px" className="text-purpleLight font-bold mb-4">
                Upload song
              </Text>
              <Flex
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                className="audio-input-container bgPurpleDark mb-4"
              >
                <Box fontSize="16px">
                  <p className="text-white">Pick an audio file to upload</p>{" "}
                  <p className="text-white">25 MB size limit</p>
                </Box>
                <Box className="form-control">
                  <label
                    htmlFor="audio"
                    className="text-white bgPinkLight audio-input-label"
                  >
                    Browse
                  </label>
                  <input type="file" name="audio" id="audio" hidden />
                </Box>
              </Flex>
              <FormControl className="form-control">
                <FormLabel
                  className="form-label text-purpleLight"
                  fontWeight="bold"
                  fontSize="16px"
                  htmlFor="songtitle"
                >
                  Song title
                </FormLabel>
                <Input
                  className="input bgWhite mt-2 mb-4 text-grey"
                  borderRadius="2px"
                  size="md"
                  isRequired
                  placeholder="Navarasa Naadi"
                  fontSize="18px"
                  id="songtitle"
                  name="songtitle"
                  type="text"
                />
              </FormControl>
              <FormControl className="form-control">
                <FormLabel
                  className="form-label text-purpleLight"
                  fontWeight="bold"
                  fontSize="16px"
                  htmlFor="artist"
                >
                  Artist
                </FormLabel>
                <Input
                  className="input bgWhite mt-2 mb-4 text-grey"
                  borderRadius="2px"
                  size="md"
                  isRequired
                  placeholder="Navarasa Creative feat. Ashok"
                  fontSize="18px"
                  id="artist"
                  name="artist"
                  type="text"
                />
              </FormControl>
              <Box className="select-wrapper form-control" fontSize="18px">
                <select
                  className="text-white bgPinkLight select mt-2 mb-4"
                  name="artistCategory"
                  id="artistCategory"
                  placeholder="Pick an artist category"
                  required
                >
                  <option value="">Pick an artist category</option>
                </select>
              </Box>
              <FormControl className="form-control">
                <FormLabel
                  className="form-label text-purpleLight"
                  fontWeight="bold"
                  fontSize="16px"
                  htmlFor="socialmedialinks"
                >
                  Social media links [optional]
                </FormLabel>
                <Flex
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                  className="mt-4 mb-4"
                >
                  <a className="social-link" href="/">
                    <Image alt="instagram" src={instagram} />
                  </a>
                  <Input
                    className="input bgWhite ml-4 text-grey"
                    borderRadius="2px"
                    size="md"
                    placeholder="Instagram profile link"
                    fontSize="18px"
                    id="instagram"
                    name="instagram"
                    type="url"
                  />
                </Flex>
                <Flex
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                  className="mt-4 mb-4"
                >
                  <a className="social-link" href="/">
                    <Image alt="youtube" src={youtube} />
                  </a>
                  <Input
                    className="input bgWhite ml-4 text-grey"
                    borderRadius="2px"
                    size="md"
                    placeholder="Youtube channel link"
                    fontSize="18px"
                    id="youtube"
                    name="youtube"
                    type="url"
                  />
                </Flex>
                <Flex
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                  className="mt-4 mb-4"
                >
                  <a className="social-link" href="/">
                    <Image alt="twitter" src={twitter} />
                  </a>
                  <Input
                    className="input bgWhite ml-4 text-grey"
                    borderRadius="2px"
                    size="md"
                    placeholder="Twitter profile link"
                    fontSize="18px"
                    id="twitter"
                    name="twitter"
                    type="url"
                  />
                </Flex>
              </FormControl>
              <FormControl className="form-control">
                <FormLabel
                  className="form-label text-purpleLight"
                  fontWeight="bold"
                  fontSize="16px"
                  htmlFor="additionalinfo"
                >
                  Additional info [optional]
                </FormLabel>
                <Textarea
                  className="input bgWhite mt-2 mb-4 text-grey"
                  borderRadius="2px"
                  size="md"
                  placeholder="More information you’d like to share about the song, the musicians involved or your musical journey."
                  fontSize="18px"
                  id="additionalinfo"
                  name="additionalinfo"
                  type="text"
                  rows="7"
                />
              </FormControl>
              <Flex
                className="mt-4 mb-4 font-bold text-white"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                fontSize="16px"
              >
                <Flex
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <BiChevronLeft
                    display="inline"
                    fontSize="16px"
                    className="text-white"
                  />
                  <Link to="/submitentry">Back</Link>
                </Flex>
                <motion.p
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      type: "spring",

                      damping: 10,
                      yoyo: "Infinity",
                      duration: 0.5,
                    },
                  }}
                  whileTap={{
                    scale: 1.1,
                    transition: {
                      type: "spring",

                      damping: 10,
                      yoyo: "Infinity",
                      duration: 0.5,
                    },
                  }}
                  className="text-white bgPurpleLight continueBtn"
                >
                  Continue
                </motion.p>
              </Flex>
            </Box>
          </motion.div>
        </Box>
      </Box>
    </>
  );
};

export default SubmitSong;
