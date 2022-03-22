import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useContext, useRef, useState } from "react";
import { BsPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import ApiContext from "../../context/api-context";
import AudioContext from "../../context/audio-player-context";

const EntryItem = ({ entry }) => {
  const apiContext = useContext(ApiContext);
  const { shortlistEntry } = apiContext;

  const audioContext = useContext(AudioContext);
  const { setCurrentPlaying } = audioContext;

  const handleCurrentPlaying = () => {
    setCurrentPlaying(entry);
    // startPlaying();
  };

  // const startPlaying = () => {
  //   setTimeout(() => {
  //     if (currentPlaying !== null) {
  //       handlePlay();
  //     }
  //   }, 500);
  // };

  const audioRef = useRef(null);
  const [duration, setDuration] = useState(0);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
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
            {entry.dateSubmitted}
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
            onClick={handleCurrentPlaying}
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
              preload="metadata"
              src={entry.audio}
            />

            <BsPlayFill
              style={{
                width: "15px",
                height: "15px",
              }}
              className="text-white"
            />
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
            to={`/adinova/admin/entries/entry/${entry._id}`}
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
