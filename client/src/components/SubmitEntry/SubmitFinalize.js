import React, { useContext, useEffect, useRef, useState } from "react";
import { Box, Text, Image, Flex, useToast } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BiChevronLeft } from "react-icons/bi";
import { useHistory, Link } from "react-router-dom";
import FormFieldContext from "../context/form-field-context";
import SubmitEntry from "./SubmitEntry";
import { useMediaQuery } from "../../custom-hooks";
import instagram from "../../imgs/instagram.svg";
import twitter from "../../imgs/twitter.svg";
import youtube from "../../imgs/youtube.svg";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import SuccessPage from "./SuccessPage";
import ErrorPage from "./ErrorPage";

const SubmitFinalize = () => {
  const toast = useToast();
  const isSmall = useMediaQuery("(max-width:992px)");
  const history = useHistory();

  const formContext = useContext(FormFieldContext);

  const { formFields } = formContext;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (
      !formFields.submittername ||
      !formFields.role ||
      !formFields.email ||
      !formFields.country ||
      !formFields.state ||
      !formFields.city ||
      !formFields.postaladdress ||
      !formFields.contact
    ) {
      history.push("/submitentry");
    } else if (
      !formFields.songtitle ||
      !formFields.audio ||
      !formFields.artist ||
      !formFields.artistCategory
    ) {
      history.push("/submitsong");
    }
  }, [
    formFields.artist,
    formFields.artistCategory,
    formFields.audio,
    formFields.city,
    formFields.contact,
    formFields.country,
    formFields.email,
    formFields.postaladdress,
    formFields.role,
    formFields.songtitle,
    formFields.state,
    formFields.submittername,
    history,
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

  // audio player
  const audioRef = useRef();
  const progressBarRef = useRef();
  const animationRef = useRef();

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const handlePlay = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioRef.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioRef.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBarRef.current.value = audioRef.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBarRef.current.style.setProperty(
      "--seek-before-width",
      `${(progressBarRef.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBarRef.current.value);
  };

  const [isChecked, setIsChecked] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChecked = () => {
    if (isChecked === true) {
      setIsSuccess(true);
      setIsError(false);
    } else {
      toast({
        title: "Please accept the terms and conditions",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }
  };

  if (isSuccess === true && isError === false) {
    return <SuccessPage />;
  }

  if (isError === true && isSuccess === false) {
    <ErrorPage />;
  }

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
                Verify song details
              </Text>
              <Box className="mb-4">
                <Text className="text-purpleLight font-bold" fontSize="16px">
                  Uploaded song
                </Text>
                <Box
                  padding="20px 20px"
                  borderRadius="2px"
                  className="bgPurpleDark mt-2"
                >
                  <Text
                    textAlign="left"
                    className="text-white mb-4"
                    fontSize="16px"
                  >
                    {formFields.audio.name}
                  </Text>
                  <Flex
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Flex
                      onClick={handlePlay}
                      className="play-pause-btn bgPinkLight"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "100%",
                        cursor: "pointer",
                      }}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <audio
                        ref={audioRef}
                        onLoadedData={() =>
                          setDuration(audioRef.current.duration)
                        }
                        onTimeUpdate={() =>
                          setCurrentTime(audioRef.current.currentTime)
                        }
                        onEnded={() => setIsPlaying(false)}
                      >
                        <source
                          src={
                            formFields.audio !== ""
                              ? window.webkitURL.createObjectURL(
                                  formFields.audio
                                )
                              : ""
                          }
                        />
                      </audio>
                      {isPlaying ? (
                        <BsPauseFill
                          style={{
                            width: "16px",
                            height: "16px",
                          }}
                          onClick={handlePlay}
                          className="play-icon text-white"
                        />
                      ) : (
                        <BsPlayFill
                          style={{
                            width: "16px",
                            height: "16px",
                          }}
                          onClick={handlePlay}
                          className="play-icon text-white"
                        />
                      )}
                    </Flex>

                    <Box
                      justifySelf="flex-start"
                      className="text-white font-bold ml-2"
                    >
                      <p
                        style={{
                          fontSize: "12px",
                        }}
                      >
                        {calculateTime(currentTime)}
                      </p>
                    </Box>
                    <Box
                      width={isSmall ? "70%" : "70%"}
                      margin="0px 20px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexShrink={"9"}
                    >
                      <input
                        ref={progressBarRef}
                        type="range"
                        className="progressBar"
                        name="range"
                        id="range"
                        defaultValue={0}
                        max={Math.floor(duration)}
                        onChange={changeRange}
                      />
                    </Box>

                    <Box className="text-white font-bold">
                      <p style={{ fontSize: "12px" }}>
                        {duration &&
                          !isNaN(duration) &&
                          calculateTime(duration)}
                      </p>
                    </Box>
                  </Flex>
                </Box>
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
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
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
                  onClick={handleChecked}
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
