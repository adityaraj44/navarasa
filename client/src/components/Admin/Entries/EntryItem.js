import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import ApiContext from "../../context/api-context";
import AudioContext from "../../context/audio-player-context";

const EntryItem = ({ entry }) => {
  const apiContext = useContext(ApiContext);
  const { shortlistEntry } = apiContext;

  const audioContext = useContext(AudioContext);
  const {
    audioRef,
    isPlaying,
    handlePlay,
    setDuration,
    setCurrentTime,
    setIsPlaying,
    calculateTime,
    duration,
    setCurrentPlaying,
  } = audioContext;

  const dateFormat = (date) => {
    const init = date.slice(0, 10);
    const day = init.split("-")[2];
    const month = init.split("-")[1];
    const year = init.split("-")[0];
    return `${day}-${month}-${year}`;
  };

  const handleShortlist = async () => {
    await shortlistEntry(entry._id);
  };

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
            {dateFormat(entry.createdAt)}
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
            {entry.submittername}
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
            #{entry.refId}
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
            {entry.songtitle}
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
            onClick={() => setCurrentPlaying(entry)}
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
            <audio
              ref={audioRef}
              onLoadedData={() => setDuration(audioRef.current.duration)}
              onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
              onEnded={() => setIsPlaying(false)}
              preload="metadata"
              src={entry.audio}
            />
            {isPlaying ? (
              <BsPauseFill
                style={{
                  width: "15px",
                  height: "15px",
                }}
                className="text-white"
                onClick={handlePlay}
              />
            ) : (
              <BsPlayFill
                style={{
                  width: "15px",
                  height: "15px",
                }}
                className="text-white"
                onClick={handlePlay}
              />
            )}
          </Box>
          <Text fontSize="14px" className="font-bold text-white">
            {duration && !isNaN(duration) && calculateTime(duration)}
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
            onClick={handleShortlist}
          >
            {entry.isShortlisted ? "Remove" : "Shortlist"}
          </Text>
          <Link
            to={`/navarasa/admin/entries/entry/${entry._id}`}
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
