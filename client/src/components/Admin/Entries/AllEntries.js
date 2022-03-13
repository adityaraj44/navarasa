import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import AdminNavbar from "../AdminNavbar";
import { TriangleUpIcon, TriangleDownIcon } from "@chakra-ui/icons";
import EntryItem from "./EntryItem";

import ApiContext from "../../context/api-context";
import AudioContext from "../../context/audio-player-context";
import AudioPlayer from "../AudioPlayer";

const AllEntries = () => {
  const [isSelected, setIsSelected] = useState();

  const apiContext = useContext(ApiContext);
  const { entries, setEntries, getEntries, isLoading } = apiContext;

  const audioContext = useContext(AudioContext);
  const { currentPlaying } = audioContext;

  useEffect(() => {
    getEntries();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [sortByDate, setSortByDate] = useState(true);
  const [sortByTitle, setSortByTitle] = useState(false);
  const [sortByName, setSortByName] = useState(false);

  const handleSortByDate = () => {
    const prev = sortByDate;
    setSortByDate(!prev);
    setSortByTitle(false);
    setSortByName(false);
    var newEntries = [];
    if (prev) {
      Object.assign(newEntries, entries);
      newEntries.sort((a, b) => {
        const aDate = new Date(a.createdAt);
        const bDate = new Date(b.createdAt);
        if (aDate > bDate) {
          return 1;
        }
        if (aDate < bDate) {
          return -1;
        }
        return 0;
      });
    } else {
      Object.assign(newEntries, entries);
      newEntries.sort((a, b) => {
        const aDate = new Date(a.createdAt);
        const bDate = new Date(b.createdAt);
        if (aDate > bDate) {
          return -1;
        }
        if (aDate < bDate) {
          return 1;
        }
        return 0;
      });
    }

    setEntries(newEntries);
  };

  const handleSortByTitle = () => {
    const prev = sortByTitle;
    setSortByTitle(!prev);
    setSortByDate(false);
    setSortByName(false);
    var newEntries = [];
    if (prev) {
      Object.assign(newEntries, entries);
      newEntries.sort((a, b) => {
        if (a.songtitle > b.songtitle) {
          return -1;
        }
        if (a.songtitle < b.songtitle) {
          return 1;
        }
        return 0;
      });
    } else {
      Object.assign(newEntries, entries);
      newEntries.sort((a, b) => {
        if (a.songtitle > b.songtitle) {
          return 1;
        }
        if (a.songtitle < b.songtitle) {
          return -1;
        }
        return 0;
      });
    }

    setEntries(newEntries);
  };

  const handleSortByName = () => {
    const prev = sortByName;
    setSortByName(!prev);
    setSortByDate(false);
    setSortByTitle(false);
    var newEntries = [];
    if (prev) {
      Object.assign(newEntries, entries);
      newEntries.sort((a, b) => {
        if (a.submittername > b.submittername) {
          return -1;
        }
        if (a.submittername < b.submittername) {
          return 1;
        }
        return 0;
      });
    } else {
      Object.assign(newEntries, entries);
      newEntries.sort((a, b) => {
        if (a.submittername > b.submittername) {
          return 1;
        }
        if (a.submittername < b.submittername) {
          return -1;
        }
        return 0;
      });
    }

    setEntries(newEntries);
  };

  return (
    <>
      {isLoading ? (
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
      ) : (
        <>
          <AdminNavbar />
          <Box className="bgPurple" position="relative">
            {entries && entries.length > 0 ? (
              <>
                <Box
                  zIndex="0"
                  position="relative"
                  mx="auto"
                  maxWidth="1400px"
                  padding="60px 100px 250px 100px"
                  minHeight="90vh"
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
                      All entries[{entries.length}]
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
                      Shortlist[
                      {entries.filter((entry) => entry.isShortlisted).length}]
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
                      {sortByDate ? (
                        <span>
                          <TriangleDownIcon
                            onClick={handleSortByDate}
                            fontSize="10px"
                            className="mr-2"
                          />
                        </span>
                      ) : (
                        <span>
                          <TriangleUpIcon
                            onClick={handleSortByDate}
                            fontSize="10px"
                            className="mr-2"
                          />
                        </span>
                      )}
                      Date
                    </button>
                    <button
                      type="button"
                      className="tableTitle font-bold text-white bgPurpleLight"
                      style={{
                        width: "270px",
                      }}
                    >
                      {sortByName ? (
                        <span>
                          <TriangleDownIcon
                            onClick={handleSortByName}
                            fontSize="10px"
                            className="mr-2"
                          />
                        </span>
                      ) : (
                        <span>
                          <TriangleUpIcon
                            onClick={handleSortByName}
                            fontSize="10px"
                            className="mr-2"
                          />
                        </span>
                      )}
                      Submitter
                    </button>
                    <button
                      type="button"
                      className="tableTitle font-bold text-white bgPurpleLight"
                      style={{
                        width: "170px",
                      }}
                    >
                      Ref ID
                    </button>
                    <button
                      type="button"
                      className="tableTitle font-bold text-white bgPurpleLight"
                      style={{
                        width: "370px",
                      }}
                    >
                      {sortByTitle ? (
                        <span>
                          <TriangleDownIcon
                            onClick={handleSortByTitle}
                            fontSize="10px"
                            className="mr-2"
                          />
                        </span>
                      ) : (
                        <span>
                          <TriangleUpIcon
                            onClick={handleSortByTitle}
                            fontSize="10px"
                            className="mr-2"
                          />
                        </span>
                      )}
                      Song title
                    </button>
                  </Flex>
                  {isSelected &&
                    entries
                      .filter((entry) => entry.isShortlisted)
                      .map((entry) => {
                        return <EntryItem entry={entry} key={entry._id} />;
                      })}
                  {!isSelected &&
                    entries.map((entry) => {
                      return <EntryItem entry={entry} key={entry._id} />;
                    })}
                </Box>
                {currentPlaying !== null && <AudioPlayer />}
              </>
            ) : (
              <Box textAlign="center" height="100vh" pt="120px">
                <Text className="text-white font-bold " fontSize="16px">
                  No entries found
                </Text>
              </Box>
            )}
          </Box>
        </>
      )}
    </>
  );
};

export default AllEntries;
