import React, { useState, useContext, useEffect, useRef } from "react";
import { Box, Flex, Image, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import AdminNavbar from "../AdminNavbar";
import instagram from "../../../imgs/instagram.svg";
import twitter from "../../../imgs/twitter.svg";
import youtube from "../../../imgs/youtube.svg";
import { Link } from "react-router-dom";
import ApiContext from "../../context/api-context";
import { dateFormat } from "../../../custom-hooks";

const EntryDetail = () => {
  const { id } = useParams();
  const apiContext = useContext(ApiContext);
  const {
    entries,
    entryDetail,
    getEntryDetail,
    isLoading,
    shortlistEntry,
    deleteEntry,
  } = apiContext;

  useEffect(() => {
    getEntryDetail(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entries]);

  const handleShortlist = async () => {
    await shortlistEntry(entryDetail._id);
  };
  const handleDelete = async () => {
    await deleteEntry(entryDetail._id);
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

  if (isLoading === true || entryDetail === null) {
    return (
      <Box
        width="100vw"
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        className="bgPurple"
      >
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="#fad01c"
          size="xl"
        />
      </Box>
    );
  }

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
              Ref ID #{entryDetail.refId}
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
                onClick={handleDelete}
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
                <Link
                  to={`/navarasa/admin/entries/editentry/${entryDetail._id}`}
                >
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
                onClick={handleShortlist}
              >
                {entryDetail.isShortlisted ? "Remove" : "Shortlist"}
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
                {dateFormat(entryDetail.createdAt)}
              </Text>
            </Box>
            <Box margin="0px 90px 0px 0px">
              <Text fontSize="16px" className="text-purpleLight font-bold">
                Full name
              </Text>
              <Text fontSize="18px" className="text-white ">
                {entryDetail.submittername}
              </Text>
            </Box>
            <Box margin="0px 90px 0px 0px">
              <Text fontSize="16px" className="text-purpleLight font-bold">
                Role
              </Text>
              <Text fontSize="18px" className="text-white ">
                {entryDetail.role}
              </Text>
            </Box>
            <Box margin="0px 90px 0px 0px">
              <Text fontSize="16px" className="text-purpleLight font-bold">
                Country
              </Text>
              <Text fontSize="18px" className="text-white ">
                {entryDetail.country}
              </Text>
            </Box>
            <Box margin="0px 90px 0px 0px">
              <Text fontSize="16px" className="text-purpleLight font-bold">
                State
              </Text>
              <Text fontSize="18px" className="text-white ">
                {entryDetail.state}
              </Text>
            </Box>
            <Box>
              <Text fontSize="16px" className="text-purpleLight font-bold">
                City
              </Text>
              <Text fontSize="18px" className="text-white ">
                {entryDetail.city}
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
                {entryDetail.email}
              </Text>
            </Box>
            <Box margin="0px 90px 0px 0px">
              <Text fontSize="16px" className="text-purpleLight font-bold">
                Contact
              </Text>
              <Text fontSize="18px" className="text-white ">
                +91 {entryDetail.contact}
              </Text>
            </Box>
            <Box margin="0px 90px 0px 0px">
              <Text fontSize="16px" className="text-purpleLight font-bold">
                Postal address
              </Text>
              <Text fontSize="18px" className="text-white ">
                {entryDetail.postaladdress}
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
                {entryDetail.songtitle}
              </Text>
              <Box>
                <Text
                  display="inline"
                  className="text-purpleLight font-bold"
                  fontSize="14px"
                  cursor="pointer"
                >
                  <a href={entryDetail.audio} download>
                    Download audio file
                  </a>
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
                <audio
                  ref={audioRef}
                  onLoadedData={() => setDuration(audioRef.current.duration)}
                  onTimeUpdate={() =>
                    setCurrentTime(audioRef.current.currentTime)
                  }
                  onEnded={() => setIsPlaying(false)}
                  preload="metadata"
                  src={entryDetail.audio}
                />
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
              </Box>

              <Box className="text-white font-bold ml-4">
                <p
                  style={{
                    fontSize: "12px",
                  }}
                >
                  {calculateTime(currentTime)}
                </p>
              </Box>

              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                margin="0px 20px"
                flexGrow={1}
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

              <Box
                display="flex"
                justifySelf="end"
                className="text-white font-bold"
              >
                <p style={{ fontSize: "12px" }}>
                  {duration && !isNaN(duration) && calculateTime(duration)}
                </p>
              </Box>
            </Flex>
          </Box>
          {/* title and artist */}

          <Box margin="20px 0px 30px 0px">
            <Text fontSize="16px" className="text-purpleLight font-bold">
              Song title
            </Text>
            <Text fontSize="18px" className="text-white ">
              {entryDetail.songtitle}
            </Text>
          </Box>
          <Box margin="0px 0px 30px 0px">
            <Text fontSize="16px" className="text-purpleLight font-bold">
              Artist
            </Text>
            <Text fontSize="18px" className="text-white ">
              {entryDetail.artist}
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
              {entryDetail.artistCategory}
            </Text>
          </Box>
          {(entryDetail.instagram ||
            entryDetail.twitter ||
            entryDetail.youtube) && (
            <Box margin="0px 0px 30px 0px">
              <Text fontSize="16px" className="text-purpleLight font-bold">
                Social media links
              </Text>
              {entryDetail.instagram && (
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
                    {entryDetail.instagram}
                  </Text>
                </Flex>
              )}
              {entryDetail.youtube && (
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
                    {entryDetail.youtube}
                  </Text>
                </Flex>
              )}

              {entryDetail.twitter && (
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
                    {entryDetail.twitter}
                  </Text>
                </Flex>
              )}
            </Box>
          )}

          {entryDetail.additionalinfo && (
            <Box>
              <Text fontSize="16px" className="text-purpleLight font-bold">
                Additional info
              </Text>
              <Text
                fontSize="18px"
                className="text-white"
                style={{
                  whiteSpace: "pre-wrap",
                }}
              >
                {entryDetail.additionalinfo}
              </Text>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default EntryDetail;
