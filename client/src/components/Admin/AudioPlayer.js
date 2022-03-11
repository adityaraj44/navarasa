import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import ApiContext from "../context/api-context";
import AudioContext from "../context/audio-player-context";

const AudioPlayer = () => {
  const apiContext = useContext(ApiContext);
  const { entries, shortlistEntry } = apiContext;

  const audioContext = useContext(AudioContext);
  const {
    isPlaying,
    handlePlay,
    changeRange,
    calculateTime,
    duration,
    progressBarRef,
    currentTime,
    currentPlaying,
    setCurrentPlaying,
  } = audioContext;

  const handleShortlist = async () => {
    await shortlistEntry(currentPlaying._id);
    await entries.forEach((entry) => {
      if (entry._id === currentPlaying._id) {
        const prev = currentPlaying;
        setCurrentPlaying({
          ...prev,
          isShortlisted: !prev.isShortlisted,
        });
      }
    });
  };

  return (
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
          {currentPlaying.songtitle}
        </Text>
        <Box>
          <Text
            display="inline"
            className="text-purpleLight font-bold"
            fontSize="14px"
            cursor="pointer"
          >
            <a href={currentPlaying.audio} download>
              Download audio file
            </a>
          </Text>
          <Text
            display="inline"
            className="text-yellow font-bold ml-3"
            fontSize="14px"
            cursor="pointer"
            onClick={handleShortlist}
          >
            {currentPlaying.isShortlisted ? "Remove" : "Shortlist"}
          </Text>
          <Link to={`/navarasa/admin/entries/entry/${currentPlaying._id}`}>
            <Text
              display="inline"
              className="text-pink font-bold ml-3"
              fontSize="14px"
              cursor="pointer"
            >
              Details
            </Text>
          </Link>
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
          width="90%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          margin="0px 20px"
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

        <Box display="flex" justifySelf="end" className="text-white font-bold">
          <p style={{ fontSize: "12px" }}>
            {duration && !isNaN(duration) && calculateTime(duration)}
          </p>
        </Box>
      </Flex>
    </Box>
  );
};

export default AudioPlayer;
