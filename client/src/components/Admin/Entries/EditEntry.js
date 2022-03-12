import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  InputGroup,
  Spinner,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import ApiContext from "../../context/api-context";
import AdminNavbar from "../AdminNavbar";
import { Country, State, City } from "country-state-city";
import instagram from "../../../imgs/instagram.svg";
import twitter from "../../../imgs/twitter.svg";
import youtube from "../../../imgs/youtube.svg";
import FormFieldContext from "../../context/form-field-context";

const EditEntry = () => {
  const { id } = useParams();

  // api context
  const apiContext = useContext(ApiContext);
  const { entries, getEntryDetail, isLoading, entryDetail } = apiContext;

  // fields context
  const formContext = useContext(FormFieldContext);

  useEffect(() => {
    getEntryDetail(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entries]);

  // countries-states-cities
  const country = Country.getCountryByCode("IN");

  const updatedStates = (countryId) =>
    State.getStatesOfCountry(countryId).map((state) => ({
      label: state.name,
      value: state.id,
      ...state,
    }));
  const updatedCities = (countryId, stateId) =>
    City.getCitiesOfState(countryId, stateId).map((city) => ({
      label: city.name,
      value: city.id,
      ...city,
    }));

  const audioRef = useRef(null);
  const [duration, setDuration] = useState(0);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  return (
    <>
      {isLoading || entryDetail === null ? (
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
          <Box className="bgPurple">
            <Box mx="auto" maxWidth="1400px" padding="60px 100px 100px 100px">
              <Text fontSize="16px" className="font-bold text-white ">
                Ref ID #{entryDetail.refId}
              </Text>
              <Flex
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                className="mt-4"
              >
                <Box>
                  <FormControl className="form-control">
                    <FormLabel
                      className="form-label text-purpleLight font-bold"
                      fontSize="16px"
                      htmlFor="dateSubmitted"
                    >
                      Date Submitted
                    </FormLabel>
                    <Input
                      className="input bgWhite text-grey mt-1"
                      borderRadius="2px"
                      size="md"
                      //   isRequired
                      fontSize="18px"
                      id="dateSubmitted"
                      name="dateSubmitted"
                      type="text"
                      value={entryDetail.dateSubmitted}
                    />
                  </FormControl>
                </Box>
                <Box className="ml-4">
                  <FormControl className="form-control">
                    <FormLabel
                      className="form-label text-purpleLight font-bold"
                      fontSize="16px"
                      htmlFor="submittername"
                    >
                      Full Name
                    </FormLabel>
                    <Input
                      className="input bgWhite text-grey mt-1"
                      borderRadius="2px"
                      size="md"
                      //   isRequired

                      fontSize="18px"
                      id="submittername"
                      name="submittername"
                      type="text"
                      value={entryDetail.submittername}
                    />
                  </FormControl>
                </Box>
                <Box className="ml-4">
                  <FormControl className="form-control">
                    <FormLabel
                      className="form-label text-purpleLight font-bold"
                      fontSize="16px"
                      htmlFor="role"
                    >
                      Role
                    </FormLabel>
                    <Input
                      className="input bgWhite text-grey mt-1"
                      borderRadius="2px"
                      size="md"
                      //   isRequired

                      fontSize="18px"
                      id="role"
                      name="role"
                      type="text"
                      value={entryDetail.role}
                    />
                  </FormControl>
                </Box>
              </Flex>
              <Flex
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                className="mt-4"
              >
                <Box>
                  <FormControl className="form-control">
                    <FormLabel
                      className="form-label text-purpleLight font-bold"
                      fontSize="16px"
                      htmlFor="role"
                    >
                      Country
                    </FormLabel>
                    <div className="select-wrapper">
                      <select
                        className="text-white bgPinkLight mt-2 mb-4 select"
                        name="country"
                        id="country"
                        style={{
                          width: "250px",
                        }}
                        value={entryDetail.country}
                      >
                        <option value="">Select country</option>
                        {country && (
                          <option value={`${country.name},${country.isoCode}`}>
                            {country.name}
                          </option>
                        )}
                      </select>
                    </div>
                  </FormControl>
                </Box>
                <Box className="ml-4">
                  <FormControl className="form-control">
                    <FormLabel
                      className="form-label text-purpleLight font-bold"
                      fontSize="16px"
                      htmlFor="state"
                    >
                      State
                    </FormLabel>
                    <div className="select-wrapper">
                      <select
                        className="text-white bgPinkLight select mt-2 mb-4"
                        name="state"
                        id="state"
                        style={{
                          width: "250px",
                        }}
                        value={entryDetail.state}
                      >
                        <option value="">Select state</option>
                        {updatedStates(
                          entryDetail.country !== ""
                            ? entryDetail.country.split(",")[1]
                            : null
                        ).map((updatedState) => {
                          return (
                            <option
                              key={updatedState.isoCode}
                              value={`${updatedState.label},${updatedState.isoCode}`}
                            >
                              {updatedState.label}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </FormControl>
                </Box>
                <Box className="ml-4">
                  <FormControl className="form-control">
                    <FormLabel
                      className="form-label text-purpleLight font-bold"
                      fontSize="16px"
                      htmlFor="city"
                    >
                      City
                    </FormLabel>
                    <div className="select-wrapper">
                      <select
                        className="text-white bgPinkLight select mt-2 mb-4"
                        name="city"
                        id="city"
                        style={{
                          width: "250px",
                        }}
                        value={entryDetail.city}
                      >
                        <option value="">Select city</option>
                        {updatedCities(
                          entryDetail.country.split(",")[1],
                          entryDetail.state.split(",")[1]
                        ).map((updatedCity) => {
                          return (
                            <option
                              key={updatedCity.label}
                              value={updatedCity.label}
                            >
                              {updatedCity.label}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </FormControl>
                </Box>
              </Flex>
              <Flex
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Box display="flex" flexGrow="1">
                  <FormControl className="form-control">
                    <FormLabel
                      className="form-label text-purpleLight font-bold"
                      fontSize="16px"
                      htmlFor="email"
                    >
                      Email
                    </FormLabel>
                    <Input
                      className="input bgWhite text-grey mt-1 mb-4"
                      borderRadius="2px"
                      size="md"
                      //   isRequired

                      fontSize="18px"
                      id="email"
                      name="email"
                      type="email"
                      value={entryDetail.email}
                    />
                  </FormControl>
                </Box>
                <Box className="ml-4">
                  <FormControl className="form-control">
                    <FormLabel
                      className="form-label text-purpleLight font-bold"
                      fontSize="16px"
                      htmlFor="contact"
                    >
                      Contact number
                    </FormLabel>
                    <InputGroup>
                      <Input
                        width="70px"
                        className="input bgWhite mt-1 mb-4 text-grey"
                        borderRadius="2px"
                        size="md"
                        readOnly
                        placeholder="+91"
                        fontSize="18px"
                        id="countrycode"
                        name="countrycode"
                        type="text"
                      />
                      <Input
                        className="input bgWhite mt-1 mb-4 ml-4 text-grey"
                        borderRadius="2px"
                        size="md"
                        placeholder="9XXXX-XXXXX"
                        fontSize="18px"
                        id="contact"
                        name="contact"
                        type="tel"
                        pattern="[1-9]{10}"
                        value={entryDetail.contact}
                      />
                    </InputGroup>
                  </FormControl>
                </Box>
                <Box display="flex" flexGrow="1" className="ml-4">
                  <FormControl className="form-control">
                    <FormLabel
                      className="form-label text-purpleLight font-bold"
                      fontSize="16px"
                      htmlFor="postaladdress"
                    >
                      Postal address
                    </FormLabel>
                    <Input
                      className="input bgWhite text-grey mt-1 mb-4"
                      borderRadius="2px"
                      size="md"
                      //   isRequired

                      fontSize="18px"
                      id="postaladdress"
                      name="postaladdress"
                      type="text"
                      value={entryDetail.postaladdress}
                    />
                  </FormControl>
                </Box>
              </Flex>
              <Box className="mt-2">
                <FormControl>
                  <Flex
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    className="audio-input-container bgPurpleDark mb-4"
                  >
                    <Box fontSize="16px">
                      <p className="text-white">{entryDetail.audio}</p>
                      <p
                        style={{
                          fontSize: "12px",
                        }}
                        className="text-white font-bold"
                      >
                        00:00/{calculateTime(duration)}
                      </p>
                      <audio
                        ref={audioRef}
                        onLoadedData={() =>
                          setDuration(audioRef.current.duration)
                        }
                        src={entryDetail.audio}
                        preload="metadata"
                      />
                    </Box>
                    <Box className="form-control">
                      <label
                        htmlFor="audio"
                        className="text-purpleLight font-bold"
                        style={{
                          cursor: "pointer",
                        }}
                      >
                        Replace audio file
                      </label>
                      <input
                        type="file"
                        name="audio"
                        id="audio"
                        hidden
                        accept="audio/*"
                      />
                    </Box>
                  </Flex>
                </FormControl>
              </Box>
              <Flex
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                className="mt-4"
              >
                <Box display="flex" flexGrow="1">
                  <FormControl className="form-control">
                    <FormLabel
                      className="form-label text-purpleLight font-bold"
                      fontSize="16px"
                      htmlFor="songtitle"
                    >
                      Song title
                    </FormLabel>
                    <Input
                      className="input bgWhite text-grey mt-2"
                      borderRadius="2px"
                      size="md"
                      //   isRequired

                      fontSize="18px"
                      id="songtitle"
                      name="songtitle"
                      type="text"
                      value={entryDetail.songtitle}
                    />
                  </FormControl>
                </Box>
                <Box display="flex" flexGrow="1" className="ml-4">
                  <FormControl className="form-control">
                    <FormLabel
                      className="form-label text-purpleLight font-bold"
                      fontSize="16px"
                      htmlFor="artist"
                    >
                      Artist
                    </FormLabel>
                    <Input
                      className="input bgWhite text-grey mt-2"
                      borderRadius="2px"
                      size="md"
                      //   isRequired

                      fontSize="18px"
                      id="artist"
                      name="artist"
                      type="text"
                      value={entryDetail.artist}
                    />
                  </FormControl>
                </Box>
                <Box className="ml-4">
                  <FormControl>
                    <FormLabel
                      className="form-label text-purpleLight font-bold"
                      fontSize="16px"
                      htmlFor="artistCategory"
                    >
                      Artist category
                    </FormLabel>
                    <Box
                      className="select-wrapper form-control"
                      fontSize="18px"
                    >
                      <select
                        className="text-white bgPinkLight select mt-2"
                        name="artistCategory"
                        id="artistCategory"
                        placeholder="Pick an artist category"
                        value={entryDetail.artistCategory}
                        required
                        style={{
                          width: "250px",
                        }}
                      >
                        <option value="">Pick an artist category</option>
                        <option value="Composer">Composer</option>
                        <option value="Solo Artist">Solo Artist</option>
                        <option value="Musician">Musician</option>
                        <option value="Band">Band</option>
                        <option value="Collaboration">Collaboration</option>
                      </select>
                    </Box>
                  </FormControl>
                </Box>
              </Flex>
              <Box className="mt-4">
                {(entryDetail.instagram ||
                  entryDetail.twitter ||
                  entryDetail.youtube) && (
                  <FormControl className="form-control">
                    <FormLabel
                      className="form-label text-purpleLight"
                      fontWeight="bold"
                      fontSize="16px"
                      htmlFor="socialmedialinks"
                    >
                      Social media links
                    </FormLabel>
                    {entryDetail.instagram && (
                      <Flex
                        flexDirection="row"
                        justifyContent="space-between"
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

                        <Input
                          className="input bgWhite ml-4 text-grey"
                          borderRadius="2px"
                          size="md"
                          placeholder="Instagram profile link"
                          fontSize="18px"
                          id="instagram"
                          name="instagram"
                          type="url"
                          value={entryDetail.instagram}
                        />
                      </Flex>
                    )}
                    {entryDetail.youtube && (
                      <Flex
                        flexDirection="row"
                        justifyContent="space-between"
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

                        <Input
                          className="input bgWhite ml-4 text-grey"
                          borderRadius="2px"
                          size="md"
                          placeholder="Youtube channel link"
                          fontSize="18px"
                          id="youtube"
                          name="youtube"
                          type="url"
                          value={entryDetail.youtube}
                        />
                      </Flex>
                    )}
                    {entryDetail.twitter && (
                      <Flex
                        flexDirection="row"
                        justifyContent="space-between"
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

                        <Input
                          className="input bgWhite ml-4 text-grey"
                          borderRadius="2px"
                          size="md"
                          placeholder="Twitter profile link"
                          fontSize="18px"
                          id="twitter"
                          name="twitter"
                          type="url"
                          value={entryDetail.twitter}
                        />
                      </Flex>
                    )}
                  </FormControl>
                )}
              </Box>
              <Box className="mt-4">
                {entryDetail.additionalinfo && (
                  <FormControl className="form-control">
                    <FormLabel
                      className="form-label text-purpleLight"
                      fontWeight="bold"
                      fontSize="16px"
                      htmlFor="additionalinfo"
                    >
                      Additional info
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
                      rows="10"
                      value={entryDetail.additionalinfo}
                    />
                  </FormControl>
                )}
              </Box>
              <Box className="mt-4">
                <Flex
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Text
                    cursor="pointer"
                    fontSize="16px"
                    className="text-white font-bold"
                  >
                    Exit without saving changes
                  </Text>
                  <button
                    style={{
                      fontSize: "16px",
                      width: "180px",
                      height: "50px",
                      borderRadius: "3px",
                      outline: "none",
                      border: "none",
                    }}
                    className="text-white form-control bgPurpleLight font-bold"
                    type="button"
                  >
                    Save changes
                  </button>
                </Flex>
              </Box>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default EditEntry;
