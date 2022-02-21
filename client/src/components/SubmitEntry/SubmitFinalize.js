import React, { useContext, useEffect } from "react";
import { Box, Text, Image, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BiChevronLeft } from "react-icons/bi";
import { useHistory, Link } from "react-router-dom";
import FormFieldContext from "../context/form-field-context";
import SubmitEntry from "./SubmitEntry";
import { useMediaQuery } from "../../custom-hooks";
import instagram from "../../imgs/instagram.png";
import twitter from "../../imgs/twitter.png";
import youtube from "../../imgs/youtube.png";

const SubmitFinalize = () => {
  const isSmall = useMediaQuery("(max-width:992px)");
  const history = useHistory();

  const formContext = useContext(FormFieldContext);

  const {
    formFields,
    validSubmittername,
    validRole,
    validEmail,
    validCountry,
    validContact,
    validState,
    validCity,
    validAddress,

    validArtist,
    validAudio,
    validArtistCategory,
    validSongTitle,
  } = formContext;
  console.log(formFields.audio);
  useEffect(() => {
    if (
      validSubmittername !== true &&
      validRole !== true &&
      validEmail !== true &&
      validCountry !== true &&
      validContact !== true &&
      validState !== true &&
      validCity !== true &&
      validAddress !== true
    ) {
      history.push("/submitentry");
    } else if (
      validAudio !== true &&
      validArtist !== true &&
      validSongTitle !== true &&
      validArtistCategory !== true
    ) {
      history.push("/submitsong");
    }
  }, [
    history,
    validAddress,
    validArtist,
    validArtistCategory,
    validAudio,
    validCity,
    validContact,
    validCountry,
    validEmail,
    validRole,
    validSongTitle,
    validState,
    validSubmittername,
  ]);

  const isSocialMediaLinks =
    formFields.instagram.length > 0 ||
    formFields.youtube.length > 0 ||
    formFields.twitter.length > 0;

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
              textAlign={"center"}
              className={isSmall ? "px-mobile" : "px"}
            >
              <Text fontSize="18px" className="text-yellow font-bold  mb-4">
                Verify submitter information
              </Text>
              <Box className="mb-4">
                <Text className="text-purpleLight font-bold" fontSize="16px">
                  Full name
                </Text>
                <Text className="text-white" fontSize="18px">
                  {formFields.submittername}
                </Text>
              </Box>
              <Box className="mb-4">
                <Text className="text-purpleLight font-bold" fontSize="16px">
                  Role
                </Text>
                <Text className="text-white" fontSize="18px">
                  {formFields.role}
                </Text>
              </Box>
              <Box className="mb-4">
                <Text className="text-purpleLight font-bold" fontSize="16px">
                  Email address
                </Text>
                <Text className="text-white" fontSize="18px">
                  {formFields.email}
                </Text>
              </Box>
              <Box className="mb-4">
                <Text className="text-purpleLight font-bold" fontSize="16px">
                  Country
                </Text>
                <Text className="text-white" fontSize="18px">
                  {formFields.country}
                </Text>
              </Box>
              <Box className="mb-4">
                <Text className="text-purpleLight font-bold" fontSize="16px">
                  State
                </Text>
                <Text className="text-white" fontSize="18px">
                  {formFields.state}
                </Text>
              </Box>
              <Box className="mb-4">
                <Text className="text-purpleLight font-bold" fontSize="16px">
                  City
                </Text>
                <Text className="text-white" fontSize="18px">
                  {formFields.city}
                </Text>
              </Box>
              <Box className="mb-4">
                <Text className="text-purpleLight font-bold" fontSize="16px">
                  Contact number
                </Text>
                <Text className="text-white" fontSize="18px">
                  {`+91 ${formFields.contact}`}
                </Text>
              </Box>
              <Box className="mb-4">
                <Text className="text-purpleLight font-bold" fontSize="16px">
                  Postal address
                </Text>
                <Text className="text-white" fontSize="18px">
                  {formFields.postaladdress}
                </Text>
              </Box>
              <Text fontSize="18px" className="text-yellow font-bold mt-4 mb-4">
                Verify submitter information
              </Text>
              <Box className="mb-4">
                <Text className="text-purpleLight font-bold" fontSize="16px">
                  Uploaded song
                </Text>
                <Text className="text-white mb-2" fontSize="18px">
                  {formFields.audio.name}
                </Text>
                <audio
                  className="mt-4"
                  style={{ margin: "0 auto" }}
                  src={URL.createObjectURL(formFields.audio)}
                  controls
                ></audio>
              </Box>

              <Box className="mb-4">
                <Text className="text-purpleLight font-bold" fontSize="16px">
                  Artist
                </Text>
                <Text className="text-white" fontSize="18px">
                  {formFields.artist}
                </Text>
                <Text
                  fontSize="16px"
                  width="180px"
                  height="40px"
                  mx="auto"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  borderRadius="2px"
                  className="text-yellow font-bold bgPinkLight mt-1"
                >
                  {formFields.artistCategory}
                </Text>
              </Box>
              {isSocialMediaLinks && (
                <>
                  <Text
                    className="text-purpleLight font-bold mb-4"
                    fontSize="16px"
                  >
                    Social media link
                  </Text>
                  {formFields.instagram.length > 0 && (
                    <Box textAlign="center" className="mb-4">
                      <Image
                        width="30px"
                        height="30px"
                        alt="instagram"
                        src={instagram}
                        mx="auto"
                        className="mb-2"
                      />
                      <Text className="text-yellow" fontSize="16px">
                        {formFields.instagram}
                      </Text>
                    </Box>
                  )}
                  {formFields.youtube.length > 0 && (
                    <Box className="mb-4">
                      <Image
                        width="30px"
                        mx="auto"
                        height="30px"
                        alt="youtube"
                        src={youtube}
                        className="mb-2"
                      />
                      <Text className="text-yellow" fontSize="16px">
                        {formFields.youtube}
                      </Text>
                    </Box>
                  )}
                  {formFields.twitter.length > 0 && (
                    <Box className="mb-4">
                      <Image
                        width="30px"
                        mx="auto"
                        height="30px"
                        alt="twitter"
                        src={twitter}
                        className="mb-2"
                      />
                      <Text className="text-yellow" fontSize="16px">
                        {formFields.twitter}
                      </Text>
                    </Box>
                  )}
                </>
              )}
              {formFields.additionalinfo.length > 0 && (
                <>
                  <Text
                    className="text-purpleLight font-bold mb-4"
                    fontSize="16px"
                  >
                    Additional info
                  </Text>
                  <Text
                    className="text-white mt-2 mb-4"
                    style={{
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {formFields.additionalinfo}
                  </Text>
                </>
              )}
              <Box className="form-control">
                <Flex
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  className="terms-checkbox"
                >
                  <input
                    className="text-yellow bgYellow  mt-4 mb-4"
                    type="checkbox"
                    id="terms"
                    name="terms"
                    value="Bike"
                  />

                  <label
                    className="font-bold text-yellow  mt-4 mb-4"
                    htmlFor="terms"
                    style={{
                      fontSize: `${isSmall ? "14px" : "16px"}`,
                    }}
                  >
                    I have read and agree to all the{" "}
                    <Link
                      to="/"
                      style={{
                        textDecoration: "underline",
                      }}
                    >
                      Terms & Conditions
                    </Link>
                    .
                  </label>
                </Flex>
              </Box>
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
                  <Link to="/submitsong">Back</Link>
                </Flex>
                <motion.button
                  type="submit"
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
                  className="text-yellow ml-1 form-control bgPink confirm-submit"
                >
                  Confirm submission
                </motion.button>
              </Flex>
            </Box>
          </motion.div>
        </Box>
      </Box>
    </>
  );
};

export default SubmitFinalize;
